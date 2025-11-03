# Bun Auth - Study Project

A learning project demonstrating authentication implementation with **Elysia**, **BetterAuth**, **Bun**, and **PostgreSQL**.

## Overview

This project is a study implementation of a complete authentication system featuring:

- **Framework**: Elysia with Bun runtime
- **Authentication**: BetterAuth with email/password authentication
- **Database**: PostgreSQL with Drizzle ORM
- **API Documentation**: OpenAPI/Swagger integration
- **Session Management**: Secure cookie-based sessions
- **Password Hashing**: Bun's native password hashing (Argon2)

## Tech Stack

- **Runtime**: [Bun](https://bun.sh/)
- **Web Framework**: [Elysia](https://elysiajs.com/)
- **Auth Library**: [BetterAuth](https://www.better-auth.com/)
- **Database ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Database**: PostgreSQL
- **Validation**: Zod

## Getting Started

### Prerequisites

- Bun (latest version)
- PostgreSQL 12+

### Installation

1. Clone the repository and install dependencies:
```bash
bun install
```

2. Set up environment variables by creating a `.env` file:
```env
NODE_ENV=development
PORT=3333

BETTER_AUTH_URL=http://localhost:3333
BETTER_AUTH_SECRET=your-secret-key-here

DATABASE_URL=postgresql://postgres:postgres@localhost:5432/url_shortener
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=postgres
DATABASE_NAME=url_shortener
```

3. Run database migrations:
```bash
bun run db:migrate
```

### Development

Start the development server:
```bash
bun run dev
```

The server will be available at `http://localhost:3333/`

## API Endpoints

### Authentication Routes

- `POST /auth/sign-up/email` - Register a new user
- `POST /auth/sign-in/email` - Sign in with email
- `POST /auth/sign-out` - Sign out user
- `GET /auth/get-session` - Get current session
- `POST /auth/change-password` - Change user password

### Protected Routes

- `GET /users/:id` - Get user information (requires authentication)

## Project Structure

```
src/
├── db/
│   ├── schema/          # Database table definitions
│   ├── migrations/      # Database migrations
│   └── client.ts        # Database client configuration
├── http/
│   └── plugins/         # Elysia plugins
│       ├── better-auth.ts
│       └── open-api.ts
├── lib/
│   └── auth.ts          # BetterAuth configuration
├── env.ts               # Environment variables schema
└── index.ts             # Application entry point
```

## Learning Goals

This project demonstrates:

1. Setting up a modern authentication system with BetterAuth
2. Integrating BetterAuth with Elysia framework
3. Database design and migrations with Drizzle ORM
4. Session management and secure authentication flows
5. API documentation with OpenAPI
6. Environment variable management with Zod validation
7. Using Bun's native utilities for password hashing

## License

MIT