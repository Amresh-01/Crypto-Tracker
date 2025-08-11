import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative max-w-md mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-300" />
        <input
          type="text"
          placeholder="Search cryptocurrencies..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-7 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default SearchBar;
