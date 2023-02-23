import { Test, TestingModule } from "@nestjs/testing";
import { ProjectsService } from "./projects.service";

describe("UsersService", () => {
  const _projectsService = {
    find: (email: string) => Promise.resolve([]),
    create: (email: string, password: string) =>
      Promise.resolve({ id: 1, email, password }),
  };

  let service: ProjectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProjectsService,
        { provide: ProjectsService, useValue: _projectsService },
      ],
    }).compile();

    service = module.get<ProjectsService>(ProjectsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("can create an instance of User", async () => {
    expect(service.create({ title: "Test Project", department: "design" }))
      .resolves;
  });
});
