import { rmSync } from "fs";
import * as path from "path";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Test, TestingModule } from "@nestjs/testing";
import { BadRequestException, NotFoundException } from "@nestjs/common";

import { User } from "./entities/user.entity";
import { UsersService } from "./users.service";
//////////////////////////////////////////////////////////////////////////////////////

describe("UsersService", () => {
  /** dependency instances */
  let service: UsersService;

  /** mock variables and objects */
  const _mockUser = {
    name: "John Doe",
    email: "john.doe@example.com",
    jobTitle: "Software Engineer",
    city: "New York",
    country: "USA",
  };

  /** mock dependency instances and module */
  beforeAll(async () =>
    rmSync(path.join(__dirname, "../../db/test.sqlite"), { force: true })
  );

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: "sqlite",
          database: path.join(__dirname, "../../db/test.sqlite"),
          entities: [User],
          synchronize: true,
        }),
        TypeOrmModule.forFeature([User]),
      ],
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  /** test suite */
  it("can create an instance of UsersService", () => {
    expect(service).toBeDefined();
  });

  it("should create a new user", async () => {
    const _user = await service.create(_mockUser);
    expect(_user).toBeDefined();
    expect(_user).toHaveProperty("id");
    expect(_user).toHaveProperty("name", _mockUser.name);
    expect(_user).toHaveProperty("email", _mockUser.email);
    expect(_user).toHaveProperty("jobTitle", _mockUser.jobTitle);
    expect(_user).toHaveProperty("city", _mockUser.city);
    expect(_user).toHaveProperty("country", _mockUser.country);
  });

  it("should throw an error if user already exists", async () => {
    await expect(service.create(_mockUser)).rejects.toThrow(
      new BadRequestException("User already exists")
    );
  });

  it("should find all users", async () => {
    const _users = await service.findAll();
    expect(_users).toBeDefined();
    expect(_users).toHaveLength(1);
  });

  it("should find an user by email", async () => {
    const [_user] = await service.findAll(_mockUser.email);
    expect(_user).toBeDefined();
    expect(_user).toHaveProperty("id", 1);
    expect(_user).toHaveProperty("name", _mockUser.name);
    expect(_user).toHaveProperty("email", _mockUser.email);
    expect(_user).toHaveProperty("jobTitle", _mockUser.jobTitle);
    expect(_user).toHaveProperty("city", _mockUser.city);
    expect(_user).toHaveProperty("country", _mockUser.country);
  });

  it("should find an user by id", async () => {
    const _user = await service.findOne(1);
    expect(_user).toBeDefined();
    expect(_user).toHaveProperty("id", 1);
    expect(_user).toHaveProperty("name", _mockUser.name);
    expect(_user).toHaveProperty("email", _mockUser.email);
    expect(_user).toHaveProperty("jobTitle", _mockUser.jobTitle);
    expect(_user).toHaveProperty("city", _mockUser.city);
    expect(_user).toHaveProperty("country", _mockUser.country);
  });

  it("should update a user", async () => {
    const _user = await service.update(1, {
      name: "Jane Doe",
      email: "jane.doe@dell.com",
    });
    expect(_user).toBeDefined();
    expect(_user).toHaveProperty("id", 1);
    expect(_user).toHaveProperty("name", "Jane Doe");
    expect(_user).toHaveProperty("email", "jane.doe@dell.com");
    expect(_user).toHaveProperty("jobTitle", _mockUser.jobTitle);
    expect(_user).toHaveProperty("city", _mockUser.city);
    expect(_user).toHaveProperty("country", _mockUser.country);
  });

  it("should delete a user", async () => {
    const _user = await service.remove(1);
    await expect(service.findOne(1)).rejects.toThrow(
      new NotFoundException("User not found")
    );
  });
});
