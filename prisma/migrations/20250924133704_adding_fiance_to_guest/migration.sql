/*
  Warnings:

  - Added the required column `fiance` to the `Guest` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Fiance" AS ENUM ('INGRID', 'MAURICIO');

-- AlterTable
ALTER TABLE "Guest" ADD COLUMN     "fiance" "Fiance" NOT NULL;
