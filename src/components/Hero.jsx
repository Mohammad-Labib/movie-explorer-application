const Hero = () => {
  return (
    <div className="hero min-h-[85vh] bg-gray-500 px-4">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 max-w-6xl my-10">
        {/* Right side Image / Poster Banner */}
        <div className="flex-1 w-full max-w-md">
          <img
            src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop"
            alt="Hero Movies Banner"
            className="w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 object-cover aspect-[4/3]"
          />
        </div>

        {/* Left side Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="badge text-yellow-400 badge-outline mb-4 p-3 font-semibold">
            🎬 Unlimited Movies & TV Shows
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Discover Your Next Favorite <span className="text-yellow-400">Movie</span>
          </h1>
          <p className="py-6 text-base md:text-lg text-base-content/80 leading-relaxed">
            Explore thousands of movies, TV series, and anime with real-time ratings, 
            cast details, and instant search—all in one seamless place.
          </p>
          
          {/* Action Buttons & Quick Search Input */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center">
            <div className="join w-full sm:w-auto">
              <input 
                type="text" 
                placeholder="Search movies..." 
                className="input input-bordered join-item w-full sm:w-64 focus:outline-none" 
              />
              <button className="btn btn-success join-item">Search</button>
            </div>
            <button className="btn btn-outline btn-secondary w-full sm:w-auto">
              Explore Popular
            </button>
          </div>

          {/* Quick Stats */}
          <div className="stats stats-vertical sm:stats-horizontal shadow bg-base-100 mt-8 w-full max-w-md">
            <div className="stat p-3">
              <div className="stat-title text-xs">Total Shows</div>
              <div className="stat-value text-xl text-primary">10,000+</div>
            </div>
            <div className="stat p-3">
              <div className="stat-title text-xs">Active Users</div>
              <div className="stat-value text-xl text-secondary">25K+</div>
            </div>
            <div className="stat p-3">
              <div className="stat-title text-xs">Rating</div>
              <div className="stat-value text-xl text-accent">4.9 ★</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;