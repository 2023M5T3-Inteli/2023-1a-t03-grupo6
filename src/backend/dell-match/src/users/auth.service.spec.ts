/**
 * @fileoverview Unit tests for the AuthService class
 */
import { Test, TestingModule } from "@nestjs/testing";
import { BadRequestException, NotFoundException } from "@nestjs/common";

import { AuthService } from "./auth.service";
import { User } from "./entities/user.entity";
import { UsersService } from "./users.service";
//////////////////////////////////////////////////////////////////////////////////////

describe("AuthService", () => {
  /** dependency instances */
  let service: AuthService;
  let _usersService: Partial<UsersService>;

  /** mock variables and objects */
  const _mockUser = {
    name: "John Doe",
    email: "john.doe@example.com",
    jobTitle: "Software Engineer",
    city: "New York",
    country: "USA",
  };

  /** mock dependency instances and module */
  beforeEach(async () => {
    _usersService = {
      create: (_user) =>
        Promise.resolve(Object.assign({ id: 1 }, _mockUser) as User),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: _usersService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  /** test suite */
  it("can create an instance of AuthService", () => {
    expect(service).toBeDefined();
  });
});
