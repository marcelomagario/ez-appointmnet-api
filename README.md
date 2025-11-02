# 🗓️ Appointment Booking System

> Complete digital scheduling platform for independent professionals, built with **Node.js**, **TypeScript**, **React**, and **AWS** infrastructure.

---

## 🧾 Overview

This project is a full-stack scheduling system that allows **clients** to book appointments online and **administrators** to manage availability, payments, and notifications through a modern dashboard.

---

## 👥 User Roles

### 👤 Client
- Register with **email** or **phone number**, confirming via link or SMS.
- Login using email and password (**JWT** + **Bcrypt**).
- Password recovery by email or SMS.
- View available days and time slots defined by admin.
- Book appointments (min. 1h in advance, max. 2 weeks ahead).
- View upcoming and past appointments.
- Cancel appointments directly from the dashboard.
- Receive **email** and **SMS** notifications on:
  - Booking confirmation  
  - Appointment cancellation  
- Automatic reminders:
  - Each appointment lasts **1 hour** (even with delays).  
  - **Cancellations within 24h** are charged.  

### 🧑‍💼 Administrator
- Login with email and password.
- Manage availability (day/time blocks).
- Block full days when needed.
- Create, edit, or cancel appointments for any user.
- Manually create new users.
- Track **payment status** (paid / pending) and **set consultation price**.
- View **daily** and **weekly** schedule.
- Visual notifications for new appointments.
- Send **SMS** reminders manually (1 click, via **Amazon SNS**).
- Maintain private **admin-only notes** for each user.

---

## 📬 Notifications

**E-mail (AWS SES)**  
- Account confirmation  
- Appointment confirmation  
- Appointment cancellation  

**SMS (AWS SNS)**  
- Booking confirmation (with rules and details)  
- Cancellation notice (with link to reschedule)

---

## 📊 Admin Dashboard

- Weekly / monthly appointment statistics  
- Total registered users  
- Top 10 most frequent clients  

---

## 💻 Tech Stack

### Backend
- **Node.js** + **TypeScript**
- **Express** + **TypeORM**
- **PostgreSQL** (AWS RDS)
- **JWT** authentication
- **Bcrypt** password hashing

### Frontend
- **React**
- Responsive layout (mobile-friendly)
- Separate UIs for **admin** and **client**

### AWS Infrastructure
- **ECS (Fargate)** for backend containerization  
- **S3 + CloudFront** for frontend hosting  
- **SES** for email notifications  
- **SNS** for SMS delivery  
- **RDS (PostgreSQL)** for data persistence  

---

## 🔐 Security

- Token-based authentication (**JWT**)  
- Encrypted passwords (**Bcrypt**)  
- Account verification via **email** or **SMS**  
- Logical user deletion  

---

## ⚙️ Environment

Create a `.env` file based on the variables below:

| Variable | Description | Example |
| --- | --- | --- |
| `PORT` | API HTTP port | `3000` |
| `DATABASE_URL` | PostgreSQL connection string | `postgres://postgres:postgres@localhost:5432/ez_appointment` |

---

### 🧠 Author
Developed by **Marcelo Yukio Magario (Tel)**  
**Backend Developer – Node.js | TypeScript | AWS Certified Cloud Practitioner**

