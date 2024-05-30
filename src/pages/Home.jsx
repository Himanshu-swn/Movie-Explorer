import { useState } from "react";
import MovieCard from "../components/Moviecard";

function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzJjY2ViYzczZWNhOGZjMzg5N2Y5ZDFlNzQ4YThkMyIsInN1YiI6IjY2NTY5OWVkYTI2NDkzNzhjYjFjZGYyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RKfT_RdqB4sFrvRTtvP5wKqHENBOBh0sZk3rmbeLJrs",
      },
    };

    const res = await fetch(url, options);
    const json = await res.json();
    setMovies(json.results);
    console.log(json);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-4">
    <h1 className="text-4xl font-bold text-center mb-8">Movie Explorer</h1>

    <div className="flex justify-center mb-8">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full max-w-lg p-2 rounded-l-lg bg-gray-800 border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="p-2 rounded-r-lg bg-blue-600 hover:bg-blue-700 transition duration-300"
      >
        Search
      </button>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {movies.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <p className="text-center w-full col-span-full">No movies found</p>
      )}
    </div>
  </div>
  );
}

export default Home;
