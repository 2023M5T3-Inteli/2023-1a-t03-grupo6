import { Test } from "@nestjs/testing";
import { AuthService } from "./auth.service";
import { User } from "./users.entity";
import { UsersService } from "./users.service";
//////////////////////////////////////////////////////////////////////////////////////

describe("AuthService", () => {
  /** dependency instances */
  let service: AuthService;

  /** dummy dependency instance and module */
  beforeEach(async () => {
    const _usersService: Partial<UsersService> = {
      find: () => Promise.resolve([]),
      create: (body: Partial<User>) => Promise.resolve({} as User),
    };

    const _module = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: _usersService },
      ],
    }).compile();

    service = _module.get(AuthService);
  });

  /** test suite */
  it("can create an instance of AuthService", async () => {
    expect(service).toBeDefined();
  });
});
