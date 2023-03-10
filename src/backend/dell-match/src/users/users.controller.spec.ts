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

      findAll: (email?: string) => {
        return email
          ? Promise.resolve(_users.filter((user) => user.email === email))
          : Promise.resolve(_users);
      },

      findOne: (id: number) => {
        return Promise.resolve(_users.find((user) => user.id === id));
      },

      update: (id: number, _user: Partial<User>) => {
        const index = _users.findIndex((user) => user.id === id);
        _users[index] = Object.assign(_users[index], _user);
        return Promise.resolve(_users[index]);
      },

      remove: (id: number) => {
        _users = _users.filter((user) => user.id !== id);
        return Promise.resolve();
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

  it("should find users @GET /users", async () => {
    const _user = await controller.create(_mockUser);
    const _users = await controller.findAll();
    expect(_users).toBeDefined();
    expect(_users).toHaveLength(1);
    expect(_users).toMatchObject([_user]);
  });

  it("should find single user by email @GET /users?email=:email", async () => {
    const _user = await controller.create(_mockUser);
    const _foundUser = await controller.findAll(_user.email);
    expect(_foundUser).toBeDefined();
    expect(_foundUser).toHaveLength(1);
    expect(_foundUser).toMatchObject([_user]);
  });

  it("should find single user @GET /users/:id", async () => {
    const _user = await controller.create(_mockUser);
    const _foundUser = await controller.findOne(_user.id.toString());
    expect(_foundUser).toBeDefined();
    expect(_foundUser).toMatchObject(_user);
  });

  it("should update user @PATCH /users/:id", async () => {
    const _user = await controller.create(_mockUser);
    const _updatedUser = await controller.update(_user.id.toString(), {
      name: "Jane Doe",
    });
    expect(_updatedUser).toBeDefined();
    expect(_updatedUser).toMatchObject({ ..._user, name: "Jane Doe" });
  });

  it("should delete user @DELETE /users/:id", async () => {
    const _user = await controller.create(_mockUser);
    await controller.remove(_user.id.toString());
    const _users = await controller.findAll();
    expect(_users).toBeDefined();
    expect(_users).toHaveLength(0);
  });
});