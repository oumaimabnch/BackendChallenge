# Project Commands

# Docker Commands
npm run docker:build: Builds Docker containers using docker-compose.

npm run docker:start: Initiates Docker containers using docker-compose up.

npm run docker:stop: Stops and removes Docker containers using docker-compose down.

# prisma Commands

npm run prisma:migrate: Executes database migrations for development using npx prisma migrate dev.

npm run prisma:generate: Generates the Prisma client using npx prisma generate.

# Developement setup

npm run dev-with-docker: Starts Docker, runs Prisma migrations, generates the Prisma client, and initiates the development environment using a sequence of commands.

npm run dev:setup: Builds Docker containers and sets up the development environment using npm run docker:build followed by npm run dev-with-docker.

