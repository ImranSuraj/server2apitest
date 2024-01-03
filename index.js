// Require the express module
const express = require('express');

// Create an instance of express
const app = express();


// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, this is the homepage!');
});

// Define a route for /about
app.get('/about', (req, res) => {
  res.send('This is the about page!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
