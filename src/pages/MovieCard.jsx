import { Star, Calendar } from "lucide-react";

export default function MovieCard({ show, onDetails }) {
  const poster =
    show?.image?.medium ||
    "https://via.placeholder.com/210x295?text=No+Poster";

  const rating = show?.rating?.average ?? "N/A";

  const year = show?.premiered
    ? show.premiered.split("-")[0]
    : "N/A";

  return (
    <div className="bg-gray-900 border border-slate-800 rounded-xl overflow-hidden shadow-md flex flex-col justify-between hover:border-slate-700 hover:shadow-lg transition-all duration-300">
      {/* Poster */}
      <div className="h-72 overflow-hidden bg-slate-950">
        <img
          src={poster}
          alt={show?.name || "Movie Poster"}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Details */}
      <div className="p-4 flex flex-col flex-grow justify-between space-y-3">
        <div>
          <h2 className="font-semibold text-lg line-clamp-1 text-slate-100">
            {show?.name || "Unknown Movie"}
          </h2>

          <div className="flex items-center gap-4 text-xs text-slate-400 mt-2">
            <span className="flex items-center gap-1 text-amber-400 font-medium">
              <Star className="w-4 h-4 fill-amber-400" />
              {rating}
            </span>

            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {year}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onDetails(show)}
          className="w-full bg-gray-500 hover:bg-orange-500 cursor-pointer text-white font-medium text-sm py-2 rounded-lg transition-colors"
        >
          See Details
        </button>
      </div>
    </div>
  );
}