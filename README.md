# (Backend) University Dashboard Management

A high-performance PERN stack (PostgreSQL, Express, React, Node.js) academic hub. This multi-role system (Admin, Teacher, Student) utilizes a decoupled architecture where an Express/Node.js backend serves a modular React frontend powered by Refine. By leveraging PostgreSQL (Neon) with Drizzle ORM, it ensures type-safe data integrity for class management, automated scheduling, and real-time analytics. Secure access is managed via Better-Auth, providing a robust, controlled-access environment for campus operations.

## <a name="tech-stack">⚙️ Tech Stack</a>

- **Arcjet** is a security-first tool that helps developers protect their applications with just a few lines of code. It provides security primitives for rate limiting, bot protection, email validation, and sensitive data masking, ensuring the application remains secure and resilient.

- **Better Auth** is a framework-agnostic authentication and authorization library for TypeScript. It provides built-in support for email and password authentication, social sign-on (Google, GitHub, Apple, and more), and multi-factor authentication, simplifying user authentication and account management.

- **Cloudinary** is an end-to-end image and video management solution. It automates the upload, storage, manipulation, and delivery of media assets, ensuring optimized performance and a seamless visual experience across any device.

- **Drizzle ORM** is a lightweight and performant TypeScript ORM designed with developer experience in mind. It provides a seamless interface between application code and database operations while maintaining high performance and reliability.

- **Express.js** is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It facilitates the rapid development of RESTful APIs and serves as the standard server framework for the Node.js ecosystem.

- **Neon** is a fully managed, serverless PostgreSQL database platform. It offers features like instant provisioning, autoscaling, and database branching, enabling developers to build scalable applications without managing infrastructure.

- **Node.js** is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser. It is designed to build scalable network applications and serves as the foundation for the project's backend logic.

### Dev Tools

- **Site24x7** is a comprehensive monitoring solution that provides deep insights into application performance and infrastructure health. It allows for real-time tracking of uptime, end-user experience, and server metrics to ensure maximum availability.


## <a name="features">🔋 Features</a>

👉 **Multi-Role Authentication**: A secure entry system powered by **Better Auth** and **Arcjet** that dynamically routes Students, Teachers, and Admins to protected dashboards with strict role-based permissions.

👉 **Unified Analytics Dashboard**: A high-level overview of the institution's health, featuring real-time statistics on student enrollment, active classes, and faculty distribution via **Refine's** data providers.

👉 **Intelligent Subject Management**: Centralized control for curriculum where you can create subjects, apply instant filters, and drill down into specific class assignments and teacher workloads.

👉 **Departmental Governance**: A structural management layer that organizes subjects and faculties into departments, providing detailed views of every student and educator within a specific academic branch.

👉 **Dynamic Faculty Directory**: A robust, paginated directory of all professors featuring advanced search by name or email, profile image hosting via **Cloudinary**, and full teaching schedule visibility.

👉 **Advanced Class Orchestration**: The core engine of the app built with **Drizzle ORM**, allowing Admins to schedule sessions, set capacity limits, and manage complex assignments of multiple teachers across different sections.

👉 **Code-Based Enrollment System**: A "Google Classroom" inspired workflow where students gain instant access to courses by entering a unique 6-8 digit joining code, ensuring a secure and controlled-access environment.

And many more, including code architecture and reusability.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- Git
- Node.js
- npm (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/gift56/class-management-system-server.git
cd classroom-backend
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
# Database
DATABASE_URL=''

# Arcjet
ARCJET_KEY=
ARCJET_ENV=development

# Application
FRONTEND_URL="http://localhost:5173"

# Better Auth
BETTER_AUTH_SECRET=
```

Replace the placeholder values with your real credentials. You can get these by signing up at: **Arcjet**, **Neon**, **Better-Auth**.

**Running the Project**

```bash
npm run dev
```

Open http://localhost:8000 in your browser to view the project.
