FROM node:current-alpine

# Create app directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run swagger-autogen

EXPOSE 8080
CMD [ "npm", "start" ]