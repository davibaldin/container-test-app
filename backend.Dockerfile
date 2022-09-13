FROM node:current-alpine

ENV PATH /app/node_modules/.bin:$PATH
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run swagger-autogen

RUN rm -rf /root/.node
USER node

EXPOSE 8080
CMD [ "npm", "start" ]