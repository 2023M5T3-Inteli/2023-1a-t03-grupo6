import * as request from "supertest";
import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";

import { AppModule } from "./../src/app.module";
//////////////////////////////////////////////////////////////////////////////////////

describe("Authentication System (e2e)", () => {
  /** dependency instances */
  let app: INestApplication;

  /** general purpose variables */
  const _random = (Math.random() + 1).toString(36).substring(7);
  const body = { email: `test${_random}@example.com`, password: "test1234" };

  /** dummy dependency instance and module */
  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    await app.init();
  });

  /** test suite */
  it("handles a signup request POST /user/signup", async () => {
    await request(app.getHttpServer())
      .post("/user/signup")
      .send(body)
      .expect(201)
      .then((res) => {
        const { id, email } = res.body;
        expect([id, email]).toBeDefined();
        expect(email).toEqual(body.email);
      });
  });
});
