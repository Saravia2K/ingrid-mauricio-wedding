import prisma from "@/lib/prisma";
import ListaPageClient from "./client";
import { Guest } from "../api/types";

export const dynamic = "force-dynamic";

function buildGuestsWithCompanions(
  guests: Guest[]
): (Guest & { companions: Guest[] })[] {
  const groups = new Map<number, Guest[]>();

  for (const g of guests) {
    const arr = groups.get(g.groupId) || [];
    arr.push(g);
    groups.set(g.groupId, arr);
  }

  const result: (Guest & { companions: Guest[] })[] = [];

  for (const [, groupGuests] of groups) {
    // sort group members by name (case-insensitive)
    groupGuests.sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
    );

    // find leader (if any), otherwise take the first (already sorted)
    const leader = groupGuests.find((x) => x.leader) || groupGuests[0];
    const companions = groupGuests.filter((x) => x.id !== leader.id);

    result.push({ ...leader, companions });
  }

  // sort result by leader name
  result.sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
  );

  return result;
}

export default async function ListaPage() {
  const guests = await prisma.guest.findMany();

  const guestsList = buildGuestsWithCompanions(guests);

  return <ListaPageClient guests={guestsList} />;
}
