const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// import controller (will I have a controller)
// const controller = require('./controller');

// JSON parse all incoming requests
app.use(express.json());

// Is this required?  Research to find out if so and why!
app.use(express.urlencoded({ extended: true }));

// app.use(express.static('./src/index.html'));
// app.use(express.static('./src/styles.css'));

// app.get('/', (req, res) => {
//     res.status(200).send('Hello World');
// });

app.use(express.static(path.join(__dirname, './src/')));

// What is the difference between join and resolve here?  Which do I use?
// app.use(express.static(path.resolve(__dirname, 'src')));

// respond with main app
app.get('/', (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, '../src/index.html'))
);

// make a get request to the API
// app.get('/')

// Handle a 404
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

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

module.exports = app;
