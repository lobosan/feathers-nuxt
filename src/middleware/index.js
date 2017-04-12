'use strict';

const handler = require('feathers-errors/handler');
const notFound = require('feathers-errors/not-found');
const nuxt = require('./nuxt'); // <- Require the middleware

module.exports = function () {
   // Add your custom middleware here. Remember, that
   // in Express the order matters, `notFound` and
   // the error handler have to go last.
   const app = this;

   app.use(nuxt.render); // <- Use Nuxt's render middleware
   app.use(notFound());
   app.use(handler());
};
