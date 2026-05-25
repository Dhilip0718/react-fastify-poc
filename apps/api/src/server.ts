import fastify from 'fastify';
import cors from '@fastify/cors';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import { appRouter } from './router';

const server = fastify({
  logger: true,
  routerOptions: {
    maxParamLength: 5000,
  },
});

const start = async () => {
  try {
    await server.register(cors, {
      origin: '*',
    });

    await server.register(fastifyTRPCPlugin, {
      prefix: '/trpc',
      trpcOptions: {
        router: appRouter,
      },
    });

    server.get('/ping', async () => {
      return { status: 'ok', message: 'The ping was successfull' };
    });

    await server.listen({ port: 3001, host: '0.0.0.0' });
    server.log.info(`Server is running on ${server.server.address()}`);
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

start();
