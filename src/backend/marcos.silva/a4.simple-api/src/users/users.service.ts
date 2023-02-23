import { Repository } from "typeorm";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
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

    return await this.repository.save(Object.assign(_user, attrs));
  }

  async remove(id: number) {
    const _user = await this.findOne(id);
    if (!_user) throw new NotFoundException("User NOT found");
    await this.repository.remove(_user);
    return `User ${id} removed`;
  }

  async findOne(id: number) {
    return await this.repository.findOne({ where: { id } });
  }

  async find(email: string) {
    return await this.repository.find({ where: { email } });
  }
}
