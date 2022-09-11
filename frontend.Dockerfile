FROM node:current-alpine

# Create app directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm install
RUN npm install react-scripts

COPY . .

#Not needed. This is a testing container
#RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]