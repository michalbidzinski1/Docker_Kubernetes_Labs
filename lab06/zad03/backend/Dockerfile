FROM node:14 AS builder
WORKDIR /usr/src/my-app/backend
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD [ "node", "index.js" ]