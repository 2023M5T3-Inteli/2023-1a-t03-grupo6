import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { PersonModel } from "src/models/person.model"
import { PersonSchema } from "src/schemas/person.schema"
import { Repository } from "typeorm"

@Controller('/person')
export class PersonController {
    constructor(@InjectRepository(PersonModel) private model: Repository<PersonModel>) {}
    @Post()
    public async create(@Body() body: PersonSchema): Promise<{data: PersonModel}> {
        const personCreated = await this.model.save(body)
        return {data: personCreated}
    }
    @Get(':id')
    public async getOne(@Param('id') id: number): Promise<{data: PersonModel}> {
        const person = await this.model.findOne({where: { id } });

        if(!person){
            throw new NotFoundException(`Não achei um funcionário com o id ${id}`);
        }

        return {data: person}
    }
    @Get()
    public async getAll(): Promise<{data: PersonModel[]}> {
        const list = await this.model.find();
        return {data: list}
    }
    @Put(':id')
    public async update(@Param('id') id: number, @Body() body: PersonSchema): Promise<{data: PersonModel}> {
        const person = await this.model.findOne({where: { id } });
        if(!person){
            throw new NotFoundException(`Não achei um funcionário com o id ${id}`);
        }

        await this.model.update({id}, body)
        
        return {data: await this.model.findOne({where: { id } })};
    }
    @Delete(':id')
    public async delete(@Param('id') id: number): Promise<{data: string}> {
        const person = await this.model.findOne({where: { id } });
        await this.model.delete(id);
        return {data: `O funcionário com o id ${id} foi deletado`}; 
    }
}