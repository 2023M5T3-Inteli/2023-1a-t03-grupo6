import { IsInt, IsString, Min } from 'class-validator';


export class PersonSchema {
    @IsString()
    name: string;

    @IsInt()
    @Min(1)
    age: number;
}