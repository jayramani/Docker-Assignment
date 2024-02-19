FROM node:19-alpine3.16

WORKDIR /home/webApp1

COPY ./app.js ./package.json /

RUN npm install

EXPOSE 5000

CMD ["npm","start"]