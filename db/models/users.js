import { exists, eq } from "drizzle-orm";
import { users } from '$db';
import Bcrypt from 'bcryptjs';

export const allUsers = ({ db }) =>
  db.select()
    .from(users)
    .all();

export const getUser = ({ db }, user) =>
  db.select()
    .from(users)
    .where(eq(users.user, user))
    .limit(1)
    .then(r => (r.length) ? r[0] : null);

export const deleteUser = ({ db }, user) =>
  db.delete(users)
    .where(eq(users.user, user));

export const existsUser = ({ db }, user) =>
  db.select({ id: users.id })
    .from(users)
    .where(eq(users.user, user))
    .limit(1)
    .then(r => (r.length === 1) ? true : false);

export const updateUser = ({ db }, user, values) =>
  db.update(users)
    .set(values)
    .where(eq(users.user, user));

export const createUser = async ({ db }, { user, display, password, domains }) => {
  const exists = await existsUser({ db }, user);

  if (exists || !password) {
    return false;
  };

  await db.insert(users)
    .values({
      user,
      display,
      password: await Bcrypt.hash(password, await Bcrypt.genSalt()),
      domains,
      sents: [],
      drafts: [],
      messages: [],
    });

  return true;
}
