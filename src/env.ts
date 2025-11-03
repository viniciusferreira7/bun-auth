import z from 'zod';

const envSchema = z.object({
	NODE_ENV: z
		.enum(['development', 'production', 'test'])
		.default('development'),
	PORT: z.coerce.number().default(3333),

	BETTER_AUTH_URL: z.url().default('http://localhost:3333'),
	BETTER_AUTH_SECRET: z.string(),

	DATABASE_URL: z.url(),
	DATABASE_USERNAME: z.string(),
	DATABASE_PASSWORD: z.string(),
	DATABASE_NAME: z.string(),
});

const envSchemaResult = envSchema.safeParse(process.env);

if (envSchemaResult.success === false) {
	console.error(
		'❌ Invalid environment variables',
		envSchemaResult.error.issues
	);
	throw new Error('Invalid environment variables');
}

export const env = envSchemaResult.data;
