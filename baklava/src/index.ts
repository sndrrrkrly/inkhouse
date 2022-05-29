import http from 'http';

import cookieParser from 'cookie-parser';
import express from 'express';

import morgan from 'morgan';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

function normalizePort(x: any) {
     const port = parseInt(x, 10);
   
     if (isNaN(port)) { return x; };
     if (port >= 0) { return port; };
   
     return false;
};

const port = normalizePort(process.env.inkHouse_PORT || '8000');
app.set('port', port);

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(
     cors({ 
        credentials: true,
        origin: process.env.ORIGIN,
        optionsSuccessStatus: 200,
     })
);

const server = http.createServer(app);

server.listen(port);
server.on('error', onHTTPServerError);
server.on('listening', onHTTPServerListening);

function onHTTPServerError(error: any) {
     if (error.syscall !== 'listen') {
          throw error;
     };
      
     const bind = typeof port === 'string' 
          ? 'Pipe ' + port 
          : 'Port ' + port;
      
     switch (error.code) {
          case 'EACCES':
               console.error(bind + ' requires elevated privileges');
               process.exit(1);
               
               break;
          case 'EADDRINUSE':
               console.error(bind + ' is already in use');
               process.exit(1);
               
               break;
          default:
               throw error;
     }; 
};

function onHTTPServerListening() {
     const addr = server.address();
     const bind = typeof addr === 'string' 
          ? 'pipe ' + addr 
          : 'port ' + addr!.port;
     
     console.log('Listening on ' + bind);     
};