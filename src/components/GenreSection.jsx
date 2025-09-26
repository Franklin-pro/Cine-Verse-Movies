import { Star } from 'lucide-react'
import React, { useState } from 'react'

function GenreSection() {
  const [loading, setLoading] = useState(false) // example loading state
  const [genres, setGenres] = useState(['Action', 'Drama', 'Comedy'])
  const [selectedGenre, setSelectedGenre] = useState('Action')

  // Example movies data (replace with API later)
  const movies= [
    {
      id: 1,
      title: 'The Dark Knight',
      vote_average: 8.9,
      release_date: '2008-07-18',
      poster_path:
        'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    },
    {
      id: 2,
      title: 'Inception',
      vote_average: 8.3,
      release_date: '2010-07-16',
      poster_path:
        'https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg',
    },
    {
      id: 3,
      title: 'Interstellar',
      vote_average: 8.6,
      release_date: '2014-11-07',
      poster_path:
        'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    },
    {
      id: 4,
      title: 'Tenet',
      vote_average: 7.4,
      release_date: '2020-08-26',
      poster_path:
        'https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg',
    },
  ]

  return (
    <section className="py-12 bg-neutral-900/50" id="genres">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Browse By Genre
        </h2>

        {/* Genre Tabs */}
        <div className="mb-8 overflow-x-auto pb-2">
          <div className="flex space-x-2 min-w-max">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-4 py-2 rounded-md text-sm transition-colors ${
                  selectedGenre === genre
                    ? 'bg-purple-600 text-white'
                    : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {loading ? (
          // Loading Spinner
          <div className="h-64 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          // Movies Grid
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="group cursor-pointer relative rounded-lg overflow-hidden bg-neutral-800"
              >
                {/* Poster */}
                <div className="aspect-[2/3]">
                  <img
                    src={movie.poster_path}
                    alt={movie.title}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-35"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 via-neutral-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-yellow-500 text-sm font-medium">
                        {movie.vote_average.toFixed(1)}
                      </span>
                    </div>
                    <span className="text-neutral-400 text-sm font-medium">
                      {movie.release_date}
                    </span>
                  </div>
                  <button className="w-full cursor-pointer bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md transition-all text-sm">
                    View Details
                  </button>
                </div>

                {/* Movie Title & Votes */}
                <div className=" p-3">
                  <h3 className="text-white text-sm font-bold truncate">
                    {movie.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default GenreSection
