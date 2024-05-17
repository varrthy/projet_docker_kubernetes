FROM node:19-alpine

WORKDIR /app

COPY src /app/

RUN npm install

CMD ["node","myWebApp.js"]
