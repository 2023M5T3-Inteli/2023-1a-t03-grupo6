import * as request from "supertest";
import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { AppModule } from "./../src/app.module";
//////////////////////////////////////////////////////////////////////////////////////

describe("AppController (e2e)", () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("/ (GET)", () => {
    return request(app.getHttpServer())
      .get("/")
      .expect(200)
      .expect("Hello World!");
  });
});

// it("should validate incoming data using data transfer object @POST /users", async () => {
//   const _validationPipe = new ValidationPipe({ whitelist: true });

//   const metadata: ArgumentMetadata = {
//     type: "body",
//     metatype: CreateUserDto,
//   };

//   const _incomingData = Object.assign(_mockUser, { age: 30 });
//   const _validateData = await _validationPipe.transform(
//     <CreateUserDto>_incomingData,
//     metadata
//   );
//   expect(_validateData).not.toHaveProperty("age");
// });

// it("should revert if body does not contain all required information POST /users", () => {});
// it("should revert if information on request body is of incorrect type POST /users", () => {});
