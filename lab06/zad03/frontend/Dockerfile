FROM node:16-alpine3.12 AS builder
WORKDIR /usr/src/my-app/frontend
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run build

FROM nginx 
COPY --from=builder /usr/src/my-app/frontend/build /usr/share/nginx/html