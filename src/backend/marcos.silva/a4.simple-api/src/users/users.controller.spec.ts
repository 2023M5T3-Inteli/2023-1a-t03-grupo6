/**
 * IMPORTANT CAVEAT ABOUT TESTING CONTROLLERS
 *
 * controllers should not have complex logic so tests should be really simple
 * all programming and business logic should be implemented in services, interceptors, etc
 */

import { NotFoundException } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";

import { User } from "./users.entity";
import { AuthService } from "./auth.service";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
//////////////////////////////////////////////////////////////////////////////////////

describe("UsersController", () => {
  /** dependency instances */
  let controller: UsersController;
  let _authService: Partial<AuthService>;
  let _usersService: Partial<UsersService>;

  /** general purpose variables */
  let _counter = 1;
  const _body = {
    id: _counter,
    email: `test${_counter}@example.com`,
    password: "test1234",
    admin: true,
    reports: [],
  };

  /** dummy dependency instances and module */
  beforeEach(async () => {
    let users: User[] = [_body];

    _usersService = {
      findOne: (id: number) => {
        const [_user] = users.filter((el) => el.id === id);
        return Promise.resolve(_user);
      },
    };

    _authService = {};

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        { provide: UsersService, useValue: _usersService },
        { provide: AuthService, useValue: _authService },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  /** test suite */
  it("can create an instance of UsersController", () => {
    expect(controller).toBeDefined();
  });

  it("can fetch user in GET /getMe", () => {
    const _user = controller.getCurrentUser(_body as User);
    expect(_user).toEqual(_body);
  });

  it("throws an error if user with given id is not found in GET /:id", async () => {
    await expect(controller.findUser(`${_counter + 1}`)).rejects.toThrow(
      NotFoundException
    );
  });
});
