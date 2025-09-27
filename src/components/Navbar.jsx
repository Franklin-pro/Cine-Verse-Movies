import React, { useEffect, useState, useCallback } from "react";
import { Search, Menu, X } from "lucide-react";
import { searchMovies } from "../services/api";
import { useMovies } from "../context/MovieContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState(null);
 const { openMovieDetails } = useMovies()

  const toggleMenu = () => setIsOpen(!isOpen);

  // Debounced search function
  const getSearchResults = useCallback(
    async (searchQuery) => {
      if (!searchQuery.trim()) {
        setResults([]);
        setSearchError(null);
        return;
      }

      setIsSearching(true);
      setSearchError(null);

      try {
        const data = await searchMovies(searchQuery);
        setResults(data || []);
        query && setSearchError(data.length === 0 ? "No results found" : null);
      } catch (error) {
        console.error("Search error:", error);
        setSearchError("Failed to search movies");
        setResults([]);
      } finally {
        setIsSearching(false);
      }
    },
    [query]
  );

  // ✅ Handle selecting a movie
// ✅ Handle selecting a movie
const handleMovieSelect = (movie) => {
  setQuery(movie.title);
  openMovieDetails(movie.id)
  setResults([]);
  setSearchError(null);
};


  // Debounce search input
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      getSearchResults(query);
    }, 500); // 500ms delay

    return () => clearTimeout(delayDebounceFn);
  }, [query, getSearchResults]);

  // Add sticky background when scrolling
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setSearchError(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-neutral-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 gap-2 py-3">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-1">
          <span className="text-blue-500 font-bold text-2xl">Cine</span>
          <span className="text-white font-bold text-2xl">Verse</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {["Home", "Movies", "Top Rated", "Trending", "Popular"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "")}`}
              className="relative text-white hover:text-blue-500 transition group"
            >
              {link}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:block relative w-60">
          <div className="relative">
            <input
              type="text"
              placeholder="Search movies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-4 py-2 pr-10 rounded-full text-sm bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-neutral-400"
            />
            <Search className="absolute right-3 top-2.5 w-4 h-4 text-neutral-400" />

            {/* Loading indicator */}
            {isSearching && (
              <div className="absolute right-10 top-2.5">
                <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </div>

          {/* Search results dropdown */}
          {(query && (results.length > 0 || isSearching || searchError)) && (
            <div className="absolute mt-2 w-full bg-neutral-800 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
              {isSearching ? (
                <div className="p-4 text-center text-neutral-400 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    <span>Searching...</span>
                  </div>
                </div>
              ) : searchError ? (
                <div className="p-4 text-center text-blue-400 text-sm">
                  {searchError}
                </div>
              ) : results.length > 0 ? (
                <ul className="divide-y divide-neutral-700">
                  {results.slice(0, 8).map((movie) => (
                    <li
                      key={movie.id}
                      className="hover:bg-neutral-700 transition-colors"
                    >
                      <button
                        className="w-full text-left px-4 py-3 text-sm flex items-center space-x-3"
                        onClick={() => handleMovieSelect(movie)}
                      >
                        <img
                          src={
                            movie.poster_path
                              ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
                              : "https://via.placeholder.com/92x138/333/fff?text=No+Image"
                          }
                          alt={movie.title}
                          className="w-8 h-12 object-cover rounded"
                          onError={(e) => {
                            e.target.src =
                              "https://via.placeholder.com/92x138/333/fff?text=No+Image";
                          }}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="text-white font-medium truncate">
                            {movie.title}
                          </div>
                          {movie.release_date && (
                            <div className="text-neutral-400 text-xs">
                              {new Date(movie.release_date).getFullYear()}
                            </div>
                          )}
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-4 text-center text-neutral-400 text-sm">
                  No movies found for "{query}"
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-neutral-900 border-t border-neutral-700">
          <nav className="flex flex-col space-y-2 px-4 py-3">
            {["Home", "Movies", "Top Rated", "Trending", "Popular"].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "")}`}
                  className="text-white hover:text-blue-500 transition py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              )
            )}

            {/* Mobile Search */}
            <div className="relative mt-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search movies..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full px-4 py-2 pr-10 rounded-full text-sm bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-neutral-400"
                />
                <Search className="absolute right-3 top-2.5 w-4 h-4 text-neutral-400" />

                {isSearching && (
                  <div className="absolute right-10 top-2.5">
                    <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>

              {/* Mobile search results */}
              {(query && (results.length > 0 || isSearching || searchError)) && (
                <div className="absolute mt-2 w-full bg-neutral-800 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto">
                  {isSearching ? (
                    <div className="p-4 text-center text-neutral-400 text-sm">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        <span>Searching...</span>
                      </div>
                    </div>
                  ) : searchError ? (
                    <div className="p-4 text-center text-blue-400 text-sm">
                      {searchError}
                    </div>
                  ) : results.length > 0 ? (
                    <ul className="divide-y divide-neutral-700">
                      {results.slice(0, 5).map((movie) => (
                        <li
                          key={movie.id}
                          className="hover:bg-neutral-700 transition-colors"
                        >
                          <button
                            className="w-full text-left px-4 py-3 text-sm flex items-center space-x-3"
                            onClick={() => {
                              handleMovieSelect(movie);
                              setIsOpen(false);
                            }}
                          >
                            <img
                              src={
                                movie.poster_path
                                  ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
                                  : "https://via.placeholder.com/92x138/333/fff?text=No+Image"
                              }
                              alt={movie.title}
                              className="w-8 h-12 object-cover rounded"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="text-white font-medium truncate">
                                {movie.title}
                              </div>
                              {movie.release_date && (
                                <div className="text-neutral-400 text-xs">
                                  {new Date(movie.release_date).getFullYear()}
                                </div>
                              )}
                            </div>
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="p-4 text-center text-neutral-400 text-sm">
                      No movies found
                    </div>
                  )}
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
