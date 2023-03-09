/**
 * IMPORTANT CAVEAT ABOUT TESTING CONTROLLERS
 *
 * controllers should not have complex logic so tests should be really simple
 * all programming and business logic should be implemented elsewhere
 */
import { Test, TestingModule } from "@nestjs/testing";

import { User } from "./entities/user.entity";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { CreateUserDto } from "./dto/create-user.dto";
//////////////////////////////////////////////////////////////////////////////////////

describe("UsersController", () => {
  /** dependency instances */
  let controller: UsersController;
  let _usersService: Partial<UsersService>;

  /** mock variables */
  const _mockUser = {
    name: "John Doe",
    email: "john.doe@example.com",
    jobTitle: "Software Engineer",
    city: "New York",
    country: "USA",
  };

  /** mock dependency instances and module */
  beforeEach(async () => {
    let _users: User[] = [];

    _usersService = {
      create: (_user: CreateUserDto) => {
        const user = Object.assign({ id: 1 }, _user) as User;
        _users.push(user);
        return Promise.resolve(user);
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [{ provide: UsersService, useValue: _usersService }],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  /** test suite */
  it("can create an instance of UsersController", () => {
    expect(controller).toBeDefined();
  });

  it("should create new user @POST /users", async () => {
    const _user = await controller.create(_mockUser);
    expect(_user).toBeDefined();
    expect(_user).toMatchObject({ id: 1, ..._mockUser });
  });
});
