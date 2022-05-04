migrate-create:
	db-migrate create ${name} --migrations-dir=./src/migrations

migrate:
	db-migrate up --migrations-dir=./src/migrations

migrate-reset:
	db-migrate reset --migrations-dir=./src/migrations