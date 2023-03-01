import { Test } from "@nestjs/testing";
import { ConflictException } from "@nestjs/common";

import { User } from "./users.entity";
import { AuthService } from "./auth.service";
import { UsersService } from "./users.service";
//////////////////////////////////////////////////////////////////////////////////////

describe("AuthService", () => {
  /** dependency instances */
  let service: AuthService;
  let _usersService: Partial<UsersService>;

  /** dummy dependency instance and module */
  beforeEach(async () => {
    _usersService = {
      find: () => Promise.resolve([]),
      create: (body: Partial<User>) =>
        Promise.resolve({
          id: 1,
          email: body.email,
          password: body.password,
        } as User),
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

  it("creates new user with salted and hashed password", async () => {
    const email = "test@example.com";
    const password = "test1234";

    const _user = await service.signup({ email, password });
    expect(_user.password).not.toEqual(password);

    const [_salt, _hash] = _user.password.split(".");

    expect([_salt, _hash]).toBeDefined();
  });

  it("throws an error if user signs up with email already in use", async () => {
    _usersService.find = () => Promise.resolve([{} as User]);

    await expect(
      service.signup({ email: "test@example.com", password: "test1234" })
    ).rejects.toThrow(ConflictException);
  });
});
