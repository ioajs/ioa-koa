'use strict';

const ioa = require('ioa');

ioa.http = function () {

   const Koa = require('koa');
   const bodyParser = require('koa-bodyparser');
   const middleware = require('./middleware');

   const { main, logger } = ioa;

   let port = 8800;

   const { config } = main;

   if (config && config.port) {
      port = config.port;
   }

   ioa.port = port;

   const koa = new Koa();
   koa.use(bodyParser());
   koa.use(middleware);

   ioa.koa = koa;

   koa.listen(port);

   logger.log(`http://localhost:${port}`);

}