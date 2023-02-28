/*
  Warnings:

  - Added the required column `favoriteTags` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `technologies` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "completeName" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "area" TEXT NOT NULL,
    "jobType" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "dellCurriculum" TEXT NOT NULL,
    "teams" TEXT NOT NULL,
    "technologies" TEXT NOT NULL,
    "favoriteTags" TEXT NOT NULL,
    "photo" TEXT NOT NULL
);
INSERT INTO "new_users" ("area", "completeName", "dellCurriculum", "email", "id", "job", "jobType", "location", "photo", "teams") SELECT "area", "completeName", "dellCurriculum", "email", "id", "job", "jobType", "location", "photo", "teams" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
CREATE UNIQUE INDEX "users_teams_key" ON "users"("teams");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
