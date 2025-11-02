import { Column, Entity, Index, OneToMany } from "typeorm";

import { BaseModel } from "./BaseModel";
import { Availability } from "./Availability";

@Entity({ name: "admins" })
export class Admin extends BaseModel {
  @Column()
  name!: string;

  @Index({ unique: true })
  @Column()
  email!: string;

  @Column({ name: "password_hash" })
  passwordHash!: string;

  @OneToMany(() => Availability, (availability) => availability.admin)
  availabilities?: Availability[];
}

