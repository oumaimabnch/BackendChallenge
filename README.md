# Project Commands
# **************
# npm run dev:setup
# **************
# Project Commands
{{
# Docker Commands
npm run docker:build

npm run docker:start

# prisma Commands
Executes database migrations for development using npx prisma migrate dev. 
' npm run prisma:migrate '
Generates the Prisma client using npx prisma generate.
' npm run prisma:generate '

# Developement setup
Starts Docker, runs Prisma migrations, generates the Prisma client, and initiates the development environment using a sequence of commands.
' npm run dev-with-docker '

 Builds Docker containers and sets up the development environment using ' npm run docker:build ' followed by ' npm run dev-with-docker '.
' npm run dev:setup '
}}
