
import { useState } from "react";
import MoviesList from "./components/MoviesList";
import moviesData from "../data/movies";
import Filters from "./components/Filters";

function App() {
  const [movies] = useState(moviesData);
  const [filteredMovies, setFilteredMovies] = useState(moviesData);

  const handleFilter = ({ title, rating }) => {
    setFilteredMovies(
      movies.filter((movie) =>
        (title ? movie.title.toLowerCase().includes(title.toLowerCase()) : true) &&
        (rating ? movie.rating >= parseFloat(rating) : true)
      )
    );
  };


  return (
    <div className="App">
      <h1>Movies list</h1>
      <Filters onFilter={handleFilter} />
      <MoviesList movies={filteredMovies} />
    </div>
  );
}

export default App;