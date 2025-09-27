import React from 'react'
import HeroSection from './HeroSection'
import MovieSlider from './MovieSlider'
import GenreSection from './GenreSection'
import MovieDetails from './MovieDetails'
import { useMovies } from '../context/MovieContext'

function MovieContent() {
  const {trendingMovies,topRatedMovies,popularMovies,selectMovieId,openMovieDetails,closeMovieDetails,error} = useMovies();

  if(error) return <div className='text-white'>{error}</div>
  return (
    <>
<HeroSection/>
<div className='bg-gradient-to-b from-neutral-900 to-neutral-950'>
    <MovieSlider title="Trending This Week" subtitle="Stay Updated with What's everyone's watchin" movies={trendingMovies} id="trending"/>
    <MovieSlider title="Popular" subtitle="Popular Movies of All Time" movies={popularMovies} id="popular"/>
    <GenreSection/>
     <MovieSlider title="Top Rated" subtitle="Top Rated Movies of All Time" movies={topRatedMovies} id="topRated"/>
    {/* conditional rendering */}
   {selectMovieId && <MovieDetails movieId = {selectMovieId} onclose={closeMovieDetails}/>}
</div>
    </>
  )
}

export default MovieContent