-- CreateTable
CREATE TABLE "Guest" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "groupId" INTEGER NOT NULL,
    "confirmed" BOOLEAN,
    "leader" BOOLEAN DEFAULT false,
    "cellphone" INTEGER NOT NULL,

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Guest_groupId_leader_key" ON "Guest"("groupId", "leader");
