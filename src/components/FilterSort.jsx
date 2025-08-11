import React from "react";
import { Filter, ArrowUpDown, Trash2 } from "lucide-react";

const FilterSort = ({ filters, onFiltersChange, sortConfig, onSortChange }) => {
  const handleFilterChange = (key, value) => {
    onFiltersChange({
      ...filters,
      [key]: value,
    });
  };

  const handleSortChange = (field) => {
    const sortableFields = [
      "current_price",
      "market_cap",
      "price_change_percentage_24h",
    ];
    if (!sortableFields.includes(field)) return;

    if (sortConfig.field === field) {
      onSortChange({
        field,
        direction: sortConfig.direction === "asc" ? "desc" : "asc",
      });
    } else {
      onSortChange({
        field,
        direction: "desc",
      });
    }
  };

  const handleClearFilters = () => {
    onFiltersChange({
      rankFilter: "all",
      priceChangeFilter: "all",
      priceRangeFilter: "all",
      gainersLosersFilter: "all",
    });

    onSortChange({
      field: "market_cap",
      direction: "desc",
    });
  };

  const isDefaultFilter =
    filters.rankFilter === "all" &&
    filters.priceChangeFilter === "all" &&
    filters.priceRangeFilter === "all" &&
    filters.gainersLosersFilter === "all";

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
      <div className="flex items-center mb-6">
        <Filter className="h-5 w-5 text-blue-400 mr-2" />
        <h2 className="text-lg font-semibold text-white">Filters & Sorting</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Market Cap Rank Filter */}
        <div>
          <label className="block text-sm font-medium text-blue-200 mb-2">
            Market Cap Rank
          </label>
          <select
            value={filters.rankFilter}
            onChange={(e) => handleFilterChange("rankFilter", e.target.value)}
            className="w-full p-3 bg-black text-white border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          >
            <option value="all">All Ranks</option>
            <option value="10">Top 10</option>
            <option value="50">Top 50</option>
            <option value="100">Top 100</option>
          </select>
        </div>

        {/* Price Change Filter */}
        <div>
          <label className="block text-sm font-medium text-blue-200 mb-2">
            24h Price Change
          </label>
          <select
            value={filters.priceChangeFilter}
            onChange={(e) =>
              handleFilterChange("priceChangeFilter", e.target.value)
            }
            className="w-full p-3 bg-black text-white border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          >
            <option value="all">All Changes</option>
            <option value="positive">Positive (+)</option>
            <option value="negative">Negative (-)</option>
          </select>
        </div>

        {/* Price Range Filter */}
        <div>
          <label className="block text-sm font-medium text-blue-200 mb-2">
            Price Range (₹)
          </label>
          <select
            value={filters.priceRangeFilter}
            onChange={(e) =>
              handleFilterChange("priceRangeFilter", e.target.value)
            }
            className="w-full p-3 bg-black text-white border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          >
            <option value="all">All Prices</option>
            <option value="low">Under ₹100</option>
            <option value="medium">₹100 - ₹10,000</option>
            <option value="high">Above ₹10,000</option>
          </select>
        </div>

        {/* Sort Options */}
        <div>
          <label className="block text-sm font-medium text-blue-200 mb-2">
            Sort By
          </label>
          <div className="space-y-2">
            {["current_price", "market_cap", "price_change_percentage_24h"].map(
              (field) => (
                <button
                  key={field}
                  onClick={() => handleSortChange(field)}
                  className={`w-full p-2 rounded-lg text-left flex items-center justify-between transition-all duration-300 ${
                    sortConfig.field === field
                      ? "bg-blue-500 text-white"
                      : "bg-white/10 text-blue-200 hover:bg-white/20"
                  }`}
                >
                  <span>
                    {field === "current_price"
                      ? "Price"
                      : field === "market_cap"
                      ? "Market Cap"
                      : "24h Change"}
                  </span>
                  {sortConfig.field === field && (
                    <ArrowUpDown className="h-4 w-4" />
                  )}
                </button>
              )
            )}
          </div>
        </div>

        {/* Gainers & Losers Filter */}
        <div>
          <label className="block text-sm font-medium text-blue-200 mb-2">
            Gainers & Losers (24h)
          </label>
          <select
            value={filters.gainersLosersFilter}
            onChange={(e) =>
              handleFilterChange("gainersLosersFilter", e.target.value)
            }
            className="w-full p-3 bg-black border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          >
            <option value="all">All</option>
            <option value="gainers">Top Gainers</option>
            <option value="losers">Top Losers</option>
          </select>
        </div>
      </div>

      {/* Clear Filters Button */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={handleClearFilters}
          disabled={isDefaultFilter}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
            isDefaultFilter
              ? "bg-gray-500 text-white cursor-not-allowed"
              : "bg-red-600 text-white hover:bg-red-700"
          }`}
        >
          <Trash2 className="h-4 w-4" />
          <span>Clear Filters</span>
        </button>
      </div>
    </div>
  );
};

export default FilterSort;
