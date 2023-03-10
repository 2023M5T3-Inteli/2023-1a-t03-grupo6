/**
 * IMPORTANT ODDITY ABOUT SQL QUERIES
 * find*(arg) methdos : if arg = null | undefined returns first element in table
 */

import { Repository } from "typeorm";
import { randomBytes, pbkdf2Sync } from "crypto";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";

import { User } from "./users.entity";
//////////////////////////////////////////////////////////////////////////////////////

interface UserAttrs {
  email: string;
  password: string;
}

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repository: Repository<User>) {}

  async create(_body: UserAttrs) {
    const _user = this.repository.create({
      email: _body.email,
      password: _body.password,
    });

    return await this.repository.save(_user);
  }

  async update(id: number, attrs: Partial<User>) {
    const _user = await this.findOne(id);
    if (!_user) throw new NotFoundException("User NOT found");

    if (attrs.password) {
      const _salt = randomBytes(16).toString("hex");
      const _hash = pbkdf2Sync(
        attrs.password,
        _salt,
        8848,
        64,
        "sha512"
      ).toString("hex");
      attrs.password = `${_salt}.${_hash}`;
    }

    return await this.repository.save(Object.assign(_user, attrs));
  }

  async remove(id: number) {
    const _user = await this.findOne(id);
    if (!_user) throw new NotFoundException("User NOT found");
    await this.repository.remove(_user);
    return "User removed";
  }

  async findOne(id: number) {
    return !id ? null : await this.repository.findOne({ where: { id } });
  }

  async find(email: string) {
    return await this.repository.find({ where: { email } });
  }
}
