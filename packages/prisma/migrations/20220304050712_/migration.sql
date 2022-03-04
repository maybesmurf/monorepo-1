/*
  Warnings:

  - You are about to drop the column `akcJudgeId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `akcLicense` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `akcSecretaryId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `emergencyContactName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `emergencyContactPhone` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `postalCode` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `state` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `streetAddress` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `AuthAccount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AuthSession` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AuthUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AuthVerificationToken` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DogToUser` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "AuthAccount" DROP CONSTRAINT "AuthAccount_userId_fkey";

-- DropForeignKey
ALTER TABLE "AuthSession" DROP CONSTRAINT "AuthSession_userId_fkey";

-- DropForeignKey
ALTER TABLE "JudgesByTrials" DROP CONSTRAINT "JudgesByTrials_judgeId_fkey";

-- DropForeignKey
ALTER TABLE "Run" DROP CONSTRAINT "Run_scoreKeeperId_fkey";

-- DropForeignKey
ALTER TABLE "Trial" DROP CONSTRAINT "Trial_secretaryId_fkey";

-- DropForeignKey
ALTER TABLE "TrialEntry" DROP CONSTRAINT "TrialEntry_userId_fkey";

-- DropForeignKey
ALTER TABLE "_DogToUser" DROP CONSTRAINT "_DogToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_DogToUser" DROP CONSTRAINT "_DogToUser_B_fkey";

-- DropIndex
DROP INDEX "User_id_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "akcJudgeId",
DROP COLUMN "akcLicense",
DROP COLUMN "akcSecretaryId",
DROP COLUMN "city",
DROP COLUMN "emergencyContactName",
DROP COLUMN "emergencyContactPhone",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "phone",
DROP COLUMN "postalCode",
DROP COLUMN "state",
DROP COLUMN "streetAddress",
ADD COLUMN     "emailVerified" TIMESTAMP(3),
ADD COLUMN     "image" TEXT,
ADD COLUMN     "name" TEXT,
ALTER COLUMN "email" DROP NOT NULL;

-- DropTable
DROP TABLE "AuthAccount";

-- DropTable
DROP TABLE "AuthSession";

-- DropTable
DROP TABLE "AuthUser";

-- DropTable
DROP TABLE "AuthVerificationToken";

-- DropTable
DROP TABLE "_DogToUser";

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "DoggoUser" (
    "id" TEXT NOT NULL,
    "akcJudgeId" TEXT,
    "akcLicense" TEXT,
    "akcSecretaryId" TEXT,
    "city" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emergencyContactName" TEXT,
    "emergencyContactPhone" TEXT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT,
    "postalCode" TEXT NOT NULL,
    "state" "State" NOT NULL,
    "streetAddress" TEXT NOT NULL,

    CONSTRAINT "DoggoUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DogToDoggoUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "DoggoUser_id_key" ON "DoggoUser"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_DogToDoggoUser_AB_unique" ON "_DogToDoggoUser"("A", "B");

-- CreateIndex
CREATE INDEX "_DogToDoggoUser_B_index" ON "_DogToDoggoUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trial" ADD CONSTRAINT "Trial_secretaryId_fkey" FOREIGN KEY ("secretaryId") REFERENCES "DoggoUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JudgesByTrials" ADD CONSTRAINT "JudgesByTrials_judgeId_fkey" FOREIGN KEY ("judgeId") REFERENCES "DoggoUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Run" ADD CONSTRAINT "Run_scoreKeeperId_fkey" FOREIGN KEY ("scoreKeeperId") REFERENCES "DoggoUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrialEntry" ADD CONSTRAINT "TrialEntry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "DoggoUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DogToDoggoUser" ADD FOREIGN KEY ("A") REFERENCES "Dog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DogToDoggoUser" ADD FOREIGN KEY ("B") REFERENCES "DoggoUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
