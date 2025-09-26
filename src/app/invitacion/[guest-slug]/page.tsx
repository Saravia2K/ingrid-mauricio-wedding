import { redirect } from "next/navigation";
import { ResolvingMetadata, type Metadata } from "next";
import prisma from "@/lib/prisma";
import fs from "fs";
import path from "path";

import MainBanner from "@/components/sections/main-banner";
import Date from "@/components/sections/date";
import SongPlayer from "@/components/sections/song-player";
import History from "@/components/sections/history";
import VideoPlayer from "@/components/sections/video-player";
import Gallery from "@/components/sections/gallery";
import Details from "@/components/sections/details";
import Reminder from "@/components/sections/reminder";
import Agenda from "@/components/sections/agenda";
import GiftsAdvice from "@/components/sections/gifts-advice";
import ChildrenAdvice from "@/components/sections/children-advice";
import Confirmation from "@/components/sections/confirmation";

import DATA from "@/assets/json/data.json";

import styles from "./invitacion.module.scss";

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

const { song, videoUrl } = DATA;
const historyPath = path.join(process.cwd(), "/src/history.txt");
const history = fs.readFileSync(historyPath, {
  encoding: "utf-8",
  flag: "r",
});

const goToSinInvitar = () => redirect("/sin-invitar");
export default async function InvitationPage({ params }: InvitationPageProps) {
  const { "guest-slug": slug } = await params;
  const guest = await prisma.guest.findFirst({
    where: {
      slug,
    },
  });

  if (!guest) return goToSinInvitar();

  if (!guest.leader) {
    const leader = await prisma.guest.findFirst({
      where: {
        groupId: guest.groupId,
        leader: true,
      },
    });

    if (!leader) return goToSinInvitar();

    return redirect(`/invitacion/${leader.slug}`);
  }

  const companions = await prisma.guest.findMany({
    where: {
      groupId: guest.groupId,
      leader: false,
    },
  });

  return (
    <main className={styles.main}>
      <MainBanner />
      <Date />
      <SongPlayer songSrc={song.url} name={song.name} author={song.author} />
      <History history={history} />
      <VideoPlayer videoSrc={videoUrl} />
      <Gallery />
      <Details />
      <Reminder />
      <Agenda />
      <GiftsAdvice />
      <ChildrenAdvice />
      <Confirmation leader={guest} companions={companions} />
    </main>
  );
}

type InvitationPageProps = {
  params: Promise<{
    "guest-slug": string;
  }>;
};
