import { defineConfig } from 'drizzle-kit';
import { env } from '@/env';

export default defineConfig({
	dialect: 'postgresql',
	dbCredentials: {
		url: env.DATABASE_URL,
	},
	schema: 'src/db/schema/*',
	out: 'src/db/migrations',
	casing: 'snake_case',
});

// FIXME: ❯ bun db:studio
// $ bunx --bun drizzle-kit studio --port 3000 --verbose
// No config path provided, using default 'drizzle.config.ts'
// Reading config file '/Users/vinic/developer/study/rocketseat/back-end/bun/bun-auth/drizzle.config.ts'
// To connect to Postgres database - please install either of 'pg', 'postgres', '@neondatabase/serverless' or '@vercel/postgres' drivers
// error: script "db:studio" exited with code 1
