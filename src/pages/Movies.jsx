import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import MovieCard from "./MovieCard";

export default function Movies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);

      try {
        let data = [];

        if (searchTerm.trim()) {
          const res = await fetch(
            `https://api.tvmaze.com/search/shows?q=${searchTerm}`
          );

          const result = await res.json();
          data = result.map((item) => item.show);
        } else {
          const res = await fetch("https://api.tvmaze.com/shows");
          data = await res.json();
        }

        setMovies(data);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(fetchMovies, 400);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-500 text-slate-100 p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4  pb-6">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            
            Movie Listing
          </h1>

          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />

            <input
              type="text"
              placeholder="Search for a movie..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Movies Grid */}
        {loading ? (
          <div className="text-center py-20 text-slate-400">
            Loading movies...
          </div>
        ) : movies.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            No movies found.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((show) => (
              <MovieCard
                key={show.id}
                show={show}
                onDetails={setSelectedMovie}
              />
            ))}
          </div>
        )}

        {/* Modal */}
        {selectedMovie && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedMovie(null)}
          >
            <div
              className="bg-slate-900 rounded-xl max-w-xl w-full overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMovie(null)}
                className="absolute top-3 right-3 font-extrabold  text-red-600  text-2xl p-1 px-2 "
              >
                ✕
              </button>

              <img
                src={
                  selectedMovie.image?.original ||
                  selectedMovie.image?.medium
                }
                alt={selectedMovie.name}
                className="w-full h-56 object-cover"
              />

              <div className="p-4 space-y-3">
                <h2 className="text-2xl font-bold">
                  {selectedMovie.name}
                </h2>

                <div className="flex gap-6 text-sm">
                  <p>⭐ {selectedMovie.rating?.average ?? "N/A"}</p>
                  <p>📅 {selectedMovie.premiered || "N/A"}</p>
                </div>

                <p>
                  <strong>Genres:</strong>{" "}
                  {selectedMovie.genres?.join(", ") || "N/A"}
                </p>

                <div
                  className="text-slate-300"
                  dangerouslySetInnerHTML={{
                    __html:
                      selectedMovie.summary ||
                      "No summary available.",
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}