export class CreateUserDto {
    id: string;
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

    constructor(createUser?: Partial<CreateUserDto>){
        this.completeName = createUser?.completeName;
        this.job = createUser?.job;
        this.area = createUser?.area;
        this.jobType = createUser?.jobType;
        this.location = createUser?.location;
        this.email = createUser?.email;
        this.dellCurriculum = createUser?.dellCurriculum;
        this.teams = createUser?.teams;
        this.technologies = createUser?.technologies;
        this.favoriteTags= createUser?.favoriteTags;
        this.photo = createUser?.photo;
      }
}

