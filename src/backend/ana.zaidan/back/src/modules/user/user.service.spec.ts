import { Test, TestingModule } from '@nestjs/testing';
import { resourceLimits } from 'worker_threads';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

const userList: CreateUserDto[]=[];

const createdUser = new CreateUserDto({
  id: "001",
  completeName: "Ana Clara Zaidan",
  job: "dev",
  area: "tech",
  jobType: "remote",
  location: "sao paulo",
  email: "ana.zaidan@dell.com",
  dellCurriculum: "pdf",
  teams: "linkteams",
  technologies: "js, react, css",
  favoriteTags: "dev, front-end",
  photo: "linkphoto",});

//definir 
describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
          {
          provide:UserService,
          useValue:{
            create: jest.fn().mockResolvedValue(createdUser),
          }
        }
        ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  //teste em si
  //it('should be defined', () => {
   // expect(service).toBeDefined();
  //});

 

  it('should return user infos', () => {
    

    const newUser = new CreateUserDto({
      id: "001",
      completeName: "Ana Clara Zaidan",
      job: "dev",
      area: "tech",
      jobType: "remote",
      location: "sao paulo",
      email: "ana.zaidan@dell.com",
      dellCurriculum: "pdf",
      teams: "linkteams",
      technologies: "js, react, css",
      favoriteTags: "dev, front-end",
      photo: "linkphoto",});

      const result = await UserService.create(newUser);

      expect(result).toEqual(createdUser);
    //expect(service.createUser("001", "Ana Clara Zaidan", "dev", "tech", "remote", "sao paulo", "ana.zaidan@dell.com", "pdf", "linkteams","js, react, css","dev, front-end", "linkphoto"
    //)).toBe(createdUser);
  });
});

