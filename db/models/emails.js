import { eq, desc, sql } from "drizzle-orm";
import { emails, users, getUser } from '$db';

export const allEmails = ({ db }) =>
  db.select()
    .from(emails)
    .all();

export const getUserEmails = async ({ db }, user, TYPE) => {
  if (TYPE && !['sent', 'draft', 'message'].includes(TYPE)) {
    throw new Error('`TYPE` must be one of [`sent`, `draft`, `message`]');
  };

  const { id } = await getUser({ db }, user);

  const data = await db.select()
    .from(emails)
    .where(eq(emails.userId, id))
    .orderBy(desc(emails.createdAt));

  return (TYPE) ? data.filter(({ type }) => type === TYPE) : data;
}

export const getEmail = ({ db }, id) =>
  db.select()
    .from(emails)
    .where(eq(emails.id, id))
    .limit(1)
    .then(r => (r.length) ? r[0] : null);

export const deleteEmail = ({ db }, id) =>
  db.delete(emails)
    .where(
      eq(emails.id, id)
    );

export const existsEmail = ({ db }, id) =>
  db.select({ id: emails.id })
    .from(emails)
    .where(eq(emails.id, id))
    .limit(1)
    .then(r => (r.length === 1) ? true : false);

export const insertEmail = async ({ db }, user, value) => {
  const type = [value.type + 's'];

  const { id: userId } = await getUser({ db }, user);

  if (!('headers' in value)) {
    value.headers = {};
  };

  const id = await db.insert(emails)
    .values({
      userId,
      ...value,
    })
    .returning({ id: emails.id })
    .then(r => r[0].id);

  const keys = await getUser({ db }, user);
  keys[type].push(id);

  await db.update(users)
    .set({ [type]: keys[type] })
    .where(eq(users.user, user));

  return id;
}
