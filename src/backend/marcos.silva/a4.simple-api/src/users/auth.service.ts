import { Injectable } from "@nestjs/common";
import { UsersService } from "./users.service";
//////////////////////////////////////////////////////////////////////////////////////

interface SignupAttrs {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(private service: UsersService) {}

  async signup(body: SignupAttrs) {
    const [_user] = await this.service.find(body.email);
    return _user ? "User already exists" : this.service.create(body);
  }

  async signin() {}
}
