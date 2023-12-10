FROM node:alpine

WORKDIR /my-app-workdir
COPY ./package.json .
COPY prisma ./prisma/
COPY .env ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]