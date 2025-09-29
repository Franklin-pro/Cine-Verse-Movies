import React from 'react'
import HeroSection from './HeroSection'
import MovieSlider from './MovieSlider'
import GenreSection from './GenreSection'
import MovieDetails from './MovieDetails'
import { useMovies } from '../context/MovieContext'

function MovieContent() {
  const { topRatedMovies,upcomingMovies,latestMovies,nowPlayingMovies,trendingweekly, popularMovies, selectMovieId, closeMovieDetails, error } = useMovies();
  console.log("nowwwwwwww",nowPlayingMovies);

  if (error) return <div className='text-white text-center py-8'>{error}</div>
  
  return (
    <>
      {/* Home Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Trending Section */}
      <section id="trending" className="bg-gradient-to-b from-neutral-900 to-neutral-950">
        <MovieSlider
          title="Trending This Week"
          subtitle="Stay Updated with What's everyone's watching"
          movies={trendingweekly}
        />
      </section>
        <section id="Latest Movies" className="bg-gradient-to-b from-neutral-900 to-neutral-950">
        <MovieSlider
          title="Latest Movies"
          subtitle="Latest Movies of All Time"
          movies={latestMovies}
        />
      </section>
           <section id="upcoming" className="bg-gradient-to-b from-neutral-900 to-neutral-950">
        <MovieSlider
          title="Upcoming Movies"
          subtitle="Upcoming Movies of All Time"
          movies={upcomingMovies}
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