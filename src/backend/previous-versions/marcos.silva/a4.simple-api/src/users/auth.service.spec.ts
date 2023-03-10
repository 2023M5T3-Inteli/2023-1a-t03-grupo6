import { Test } from "@nestjs/testing";
import {
  BadRequestException,
  ConflictException,
  NotFoundException,
} from "@nestjs/common";

import { User } from "./users.entity";
import { AuthService } from "./auth.service";
import { UsersService } from "./users.service";
//////////////////////////////////////////////////////////////////////////////////////

describe("AuthService", () => {
  /** dependency instances */
  let service: AuthService;
  let _usersService: Partial<UsersService>;

  /** general purpose variables */
  const body = { email: "test@example.com", password: "test1234" };

  /** dummy dependency instance and module */
  beforeEach(async () => {
    let users: User[] = [];

    _usersService = {
      find: (email: string) => {
        const _users = users.filter((el) => el.email === email);
        return Promise.resolve(_users);
      },
      create: (body: Partial<User>) => {
        const _user = {
          id: users.length++,
          email: body.email,
          password: body.password,
        } as User;

        users.push(_user);
        return Promise.resolve(_user);
      },
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
    const { email, password } = body;

    const _user = await service.signup({ email, password });
    expect(_user.password).not.toEqual(password);

    const [_salt, _hash] = _user.password.split(".");
    expect([_salt, _hash]).toBeDefined();
  });

  it("throws an error if user signs up with email already in use", async () => {
    await service.signup(body);
    await expect(service.signup(body)).rejects.toThrow(ConflictException);
  });

  it("throws if signin is called with unused email", async () => {
    await expect(service.signin(body)).rejects.toThrow(NotFoundException);
  });

  it("throws if an invalid password is provided", async () => {
    const _random = (Math.random() + 1).toString(36).substring(7);
    await service.signup(body);

    await expect(
      service.signin({ email: body.email, password: _random })
    ).rejects.toThrow(BadRequestException);
  });

  it("returns user if correct password is provided", async () => {
    await service.signup(Object.assign({}, body));
    expect(service.signin(body)).toBeDefined();
  });
});
