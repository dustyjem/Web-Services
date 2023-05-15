const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
      title: 'Contacts Project API',
      description: 'Json documentation for the contacts project',
    },
    host: 'localhost:8080',
    schemes: ['http', 'https'],
  };
  
  const outputFile = './swagger-output.json';
  const endpointsFiles = ['./server.js'];
  
  /* NOTE: if you use the express Router, you must pass in the 
     'endpointsFiles' only the root file where the route starts,
     such as index.js, app.js, routes.js, ... */
  
  swaggerAutogen(outputFile, endpointsFiles, doc);