-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(191) NOT NULL,
    `completeName` VARCHAR(191) NOT NULL,
    `job` VARCHAR(191) NOT NULL,
    `area` VARCHAR(191) NOT NULL,
    `jobType` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `dellCurriculum` VARCHAR(191) NOT NULL,
    `teams` VARCHAR(191) NOT NULL,
    `technologies` VARCHAR(191) NOT NULL,
    `favoriteTags` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    UNIQUE INDEX `users_teams_key`(`teams`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
