import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import FilterSort from "./components/FilterSort";
import CoinGrid from "./components/CoinGrid";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";
import CoinModal from "./components/CoinModal";
import { Coins } from "lucide-react";

function App() {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    rankFilter: "all",
    priceChangeFilter: "all",
    priceRangeFilter: "all",
    gainersLosersFilter: "all",
  });
  const [sortConfig, setSortConfig] = useState({
    field: "market_cap_rank",
    direction: "asc",
  });

  const [selectedCoin, setSelectedCoin] = useState(null);

  const fetchCoins = async () => {
    try {
      setLoading(true);
      setError(null);

      const apiUrl =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h";

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error(
            "Rate limit exceeded. Please wait a moment and try again."
          );
        } else if (response.status === 503) {
          throw new Error(
            "CoinGecko API is temporarily unavailable. Please try again later."
          );
        } else {
          throw new Error(
            `Failed to fetch data: ${response.status} ${response.statusText}`
          );
        }
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error("Invalid data format received from API");
      }

      setCoins(data);
    } catch (err) {
      console.error("API Error:", err);
      if (err instanceof TypeError && err.message.includes("fetch")) {
        setError(
          "Network error: Please check your internet connection and try again."
        );
      } else {
        setError(
          err.message || "An unexpected error occurred while fetching data."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoins();
    const interval = setInterval(fetchCoins, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let result = [...coins];

    // Search filter
    if (searchTerm) {
      result = result.filter(
        (coin) =>
          coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Market Cap Rank filter
    if (filters.rankFilter !== "all") {
      const rank = parseInt(filters.rankFilter);
      result = result.filter((coin) => coin.market_cap_rank <= rank);
    }

    // Price Change filter
    if (filters.priceChangeFilter !== "all") {
      if (filters.priceChangeFilter === "positive") {
        result = result.filter((coin) => coin.price_change_percentage_24h > 0);
      } else if (filters.priceChangeFilter === "negative") {
        result = result.filter((coin) => coin.price_change_percentage_24h < 0);
      }
    }

    // Gainers/Losers filter
    if (filters.gainersLosersFilter === "gainers") {
      result = [...result]
        .filter((coin) => coin.price_change_percentage_24h > 0)
        .sort(
          (a, b) =>
            b.price_change_percentage_24h - a.price_change_percentage_24h
        )
        .slice(0, 10);
    } else if (filters.gainersLosersFilter === "losers") {
      result = [...result]
        .filter((coin) => coin.price_change_percentage_24h < 0)
        .sort(
          (a, b) =>
            a.price_change_percentage_24h - b.price_change_percentage_24h
        )
        .slice(0, 10);
    }

    // Price Range filter
    if (filters.priceRangeFilter !== "all") {
      if (filters.priceRangeFilter === "low") {
        result = result.filter((coin) => coin.current_price < 100);
      } else if (filters.priceRangeFilter === "medium") {
        result = result.filter(
          (coin) => coin.current_price >= 100 && coin.current_price <= 10000
        );
      } else if (filters.priceRangeFilter === "high") {
        result = result.filter((coin) => coin.current_price > 10000);
      }
    }

    // Sorting
    result.sort((a, b) => {
      let aValue = a[sortConfig.field];
      let bValue = b[sortConfig.field];
      return sortConfig.direction === "asc" ? aValue - bValue : bValue - aValue;
    });

    setFilteredCoins(result);
  }, [coins, searchTerm, filters, sortConfig]);

  const handleRetry = () => {
    fetchCoins();
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} onRetry={handleRetry} />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black">
      <div className="bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex justify-center items-center w-15 h-15 bg rounded-full">
                <img
                  src="./logo.png"
                  alt="Logo"
                  className="w-15 border rounded-2xl"
                />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">CryptoLeads</h1>
                <p className="text-blue-200">
                  Real-time Cryptocurrency tracker
                </p>
              </div>
            </div>
            <div className="hidden sm:flex items-center space-x-4 text-sm text-blue-200">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Live Data</span>
              </div>
              <span>•</span>
              <span>{filteredCoins.length} Cryptocurrencies</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 space-y-6">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <FilterSort
            filters={filters}
            onFiltersChange={setFilters}
            sortConfig={sortConfig}
            onSortChange={setSortConfig}
          />
        </div>

        {/* Results Info */}
        <div className="mb-6 text-center">
          <p className="text-blue-200">
            Showing{" "}
            <span className="font-semibold text-white">
              {filteredCoins.length}
            </span>{" "}
            cryptocurrencies
            {searchTerm && (
              <span className="ml-2">
                matching "
                <span className="font-semibold text-blue-400">
                  {searchTerm}
                </span>
                "
              </span>
            )}
          </p>
          {filters.gainersLosersFilter !== "all" && (
            <p className="text-white mt-2 font-semibold">
              Showing Top 10{" "}
              {filters.gainersLosersFilter === "gainers"
                ? "Gainers 🚀"
                : "Losers 📉"}
            </p>
          )}
        </div>

        {/* Coin Grid */}
        <CoinGrid coins={filteredCoins} onCoinSelect={setSelectedCoin} />

        {/* Empty State */}
        {filteredCoins.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center">
              <Coins className="h-12 w-12 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              No cryptocurrencies found
            </h3>
            <p className="text-blue-200">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedCoin && (
        <CoinModal coin={selectedCoin} onClose={() => setSelectedCoin(null)} />
      )}
    </div>
  );
}

export default App;
