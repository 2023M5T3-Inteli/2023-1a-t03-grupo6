import { Injectable } from "@nestjs/common";

interface _body {
  email: string;
  password: string;
}

@Injectable()
export class UsersService {
  createOne(body: _body) {
    return `${body.email} | ${body.password}`;
  }
}
