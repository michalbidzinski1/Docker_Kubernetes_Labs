FROM node:alpine AS builder
WORKDIR /usr/src/my-app/frontend
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "yarn", "start" ]