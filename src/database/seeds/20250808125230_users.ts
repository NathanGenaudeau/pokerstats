import { Kysely, sql } from 'kysely';
import { DB } from '../schema/db';

export async function seed(db: Kysely<DB>): Promise<void> {
  const users = [
    {
      id: '4dad8e75-f2c1-4221-a583-347b8e1eef15',
      pseudo: 'alice',
      password_hash:
        '$2a$12$RLPAJkwQnAjrO7jrYbhYIuraIuaUxahHwRCVvCspdZWnQKy2L8Cle',
      created_at: sql`NOW()`,
    },
    {
      id: 'af52cbfe-a9c8-4ce1-9b14-6612e9dc5f04',
      pseudo: 'bob',
      password_hash:
        '$2a$12$9ZJR3tyGP65rLGiuXqgeUO9CXzpk2bHjboWblAdYxzQ/iXFOwiI82',
      created_at: sql`NOW()`,
    },
    {
      id: '9e12c2cf-fbc5-4d81-ae1e-abe34e003612',
      pseudo: 'charlie',
      password_hash:
        '$2a$12$5V5tGypSnp7k.MbuPn9JyuDy2zj2ODIrZzgJLeRE/oiHmaxlItnY2',
      created_at: sql`NOW()`,
    },
  ];

  await db
    .insertInto('users')
    .values(users)
    .onConflict((oc) => oc.column('id').doNothing())
    .execute();
}
