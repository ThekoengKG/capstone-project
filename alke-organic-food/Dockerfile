#first stage
FROM node:8.11.2-apline as node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install npm@latest -g

RUN npm install

COPY . .

RUN npm run build


#Second stage

FROM nginx:latest-alpine

COPY --from=node /usr/src/app/dist /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf


