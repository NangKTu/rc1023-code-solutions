set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "users" (
  "userId" serial PRIMARY KEY,
  "userName" varchar,
  "password" varchar,
  "created_at" timestamptz(6)
);

CREATE TABLE "weights" (
  "weightId" serial PRIMARY KEY,
  "userId" integer UNIQUE,
  "weight" integer,
  "weightType" varchar,
  "created_at" timestamptz(6)
);

ALTER TABLE "weights" ADD FOREIGN KEY ("userId") REFERENCES "users" ("userId");
