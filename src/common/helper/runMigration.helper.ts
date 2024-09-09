import { db } from '../plugin/kysely.plugin';
import { promises as fs } from 'fs';
import path from 'path';
import {consoleColor} from "../constant/consoleColor.constant";

async function runMigrations() {
    const migrationsDir = path.join(__dirname, '../migrations');
    const files = await fs.readdir(migrationsDir);

    for (const file of files) {
        const migration = require(path.join(migrationsDir, file));
        console.log(consoleColor.FG.GREEN, `[DB] Running migration: ${file}`);
        await migration.up(db);
    }

    console.log(consoleColor.FG.GREEN, '[DB] Migrations completed');
    await db.destroy();
}

runMigrations().catch(console.error);
