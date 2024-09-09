import { db } from '../../common/plugin/kysely.plugin';
import { InsertableUserRowType, UserRowType } from '../../common/type/kysely/user.type';

export async function insert(values: InsertableUserRowType): Promise<UserRowType> {
  return await db.insertInto('users').values(values).returningAll().executeTakeFirstOrThrow();
}

export async function getAll(): Promise<UserRowType[]> {
  return await db.selectFrom('users').selectAll().execute();
}
