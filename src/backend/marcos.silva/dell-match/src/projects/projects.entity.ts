/**
 * IMPORTANT CAVEAT ABOUT TYPEORM METHODS & HOOK DECORATORS
 *
 * save(), remove() : hooks will be executed if called with entity instances
 * insert(), update(), delete() : hooks will NOT be executed
 * @AfterInsert, @AfterUpdate, ...: executed ONLY upon entity instances, NOT upon plain objects
 */

import {
  AfterInsert,
  AfterUpdate,
  BeforeRemove,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from "typeorm";
//////////////////////////////////////////////////////////////////////////////////////

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  department: string;

  @Column()
  description: string;

  @Column()
  keywords: string;

  @Column()
  team: string;

  @Column()
  status: string;

  @Column()
  applicationDeadline: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  @Column()
  headCount: number;

  @Column()
  headCountDescription: string;

  @AfterInsert()
  logInsert() {
    console.log("@HOOK = Inserted project with id", this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log("@HOOK = Updated project with id", this.id);
  }

  @BeforeRemove()
  logRemove() {
    console.log("@HOOK = Removed project with id", this.id);
  }
}
