const express    = require('express');
const cors       = require('cors');
const morgan     = require('morgan');
const bodyParser = require('body-parser');
const config     = require('config');
const path       = require('path');

const swaggerUi   = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')

module.exports = () => {
  const app = express();

  app.use(cors());

  morgan.token('req-headers', function(req,res){
    return JSON.stringify(req.headers, null, 4)
  });

  app.use(morgan('Remote: :remote-addr, User: :remote-user, Date: :date[clf], Method: :method, URL: :url, HTTP: :http-version, Status: :status, Bytes: :res[content-length], Referrer: :referrer, User-Agent: :user-agent, Request Headers: :req-headers'));

  app.set('port', process.env.PORT || config.get('server.port'));
  app.use(bodyParser.json());

  require('./route')(app);

  
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile))
  app.use('/version', function(req,res){
    res.setHeader('content-type', 'text/html; charset=UTF-8');
    res.sendFile(path.join(__dirname+'/../version'));

  });
  app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));

  });


  return app;
};