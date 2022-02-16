// server boilerplate
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// import controller (will I have a controller)
// const controller = require('./controller');

// JSON parse all incoming requests
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
});

// Global error handling 
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

// server listens on port 3000
app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
}); // http://localhost:3000/