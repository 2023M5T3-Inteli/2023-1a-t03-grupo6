import { Test, TestingModule } from "@nestjs/testing";
import { UsersService } from "./users.service";

describe("UsersService", () => {
  const _usersService = {
    find: (email: string) => Promise.resolve([]),
    create: (email: string, password: string) =>
      Promise.resolve({ id: 1, email, password }),
  };

  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: UsersService, useValue: _usersService },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("can create an instance of User", async () => {
    expect(service.create({ email: "test@example.com", password: "test1234" }))
      .resolves;
  });
});
