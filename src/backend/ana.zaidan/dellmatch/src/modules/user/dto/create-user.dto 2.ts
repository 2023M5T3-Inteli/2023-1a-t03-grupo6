import { IsString } from "class-validator";
import { Prisma } from "@prisma/client";
import { User } from "../entities/user.entity";

//export class CreateUserDto implements Prisma.UserCreateInput{
//    id?: string;
//    completeName: string;
//    job: string;
//    area: string;
//    jobType: string;
//    location: string;
//    email: string;
//    dellCurriculum: string;
//    teams: string;
//    technologies: string;
//    favoriteTags: string;
//    photo: string;
//}

export class CreateUserDto extends User{
    @IsString()
    id?: string;
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
