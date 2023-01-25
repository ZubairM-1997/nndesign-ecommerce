CREATE TABLE IF NOT EXISTS "admin_users" (
  "id" INTEGER NOT NULL,
  "first_name" TEXT NOT NULL,
  "last_name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "password" TEXT NOT NULL,

  PRIMARY KEY ("id")
);