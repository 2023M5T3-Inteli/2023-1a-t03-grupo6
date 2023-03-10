import { randomBytes, pbkdf2Sync } from "crypto";
import {
  Injectable,
  ConflictException,
  NotFoundException,
  BadRequestException,
} from "@nestjs/common";
import { UsersService } from "./users.service";
//////////////////////////////////////////////////////////////////////////////////////

interface SignupAttrs {
  email: string;
  password: string;
}

interface SigninAttrs {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(private service: UsersService) {}

  async signup(body: SignupAttrs) {
    const [_user] = await this.service.find(body.email);
    if (_user) throw new ConflictException("User already exists");

    const _salt = randomBytes(16).toString("hex");

    const _hash = pbkdf2Sync(body.password, _salt, 8848, 64, "sha512").toString(
      "hex"
    );

    body.password = `${_salt}.${_hash}`;

    return this.service.create(body);
  }

  async signin(body: SigninAttrs) {
    const [_user] = await this.service.find(body.email);
    if (!_user) throw new NotFoundException("User NOT found");

    const [_salt, _hash] = _user.password.split(".");

    const _hash2 = pbkdf2Sync(
      body.password,
      _salt,
      8848,
      64,
      "sha512"
    ).toString("hex");

    if (_hash !== _hash2) throw new BadRequestException("Invalid password");

    return _user;
  }
}
