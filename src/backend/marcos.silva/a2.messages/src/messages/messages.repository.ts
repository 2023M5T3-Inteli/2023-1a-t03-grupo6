import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";
//////////////////////////////////////////////////////////////////////////////////////

@Injectable()
export class MessagesRepository {
  async findAll() {
    return await this._readFile();
  }

  async findOne(id: string) {
    const _messages = await this._readFile();
    return _messages[id];
  }

  async createOne(content: string) {
    const _messages = await this._readFile();

    const id = Date.now();
    _messages[id] = { id, content };

    await writeFile(
      `${__dirname}/messages.database.json`,
      JSON.stringify(_messages)
    );
  }

  async _readFile() {
    return JSON.parse(
      await readFile(`${__dirname}/messages.database.json`, "utf8")
    );
  }
}
