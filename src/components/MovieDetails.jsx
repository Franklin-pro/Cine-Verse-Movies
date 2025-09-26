import { Eye, Globe, Play, Star, X } from 'lucide-react'
import React from 'react'

function MovieDetails() {
  const loading = false // Replace with state
  const error = false   // Replace with state
  const movie = {
    title: 'Inception',
    tagline: 'Your mind is the scene of the crime',
    release_date: '2010-07-16',
    runtime: 148,
    vote_average: 8.3,
    vote_count: 32000,
    adult: false,
    overview:
      'A thief who steals corporate secrets through the use of dream-sharing technology...',
    genres: ['Action', 'Sci-Fi', 'Thriller'],
    poster_path:
      'https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg',
    backdrop_path:
      'https://image.tmdb.org/t/p/w1280/s3TBrRGB1iav7gFOCNx3H31MoES.jpg',
    production_companies: ['Warner Bros.', 'Syncopy'],
    spoken_languages: ['English', 'Japanese', 'French'],
    budget: 160000000,
    revenue: 829895144,
    status: 'Released',
    original_language: 'en',
    homepage: 'https://www.warnerbros.com/movies/inception',
    imdb_id: 'tt1375666',
  }

  return (
    <section>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/95 backdrop-blur-sm overflow-auto">
        <div className="relative w-full max-w-5xl bg-neutral-800 rounded-lg shadow-xl overflow-hidden">
          {/* Close Button */}
          <button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-700/80 text-white hover:bg-neutral-600/80">
            <X className="w-5 h-5" />
          </button>

          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center h-96">
              <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
              <p className="ml-4 text-neutral-300">Loading details...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="flex items-center justify-center h-96 flex-col">
              <X className="w-6 h-6 text-red-500" />
              <h2 className="text-xl font-bold mt-4 text-white">
                Failed to load movie details
              </h2>
              <p className="mt-2 text-neutral-400">Something went wrong.</p>
              <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md">
                Close
              </button>
            </div>
          )}

          {/* Movie Details */}
          {!loading && !error && movie && (
            <>
              {/* Backdrop */}
              <div className="relative h-72 md:h-96 w-full">
                {movie.backdrop_path ? (
                  <img
                    src={movie.backdrop_path}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-neutral-700" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-800 via-neutral-800/60 to-transparent" />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex gap-8 -mt-32 md:-mt-48 relative">
                  {/* Poster */}
                  <div className="w-32 md:w-64 flex-shrink-0 mb-4 md:mb-0">
                    <div className="rounded-lg overflow-hidden shadow-lg border border-neutral-700">
                      {movie.poster_path ? (
                        <img src={movie.poster_path} alt={movie.title} />
                      ) : (
                        <div className="w-full aspect-[2/3] bg-neutral-700 flex items-center justify-center text-neutral-400">
                          No Poster Available
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Movie Info */}
                  <div className="flex-1">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">
                      {movie.title}
                      <span className="text-neutral-400 font-normal ml-2">
                        ({movie.release_date.split('-')[0]})
                      </span>
                    </h1>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-yellow-500 text-sm font-medium ml-1">
                          {movie.vote_average.toFixed(1)} ({movie.vote_count} votes)
                        </span>
                      </div>
                      <span className="text-neutral-300">
                        {movie.runtime} min
                      </span>
                      <span className="text-neutral-300">
                        {movie.release_date}
                      </span>
                      {movie.adult && (
                        <span className="bg-red-500/80 text-white text-xs px-2 py-0.5 rounded">
                          18+
                        </span>
                      )}
                    </div>

                    {/* Genres */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {movie.genres.map((g) => (
                        <span
                          key={g}
                          className="bg-neutral-700 text-neutral-300 px-3 py-1 rounded-full text-xs"
                        >
                          {g}
                        </span>
                      ))}
                    </div>

                    {/* Tagline */}
                    {movie.tagline && (
                      <p className="text-neutral-400 mt-4 italic">
                        {movie.tagline}
                      </p>
                    )}

                    {/* Overview */}
                    <div className="mt-6">
                      <h2 className="text-xl font-semibold text-white mb-2">
                        Overview
                      </h2>
                      <p className="text-neutral-300">{movie.overview}</p>
                    </div>

                    {/* Actions */}
                    <div className="mt-8 flex flex-wrap gap-3">
                      <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                        <Play />
                        Watch Now
                      </button>
                      <button className="bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all">
                        Add to Watch List
                      </button>
                    </div>
                  </div>
                </div>

                {/* Additional Details */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left */}
                  <div>
                    <h2 className="text-xl text-white font-semibold mb-4">
                      Details
                    </h2>
                    <div className="space-y-3 text-sm">
                      <p>
                        <span className="text-neutral-400">Production:</span>{' '}
                        <span className="text-white">
                          {movie.production_companies.join(', ')}
                        </span>
                      </p>
                      <p>
                        <span className="text-neutral-400">Languages:</span>{' '}
                        <span className="text-white">
                          {movie.spoken_languages.join(', ')}
                        </span>
                      </p>
                      <p>
                        <span className="text-neutral-400">Budget:</span>{' '}
                        <span className="text-white">
                          ${movie.budget.toLocaleString()}
                        </span>
                      </p>
                      <p>
                        <span className="text-neutral-400">Revenue:</span>{' '}
                        <span className="text-white">
                          ${movie.revenue.toLocaleString()}
                        </span>
                      </p>
                      <p>
                        <span className="text-neutral-400">Status:</span>{' '}
                        <span className="text-white">{movie.status}</span>
                      </p>
                      <p>
                        <span className="text-neutral-400">Original Lang:</span>{' '}
                        <span className="text-white">
                          {movie.original_language.toUpperCase()}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Right */}
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-4">
                      Rating
                    </h2>
                    {movie.vote_count > 0 ? (
                      <div>
                        <div className="flex items-center">
                          <div className="w-24 h-24 rounded-full border-4 border-purple-500 flex mr-4 items-center justify-center">
                            <span className="text-3xl font-bold">
                              {movie.vote_average.toFixed(1)}
                            </span>
                          </div>
                        </div>
                        <p className="text-neutral-300 mt-2">
                          Based on {movie.vote_count.toLocaleString()} votes
                        </p>
                      </div>
                    ) : (
                      <p className="text-neutral-400">No Rating Available</p>
                    )}
                  </div>
                </div>

                {/* External Links */}
                <div className="mt-8 space-x-4">
                  {movie.homepage && (
                    <a
                      href={movie.homepage}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-neutral-700 hover:bg-neutral-600 text-white px-4 py-2 rounded transition-all"
                    >
                      <Globe className="w-4 h-4" />
                      Official Website
                    </a>
                  )}
                  {movie.imdb_id && (
                    <a
                      href={`https://www.imdb.com/title/${movie.imdb_id}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition-all"
                    >
                      <Eye className="w-4 h-4" />
                      View IMDB
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default MovieDetails
