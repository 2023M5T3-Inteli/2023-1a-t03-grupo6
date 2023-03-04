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
  ManyToOne,
  AfterInsert,
  AfterUpdate,
  BeforeRemove,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "src/users/users.entity";
//////////////////////////////////////////////////////////////////////////////////////

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  lng: number;

  @Column()
  lat: number;

  @Column()
  mileage: number;

  @Column({ default: false })
  approved: boolean;

  /**
   * () => User : solves circular dependency issue
   * user => user.reports : critical to multiple relationships scenarios eg Reports, Users, Approvers
   */
  @ManyToOne(() => User, (user) => user.reports)
  user: User;

  /** HOOK DECORATORS */
  @AfterInsert()
  logInsert() {
    console.log("@HOOK = Inserted report with id ", this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log("@HOOK = Updated report with id ", this.id);
  }

  @BeforeRemove()
  logRemove() {
    console.log("@HOOK = Removed report with id ", this.id);
  }
}
