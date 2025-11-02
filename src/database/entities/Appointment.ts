import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

import { BaseModel } from "./BaseModel";
import { User } from "./User";

export enum AppointmentStatus {
  CONFIRMED = "confirmed",
  CANCELLED = "cancelled",
}

export enum PaymentStatus {
  PAID = "paid",
  PENDING = "pending",
}

const numericColumnTransformer = {
  to: (value: number) => value,
  from: (value: string | null) => (value ? Number(value) : 0),
};

@Entity({ name: "appointments" })
export class Appointment extends BaseModel {
  @Column({ name: "user_id" })
  userId!: string;

  @ManyToOne(() => User, (user) => user.appointments, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user!: User;

  @Column({ type: "date" })
  date!: string;

  @Column({ type: "time without time zone" })
  time!: string;

  @Column({ type: "enum", enum: AppointmentStatus, default: AppointmentStatus.CONFIRMED })
  status!: AppointmentStatus;

  @Column({
    name: "payment_status",
    type: "enum",
    enum: PaymentStatus,
    default: PaymentStatus.PENDING,
  })
  paymentStatus!: PaymentStatus;

  @Column({ type: "numeric", precision: 10, scale: 2, transformer: numericColumnTransformer })
  price!: number;

  @Column({ name: "created_by_admin", default: false })
  createdByAdmin!: boolean;
}

