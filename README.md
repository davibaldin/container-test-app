# Container test App

## Backend

### Construction

```bash
mkdir backend
cd backend
npm init
npm i -g nodemon@1.19.4 && npm i --save express@4.17.1 && npm i --save body-parser@1.19.0 && npm i --save config@3.2.3
npm install swagger-autogen and swagger-ui-express
npm install morgan
npm install cors
```

### Build

```bash
rm -rf node_modules
npm update
npm run swagger-autogen
```

### Startup

```bash
npm start
```

## Frontend

### Construction

```bash
npx create-react-app frontend
```

### Build

```bash
rm -rf node_modules
npm update
npm start
```