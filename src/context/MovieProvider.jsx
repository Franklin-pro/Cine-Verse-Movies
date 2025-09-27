import React, { useEffect, useState } from "react";
import { getGenres, getPopularMovies, getTopRatedMovies, getTrendingMovies } from "../services/api";
import { MovieContext } from "./MovieContext";

export const MovieProvider = ({ children }) => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectMovieId, setSelectMovieId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [trending, topRated, popular, genresData] = await Promise.all([
          getTrendingMovies(),
          getTopRatedMovies(),
          getPopularMovies(),
          getGenres(),
        ]);
        setTrendingMovies(trending);
        setTopRatedMovies(topRated);
        setPopularMovies(popular);
        setGenres(genresData);
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
