/**
 * IMPORTANT CAVEAT ABOUT TYPEORM METHODS & HOOK DECORATORS
 *
 * save(), remove() : hooks will be executed if called with entity instances
 * insert(), update(), delete() : hooks will NOT be executed
 * @AfterInsert, @AfterUpdate, ...: executed ONLY upon entity instances, NOT upon plain objects
 */

import {
  Entity,
  Column,
  OneToMany,
  // AfterInsert,
  // AfterUpdate,
  // BeforeRemove,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Exclude } from "class-transformer";
import { Report } from "src/reports/reports.entity";
//////////////////////////////////////////////////////////////////////////////////////

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  @Exclude({ toPlainOnly: true })
  password: string;

  @Column({ default: true })
  admin: boolean;

  /**
   * () => Report : solves circular dependency issue
   * report => report.user : critical to multiple relationships scenarios eg Reports, Users, Approvers
   */
  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];

  // @AfterInsert()
  // logInsert() {
  //   console.log("@HOOK = Inserted user with id", this.id);
  // }

  // @AfterUpdate()
  // logUpdate() {
  //   console.log("@HOOK = Updated user with id", this.id);
  // }

  // @BeforeRemove()
  // logRemove() {
  //   console.log("@HOOK = Removed user with id", this.id);
  // }
}
