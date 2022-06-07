FROM node:alpine AS build
WORKDIR /opt/app/frontend/
COPY package.json .
RUN npm install
COPY . .
RUN yarn build




FROM nginx
COPY --from=build /opt/app/frontend/build /usr/share/nginx/html
