
import MovieCard from "./MovieCard";

export default function MoviesList({ movies }) {
    
  return (
    <section className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </section>
  );
};