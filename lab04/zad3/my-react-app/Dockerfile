FROM node:14-alpine AS development
ENV NODE_ENV development

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 3100

CMD [ "yarn", "start" ]