import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

import { Admin } from "./Admin";
import { BaseModel } from "./BaseModel";

@Entity({ name: "availabilities" })
export class Availability extends BaseModel {
  @Column({ name: "admin_id" })
  adminId!: string;

  @ManyToOne(() => Admin, (admin) => admin.availabilities, { onDelete: "CASCADE" })
  @JoinColumn({ name: "admin_id" })
  admin!: Admin;

  @Column({ type: "date" })
  date!: string;

  @Column({ name: "start_time", type: "time without time zone" })
  startTime!: string;

  @Column({ name: "end_time", type: "time without time zone" })
  endTime!: string;

  @Column({ name: "is_blocked", default: false })
  isBlocked!: boolean;
}

