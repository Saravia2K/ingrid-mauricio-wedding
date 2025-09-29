import { redirect } from "next/navigation";
import { ResolvingMetadata, type Metadata } from "next";
import prisma from "@/lib/prisma";

import InvitationPageContent from "./content";
import Envelope from "@/components/common/envelope";

//#region Metadata
export async function generateMetadata(
  { params }: InvitationPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const [parentInfo, { "guest-slug": slug }] = await Promise.all([
    parent,
    params,
  ]);
  const guest = await prisma.guest.findFirst({
    where: {
      slug,
    },
  });
  return {
    title: `${guest?.name} | ${parentInfo.title?.absolute}`,
  };
}
//#endregion

const goToIndex = () => redirect("/");
export default async function InvitationPage({ params }: InvitationPageProps) {
  // Cargando invitación
  const { "guest-slug": slug } = await params;
  const guest = await prisma.guest.findFirst({
    where: {
      slug,
    },
  });

  // ¿No existe? No está invitado
  if (!guest) return goToIndex();

  // ¿Es acompañante? Entonces se redirige a la invitación
  // del verdadero invitado
  if (!guest.leader) {
    const leader = await prisma.guest.findFirst({
      where: {
        groupId: guest.groupId,
        leader: true,
      },
    });

    if (!leader) return goToIndex();

    return redirect(`/invitacion/${leader.slug}`);
  }

  // Se cargan los acompañantes del invitado
  const companions = await prisma.guest.findMany({
    where: {
      groupId: guest.groupId,
      leader: false,
    },
  });

  return (
    <Envelope name={guest.name}>
      <InvitationPageContent guest={guest} companions={companions} />
    </Envelope>
  );
}

type InvitationPageProps = {
  params: Promise<{
    "guest-slug": string;
  }>;
};
