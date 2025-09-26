import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";

const Schema = z.object({
  groupId: z.coerce.number(),
  confirmed: z.boolean(),
});

export const POST = async (req: NextRequest) => {
  try {
    const validation = Schema.safeParse(await req.json());
    if (!validation.success) {
      return NextResponse.json(
        {
          message: `Error validando datos del nuevo invitado. Los siguientes datos son incorrectos: ${validation.error.issues
            .map((i) => i.path[0])
            .join(", ")}`,
        },
        { status: 400 }
      );
    }

    const { groupId, confirmed } = validation.data;
    const updated = await prisma.guest.updateMany({
      where: { groupId },
      data: { confirmed },
    });

    if (updated.count == 0)
      return NextResponse.json(
        {
          message: `Error intentando actualizar los invitados con groupId ${groupId}`,
        },
        { status: 500 }
      );

    return NextResponse.json({
      message: "Invitados actualizados correctamente",
    });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
};
