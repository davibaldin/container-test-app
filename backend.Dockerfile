FROM node:current-alpine

ENV PATH /app/node_modules/.bin:$PATH

USER node
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run swagger-autogen

EXPOSE 8080
CMD [ "npm", "start" ]