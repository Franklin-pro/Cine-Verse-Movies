import React from 'react'
import HeroSection from './HeroSection'
import MovieSlider from './MovieSlider'
import GenreSection from './GenreSection'
import MovieDetails from './MovieDetails'
import { useMovies } from '../context/MovieContext'

function MovieContent() {
  const { trendingMovies, topRatedMovies, popularMovies, selectMovieId, closeMovieDetails, error } = useMovies();

  if (error) return <div className='text-white text-center py-8'>{error}</div>
  
  return (
    <>
      {/* Home Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Movies Section */}
      <section id="movies" className="bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-white mb-2">Movies</h2>
          <p className="text-neutral-400 mb-8">Discover amazing movies</p>
          {/* You can add movie grid or other content here */}
        </div>
      </section>

      {/* Trending Section */}
      <section id="trending" className="bg-gradient-to-b from-neutral-900 to-neutral-950">
        <MovieSlider
          title="Trending This Week"
          subtitle="Stay Updated with What's everyone's watching"
          movies={trendingMovies}
        />
      </section>

      {/* Popular Section */}
      <section id="popular" className="bg-gradient-to-b from-neutral-900 to-neutral-950">
        <MovieSlider
          title="Popular"
          subtitle="Popular Movies of All Time"
          movies={popularMovies}
        />
      </section>

      {/* Genre Section */}
      <section className="bg-gradient-to-b from-neutral-900 to-neutral-950">
        <GenreSection />
      </section>

      {/* Top Rated Section */}
      <section id="topRated" className="bg-gradient-to-b from-neutral-900 to-neutral-950">
        <MovieSlider
          title="Top Rated"
          subtitle="Top Rated Movies of All Time"
          movies={topRatedMovies}
        />
      </section>

      {/* Movie Details Modal */}
      {selectMovieId && (
        <MovieDetails movieId={selectMovieId} onclose={closeMovieDetails} />
      )}
    </>
  )
}

export default MovieContent