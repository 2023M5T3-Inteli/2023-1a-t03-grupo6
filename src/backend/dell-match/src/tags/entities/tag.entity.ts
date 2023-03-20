import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tag {
    @PrimaryGeneratedColumn()
    idTag: number;

    @Column()
    name: string;
}