import { Kysely, sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('users')
    .addColumn('id', 'uuid', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
    .addColumn('username', 'varchar(127)', (col) => col.notNull())
    .addColumn('email', 'varchar(127)', (col) => col.notNull())
    .addColumn('password', 'varchar(127)', (col) => col.notNull())
    .addColumn('confirmed', 'boolean', (col) => col.defaultTo(false))
    .execute();
}
