/**
 * IMPORTANT CAVEAT ABOUT TYPEORM METHODS & HOOK DECORATORS
 *
 * save(), remove() : hooks will be executed if called with entity instances
 * insert(), update(), delete() : hooks will NOT be executed
 * @AfterInsert, @AfterUpdate, ...: executed ONLY upon entity instances, NOT upon plain objects
 */
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
//////////////////////////////////////////////////////////////////////////////////////

/** this entity describes a Project as commomly organized in a tech company (e.g. Dell) */
@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    enum: ["it", "commercial", "marketing", "hr", "finance", "legal", "other"],
  })
  @Column()
  area: string;

  @Column()
  description: string;

  @Column("simple-array", { nullable: true, default: null })
  keywords: string[];

  @Column()
  manager: string;

  @Column()
  teamSize: number;

  @Column("simple-array")
  teamMembers: string[];

  @Column({ enum: ["open", "in progress", "cancelled"] })
  status: string;

  @Column()
  applicationDeadline: Date;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;
}
