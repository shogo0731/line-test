FROM node:24

WORKDIR /app

COPY ./app/package.json /app/package.json

RUN npm install