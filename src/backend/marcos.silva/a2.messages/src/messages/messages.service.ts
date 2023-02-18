import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";
//////////////////////////////////////////////////////////////////////////////////////

@Injectable()
export class MessagesService {
  constructor(public repository: MessagesRepository) {}

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  createOne(content: string) {
    this.repository.createOne(content);
  }
}
