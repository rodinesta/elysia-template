import { Insertable, Selectable, Updateable } from 'kysely';
import { Users } from './db.type';

export type UserRowType = Selectable<Users>;
export type InsertableUserRowType = Insertable<Users>;
export type UpdateableUserRowType = Updateable<Users>;
