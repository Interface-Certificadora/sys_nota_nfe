import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export async function openDb() {
  const db = await open({
    filename: './db/database.sqlite',
    driver: sqlite3.Database
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      ip TEXT NOT NULL,
      accessed_at TEXT NOT NULL
    )
  `);

  return db;
}