import { logger } from '@chneau/elysia-logger';
import swagger from '@elysiajs/swagger';
import { Elysia } from 'elysia';
import { consoleColor } from './common/constant/consoleColor.constant';
import { userRoutes } from './modules/user/user.router';

async function app(): Promise<void> {
  const app: Elysia = new Elysia();
  const port: number = Number(process.env.APP_PORT);
  app
    .use(swagger())
    .use(logger())
    .use(userRoutes)
    .onError(({ code }) => {
      if (code === 'NOT_FOUND') return 'Route not found :(';
    });

  try {
    app.listen({ port });
    console.log(consoleColor.FG.BLUE, `[APP] Server listening on ${port}`);
  } catch (err) {
    console.error('[ERROR] Error starting server: ', err);
    process.exit(1);
  }
}

void app();
