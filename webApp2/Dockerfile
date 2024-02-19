FROM node:19-alpine3.16

WORKDIR /home/webApp2

COPY ./app.js ./package.json /

RUN npm install

EXPOSE 5001

CMD ["npm","start"]