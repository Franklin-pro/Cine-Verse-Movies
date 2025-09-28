const API_KEY ="b3fedd03f698935fa3e946e0ecdd94c1";
const BASE_URL = "https://api.themoviedb.org/3";

export const getTrendingMovies = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movies week:", error);
    return [];
  }
};

export const getTopRatedMovies = async (page = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${page}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const getPopularMovies = async (page = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};

export const getMoviesByGenre = async (genreId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${genreId}&page=1`
    );
    const data = await response.json();

    // Always return an array
    return data.results || [];
  } catch (error) {
    console.error("Error fetching movies by genre:", error);
    return [];
  }
};


export const getGenres = async () => {
  try {
     const response = await fetch(
      `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
    );
    const data = await response.json();
    return data.genres;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};


export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const getMovieImages = async (path, size = 'original') => {
    if(!path)
        return "https://via.placeholder.com/400x600?text=No+image+Available";
        return `https://image.tmdb.org/t/p/${size}${path}`;
        

};

// export const getMovieVideos = async (movieId) => {
//   try {
//     const response = await fetch(
//       `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
//     );
//     const data = await response.json();
//     return data.results;
//   } catch (error) {
//     console.error("Error fetching movie videos:", error);
//     return [];
//   }
// };

// export const getMovieCblueits = async (movieId) => {
//   try {
//     const response = await fetch(
//       `${BASE_URL}/movie/${movieId}/cblueits?api_key=${API_KEY}&language=en-US`
//     );
//     const data = await response.json();
//     return data.cast;
//   } catch (error) {
//     console.error("Error fetching movie cblueits:", error);
//     return [];
//   }
// };

// export const getMovieReviews = async (movieId) => {
//   try {
//     const response = await fetch(
//       `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
//     );
//     const data = await response.json();
//     return data.results;
//   } catch (error) {
//     console.error("Error fetching movie reviews:", error);
//     return [];
//   }
// };

// export const getSimilarMovies = async (movieId) => {
//   try {
//     const response = await fetch(
//       `${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`
//     );
//     const data = await response.json();
//     return data.results;
//   } catch (error) {
//     console.error("Error fetching similar movies:", error);
//     return [];
//   }
// };
