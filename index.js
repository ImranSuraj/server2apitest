import express from 'express';

// Create an instance of express
const app = express();
const PORT = process.env.PORT || 5000;
// Define a route for the homepage
app.get('/', (req, res) => {
  res.json(
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      "title": "Ultimate Avengers II",
      "type": "movie",
      "year": "2006",
      "imdb_id": "9",
      "comment": "good",
      "id": 1
    }
  )
  });

// Start the server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
