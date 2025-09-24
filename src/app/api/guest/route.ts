import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";
import validator from "validator";
import prisma from "@/lib/prisma";

const GuestSchema = z.object({
  name: z.string("El nombre debería ser un string"),
  groupId: z.coerce.number("groupId debe ser un valor numérico"),
  confirmed: z.coerce
    .boolean("confirmed debería ser un valor booleano")
    .optional(),
  leader: z.coerce
    .boolean("leader debería ser un valor booleano")
    .optional()
    .default(false),
  cellphone: z.string().refine(validator.isMobilePhone),
  fiance: z.union([z.literal("INGRID"), z.literal("MAURICIO")]),
});

export const POST = async (req: NextRequest) => {
  try {
    const result = GuestSchema.safeParse((await req.json()) || {});
    if (!result.success) {
      return NextResponse.json(
        {
          message: `Error validando datos del nuevo invitado. Los siguientes datos son incorrectos: ${result.error.issues
            .map((i) => i.path[0])
            .join(", ")}`,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      await prisma.guest.create({
        data: result.data,
      })
    );
  } catch (e: any) {
    return NextResponse.json(e, { status: 500 });
  }
};
