#!/bin/sh

set -e

psql -U postgres -d postgres -c "CREATE DATABASE prisma WITH ENCODING='UTF8' OWNER=postgres CONNECTION LIMIT=-1;"
psql -U postgres -d prisma -c "CREATE TABLE \"Station\"(
  id serial PRIMARY KEY,
  \"planetName\" text,
  \"createdAt\" TIMESTAMP
)"
