import openapi from '@elysiajs/openapi';
import Elysia from 'elysia';
import z from 'zod';

export const openApiPlugin = new Elysia({ name: 'Openapi' }).use(
	openapi({
		mapJsonSchema: {
			zod: z.toJSONSchema,
		},
	})
);
