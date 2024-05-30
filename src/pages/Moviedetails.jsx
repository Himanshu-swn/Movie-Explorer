import { useLocation } from "react-router-dom";

export default function MovieDetails() {
  const { state } = useLocation();

  console.log(state.movie);

  const {
    original_title,
    overview,
    backdrop_path,
    release_date,
    vote_average,
  } = state.movie;
  const imageUrl = backdrop_path
    ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
    : "placeholder-image-url";

  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <img src={imageUrl} alt={original_title} className="w-full h-auto" />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-blue-400 mb-4">
            {original_title}
          </h1>
          <p className="text-lg text-gray-300 mb-4">{overview}</p>
          <p className="text-gray-400 mb-2">
            <span className="text-blue-500">Release Date:</span> {release_date}
          </p>
          <p className="text-gray-400">
            <span className="text-yellow-400">Rating:</span> {vote_average}
          </p>
        </div>
      </div>
    </div>
  );
}
