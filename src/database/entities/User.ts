import { Column, Entity, Index, OneToMany } from "typeorm";

import { Appointment } from "./Appointment";
import { BaseModel } from "./BaseModel";

export enum VerificationMethod {
  EMAIL = "email",
  SMS = "sms",
}

@Entity({ name: "users" })
export class User extends BaseModel {
  @Column()
  name!: string;

  @Index({ unique: true })
  @Column()
  email!: string;

  @Index({ unique: true })
  @Column({ nullable: true })
  phone?: string;

  @Column({ type: "smallint", nullable: true })
  age?: number;

  @Column({ nullable: true })
  gender?: string;

  @Column({ name: "password_hash" })
  passwordHash!: string;

  @Column({ name: "is_verified", default: false })
  isVerified!: boolean;

  @Column({
    name: "verification_method",
    type: "enum",
    enum: VerificationMethod,
    nullable: true,
  })
  verificationMethod?: VerificationMethod;

  @Column({ type: "text", nullable: true })
  note?: string;

  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appointments?: Appointment[];
}

