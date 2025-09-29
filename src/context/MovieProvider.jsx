import React, { useEffect, useState } from "react";
import { getGenres, getLatestMovies, getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getTrendingMovies, getTrendingWeekMovies, getUpcomingMovies } from "../services/api";
import { MovieContext } from "./MovieContext";

export const MovieProvider = ({ children }) => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [trendingweekly,setTrendingWeekly] = useState([])
  const [latestMovies, setLatestMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectMovieId, setSelectMovieId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
   const [
  trending,
  topRated,
  popular,
  genresData,
  nowPlaying,
  upcoming,
  latest,
  trendingweek
] = await Promise.all([
  getTrendingMovies(),
  getTopRatedMovies(),
  getPopularMovies(),
  getGenres(),
  getNowPlayingMovies(),   // ✅ put here
  getUpcomingMovies(),
  getLatestMovies(),       // ✅ put after upcoming
  getTrendingWeekMovies()
]);

        setTrendingMovies(trending);
        setTopRatedMovies(topRated);
        setPopularMovies(popular);
        setGenres(genresData);
        setNowPlayingMovies(nowPlaying);
        setUpcomingMovies(upcoming);
        setLatestMovies(latest);
        setTrendingWeekly(trendingweek)
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const openMovieDetails = (movieId) => {
    setSelectMovieId(movieId);
    document.body.style.overflow = "hidden";
  };

  const closeMovieDetails = () => {
    setSelectMovieId(null);
    document.body.style.overflow = "auto";
  };

  return (
    <MovieContext.Provider
      value={{
        trendingMovies,
        topRatedMovies,
        popularMovies,
        genres,
        upcomingMovies,
        nowPlayingMovies,
        trendingweekly,
        latestMovies,
        loading,
        error,
        selectMovieId,
        openMovieDetails,
        closeMovieDetails,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
