import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Tag } from "./entities/tag.entity"; 

import { throwError } from "../utils/throwError.util";
//////////////////////////////////////////////////////////////////////////////////////

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag) private usersRepository: Repository<Tag>
  ) {}

  async findOne(idTag: number): Promise<Tag> {
    const tag = await this.usersRepository.findOne({ where: { idTag } });
    if (!tag) throwError("NotFoundException", "User not found");
    return tag;
  }

}
