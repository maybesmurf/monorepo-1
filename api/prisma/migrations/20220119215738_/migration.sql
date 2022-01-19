-- AddForeignKey
ALTER TABLE "Dog" ADD CONSTRAINT "Dog_primaryOwnerId_fkey" FOREIGN KEY ("primaryOwnerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
