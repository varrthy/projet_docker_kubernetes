FROM node:19-alpine

COPY src /app/

WORKDIR /app

RUN npm install

CMD ["node","myWebApp.js"]