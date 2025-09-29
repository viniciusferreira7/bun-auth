import openapi from '@elysiajs/openapi';
import { Elysia } from 'elysia';
import z from 'zod';
import { env } from '@/env';

const app = new Elysia()
	.use(
		openapi({
			mapJsonSchema: {
				zod: z.toJSONSchema,
			},
		})
	)
	.get('/', () => 'Hello Elysia')
	.get(
		'/users/:id',
		(request) => {
			const { params } = request;

			console.log(params.id);
		},
		{
			detail: {
				summary: 'Get user',
				tags: ['users'],
			},
			params: z.object({
				id: z.uuid(),
			}),
		}
	)
	.listen(env.PORT);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
