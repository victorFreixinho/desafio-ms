FROM node:19.4.0-alpine

WORKDIR /usr/src/consumer-service

COPY . .

EXPOSE 3000

RUN npm run build

CMD ["npm", "run", "start:dev"]