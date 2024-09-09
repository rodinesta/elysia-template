import { Static, t } from 'elysia';

export const userInsert = t.Object({
  username: t.String(),
  email: t.String(),
  password: t.String(),
  confirmed: t.Boolean(),
});

export type IInsertUserSchema = Static<typeof userInsert>;

// export const userModel = new Elysia({ name: 'Model.User' }).model({
//   'user.insert': t.Object({
//     username: t.String(),
//     email: t.String(),
//     password: t.String(),
//     confirmed: t.Boolean(),
//   }),
// });

// export type IInsertUserSchema = {
//   username: string;
//   email: string;
//   password: string;
//   confirmed: boolean;
// };
