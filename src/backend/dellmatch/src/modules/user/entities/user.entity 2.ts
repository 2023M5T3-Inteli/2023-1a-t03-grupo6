import { Prisma } from "@prisma/client";

export class User implements Prisma.UserUncheckedCreateInput{
    d?: string;
    completeName: string;
    job: string;
    area: string;
    jobType: string;
    location: string;
    email: string;
    dellCurriculum: string;
    teams: string;
    technologies: string;
    favoriteTags: string;
    photo: string;
}
