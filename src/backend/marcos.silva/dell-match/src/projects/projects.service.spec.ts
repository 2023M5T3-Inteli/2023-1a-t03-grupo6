import { Test, TestingModule } from "@nestjs/testing";
import { ProjectsService } from "./projects.service";

describe("ProjectsService", () => {
  const _projectsService = {
    // find: (email: string) => Promise.resolve([]),
    create: (
      title: string,
      department: string,
      description: string,
      keywords: string,
      team: string,
      status: string,
      applicationDeadline: string,
      startDate: string,
      endDate: string,
      headCount: string,
      headCountDescription: string
    ) =>
      Promise.resolve({
        id: 1,
        title,
        department,
        description,
        keywords,
        team,
        status,
        applicationDeadline,
        startDate,
        endDate,
        headCount,
        headCountDescription,
      }),
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

  it("can create an instance of Project", async () => {
    expect(
      service.create({
        title: "Test Project",
        department: "design",
        description: "Ipsum Loren",
        keywords: "abc",
        team: "abc",
        status: "abc",
        applicationDeadline: "abc",
        startDate: "abc",
        endDate: "abc",
        headCount: "abc",
        headCountDescription: "abc",
      })
    ).resolves;
  });
});
