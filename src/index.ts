import { Elysia } from 'elysia';
import z from 'zod';
import { env } from '@/env';
import { betterAuthPlugin } from './http/plugins/better-auth';
import { openApiPlugin } from './http/plugins/open-api';

const app = new Elysia()
	.use(openApiPlugin)
	.use(betterAuthPlugin)
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
