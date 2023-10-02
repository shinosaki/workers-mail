import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

const $timestamp = (name) => {
  // https://github.com/drizzle-team/drizzle-orm/blob/a7dc7e8bbdc3784f67ff32ce39bee3283f080751/examples/libsql/src/schema.ts
  return integer(name, { mode: 'timestamp' }).default(sql`(strftime('%s', 'now'))`);
};

export const users = sqliteTable('users', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  user: text('user').notNull().unique(),
  display: text('display'),
  password: text('password').notNull(),
  domains: text('domains', { mode: 'json' }).notNull(),
  sents: text('sents', { mode: 'json' }).notNull(),
  drafts: text('drafts', { mode: 'json' }).notNull(),
  messages: text('messages', { mode: 'json' }).notNull(),
  createdAt: $timestamp('created_at'),
  updatedAt: $timestamp('updated_at'),
});

export const emails = sqliteTable('emails', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: integer('user_id', { mode: 'number' }).notNull(),
  type: text('type', { enum: ['sent', 'draft', 'message'] }).notNull(),
  subject: text('subject'),
  from: text('from', { mode: 'json' }).notNull(),
  to: text('to', { mode: 'json' }).notNull(),
  headers: text('headers', { mode: 'json' }).notNull(),
  eml: text('eml').notNull(),
  createdAt: $timestamp('created_at'),
  updatedAt: $timestamp('updated_at'),
})
