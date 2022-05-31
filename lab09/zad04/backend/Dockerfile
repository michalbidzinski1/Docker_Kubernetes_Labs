FROM node:alpine
WORKDIR /opt/app
COPY ./package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]