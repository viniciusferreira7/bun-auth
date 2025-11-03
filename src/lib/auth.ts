/** biome-ignore-all lint/correctness/noUndeclaredVariables: It`s a global variable provide by bun */
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { openAPI } from 'better-auth/plugins';
import { db } from '@/db/client';
import { schema } from '@/db/schema';
import { env } from '@/env';

export const auth = betterAuth({
	baseURL: env.BETTER_AUTH_URL,
	basePath: '/auth',
	secret: env.BETTER_AUTH_SECRET,
	plugins: [openAPI()],
	database: drizzleAdapter(db, {
		provider: 'pg',
		schema: schema,
		usePlural: true,
	}),
	advanced: {
		database: {
			generateId: false,
		},
	},
	emailAndPassword: {
		enabled: true,
		autoSignIn: true,
		password: {
			hash: (password: string) => Bun.password.hash(password),
			verify: ({ password, hash }) => Bun.password.verify(password, hash),
		},
	},
	session: {
		expiresIn: 60 * 60 * 24 * 2, // 2 days,
		cookieCache: {
			maxAge: 60 / 5, // 5 minutes
		},
	},
});
