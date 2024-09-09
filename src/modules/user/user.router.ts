import { Elysia } from 'elysia';
import { userInsert } from './schemas/insert.schema';
import * as service from './user.service';

export const userRoutes = new Elysia({ prefix: '/user' })
  .get('/', () => service.getAll())
  .post('/', ({ body }) => service.insert(body), { body: userInsert });
