import type { Guest as PrismaGuest } from "../../../generated/prisma";

export type Guest = PrismaGuest;

export type NewGuest = Omit<Guest, "id">;
