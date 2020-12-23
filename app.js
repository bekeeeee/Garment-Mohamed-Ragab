const express = require('express');
const morgan = require('morgan');
const batchRouter = require('./routes/batchRouter');


// Start express app
 const app = express();

// body parser
  app.use(express.json());


// ROUTES
  app.use('/api/v1/batches', batchRouter);


  app.all('*', (req, res, next) => {
        res.status(404).json({
            status:'fail',
            message: `Cant find ${req.originalUrl}`
        })
  });

  module.exports =app;