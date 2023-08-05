FROM node:19.4.0-alpine

WORKDIR /usr/src/producer-service

COPY . .

EXPOSE 5000

RUN npm run build

CMD ["npm", "run", "start:dev"]