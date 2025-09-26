import { PlayCircle, PlusCircle, Star } from "lucide-react";
import React from "react";

function HeroSection() {
  return (
    <div className="relative w-full h-screen">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-neutral-900 transition-all duration-700"
        style={{
          backgroundImage:
            "url('https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758')", // replace dynamically
        }}
      >
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/70 to-neutral-900/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-neutral-900/30" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          <div className="transition-all duration-700">
            {/* Movie meta info */}
            <div className="flex items-center flex-wrap space-x-3 mb-4 text-sm">
              <span className="bg-purple-500/90 text-white font-semibold px-2 py-0.5 rounded-sm">
                FEATURED
              </span>

              {/* Rating */}
              <div className="flex items-center text-neutral-300">
                <Star className="w-4 h-4 text-yellow-500 mr-1" />
                <span>8.7</span>
              </div>

              <span className="text-neutral-400">•</span>

              {/* Release Date */}
              <span className="text-neutral-300">2025-09-26</span>

              <span className="text-neutral-400">•</span>

              {/* Age Rating */}
              <span className="bg-neutral-300/20 text-white text-xs px-2 py-0.5 rounded">
                18+
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Movie Title
            </h1>

            {/* Overview */}
            <p className="text-neutral-300 text-base md:text-lg mb-8 line-clamp-3 md:line-clamp-4 max-w-2xl">
              This is the movie overview text. It will give a short description
              about the plot of the movie. Keep it within 3–4 lines.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-purple-600 px-4 py-2 hover:bg-purple-700 text-white rounded-lg flex items-center gap-2 transition-all">
                <PlayCircle />
                Watch Now
              </button>

              <button className="bg-neutral-800/80 px-4 py-2 hover:bg-neutral-800 text-white rounded-lg flex items-center gap-2 transition-all">
                <PlusCircle />
                Add to Watchlist
              </button>
            </div>
          </div>
        </div>
      </div>

     {/* paginations dot */} 
     <div className="absolute bottom-0 right-0 left-0 flex justify-center gap-2 z-10">
        <button className={`h-1.5 rounded-full transition-all`}></button> </div>
    </div>
  );
}

export default HeroSection;
