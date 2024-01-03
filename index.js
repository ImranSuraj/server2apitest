import express from 'express';

// Create an instance of express
const app = express();
const PORT = process.env.PORT || 5000;
// Define a route for the homepage
app.get('/favourite', (req, res) => {
  res.json([
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      "title": "Ultimate Avengers II",
      "type": "movie",
      "year": "2006",
      "imdb_id": "9",
      "comment": "good",
      "id": 1
    },
    {
      "poster": "https://m.media-amazon.com/images/M/MV5BZWQwZTdjMDUtNTY1YS00MDI0LWFkNjYtZDA4MDdmZjdlMDRlXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
      "title": "The Avengers",
      "type": "series",
      "year": "1961–1969",
      "imdb_id": "8",
      "comment": "nice movie",
      "id": 2
    }
  ]);
});

// Start the server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
