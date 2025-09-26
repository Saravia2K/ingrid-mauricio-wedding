/*
  Warnings:

  - Added the required column `relation` to the `Guest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Guest" ADD COLUMN     "relation" VARCHAR(25) NOT NULL;
