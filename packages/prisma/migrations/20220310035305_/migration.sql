/*
  Warnings:

  - You are about to drop the `DoggoUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DogToDoggoUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "JudgesByTrials" DROP CONSTRAINT "JudgesByTrials_judgeId_fkey";

-- DropForeignKey
ALTER TABLE "Run" DROP CONSTRAINT "Run_scoreKeeperId_fkey";

-- DropForeignKey
ALTER TABLE "Trial" DROP CONSTRAINT "Trial_secretaryId_fkey";

-- DropForeignKey
ALTER TABLE "TrialEntry" DROP CONSTRAINT "TrialEntry_userId_fkey";

-- DropForeignKey
ALTER TABLE "_DogToDoggoUser" DROP CONSTRAINT "_DogToDoggoUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_DogToDoggoUser" DROP CONSTRAINT "_DogToDoggoUser_B_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "akcJudgeId" TEXT,
ADD COLUMN     "akcLicense" TEXT,
ADD COLUMN     "akcSecretaryId" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "emergencyContactName" TEXT,
ADD COLUMN     "emergencyContactPhone" TEXT,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "postalCode" TEXT,
ADD COLUMN     "state" "State",
ADD COLUMN     "streetAddress" TEXT;

-- DropTable
DROP TABLE "DoggoUser";

-- DropTable
DROP TABLE "_DogToDoggoUser";

-- CreateTable
CREATE TABLE "_DogToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DogToUser_AB_unique" ON "_DogToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_DogToUser_B_index" ON "_DogToUser"("B");

-- AddForeignKey
ALTER TABLE "Trial" ADD CONSTRAINT "Trial_secretaryId_fkey" FOREIGN KEY ("secretaryId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JudgesByTrials" ADD CONSTRAINT "JudgesByTrials_judgeId_fkey" FOREIGN KEY ("judgeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Run" ADD CONSTRAINT "Run_scoreKeeperId_fkey" FOREIGN KEY ("scoreKeeperId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrialEntry" ADD CONSTRAINT "TrialEntry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DogToUser" ADD FOREIGN KEY ("A") REFERENCES "Dog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DogToUser" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
