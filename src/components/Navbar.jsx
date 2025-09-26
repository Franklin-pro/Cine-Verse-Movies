import React, { useEffect, useState } from "react";
import { Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]); // replace with movie type

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(()=>{
    setResults
  })

  return (
    <header className="bg-neutral-900 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-1">
          <span className="text-purple-500 font-bold text-2xl">Cine</span>
          <span className="text-white font-bold text-2xl">Verse</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {["Home", "Movies", "Top Rated", "Trending", "Popular"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "")}`}
              className="relative text-white hover:text-purple-500 transition"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:block relative w-60">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-2 pr-10 rounded-md text-sm bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Search className="absolute right-3 top-2.5 w-4 h-4 text-neutral-400" />

          {/* Search results */}
          {query && (
            <div className="absolute mt-2 w-full bg-neutral-800 rounded-lg shadow-lg z-50">
              {results.length > 0 ? (
                <ul className="divide-y divide-neutral-700">
                  {results.map((res, i) => (
                    <li key={i} className="hover:bg-neutral-700">
                      <button className="w-full text-left px-4 py-2 text-sm">
                        {res}
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-neutral-800 border-t border-neutral-700">
          <nav className="flex flex-col space-y-2 px-4 py-3">
            {["Home", "Movies", "Top Rated", "Trending", "Popular"].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "")}`}
                  className="text-white hover:text-purple-500 transition"
                >
                  {link}
                </a>
              )
            )}

            {/* Mobile Search */}
            <div className="relative mt-3">
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-4 py-2 pr-10 rounded-md text-sm bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search className="absolute right-3 top-2.5 w-4 h-4 text-neutral-400" />

              {query && (
                <div className="absolute mt-2 w-full bg-neutral-700 rounded-lg shadow-lg z-50">
                  {results.length > 0 ? (
                    <ul className="divide-y divide-neutral-600">
                      {results.map((res, i) => (
                        <li key={i} className="hover:bg-neutral-600">
                          <button className="w-full text-left px-4 py-2 text-sm">
                            {res}
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="p-3 text-center text-neutral-400 text-sm">
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
