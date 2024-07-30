
export default function MovieCard({ movie }) {

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};