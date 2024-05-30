import React from "react";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const { title, backdrop_path, vote_average } = movie;
  const imageUrl = backdrop_path
    ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
    : "placeholder-image-url";

  function onClickHandler() {
    navigate(`/movie/${movie.id}`, { state: { movie } });
    console.log(movie);
  }

  return (
    <div
      onClick={onClickHandler}
      className="cursor-pointer border border-gray-700 rounded-lg overflow-hidden transition-transform transform hover:scale-105"
    >
      <img src={imageUrl} alt={`${title} poster`} className="w-full h-auto" />
      <div className="p-4 bg-gray-800">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-400">Rating: {vote_average}</p>
      </div>
    </div>
  );
}

export default MovieCard;
