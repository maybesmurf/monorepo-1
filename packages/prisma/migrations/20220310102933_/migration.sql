/*
  Warnings:

  - Added the required column `imageUrl` to the `Trial` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Trial` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trial" ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
