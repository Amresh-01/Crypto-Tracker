import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const CoinCard = ({ coin, onClick }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: price < 1 ? 4 : 2,
    }).format(price);
  };

  const formatMarketCap = (marketCap) => {
    if (marketCap >= 1e12) return `₹${(marketCap / 1e12).toFixed(2)}T`;
    if (marketCap >= 1e9) return `₹${(marketCap / 1e9).toFixed(2)}B`;
    if (marketCap >= 1e6) return `₹${(marketCap / 1e6).toFixed(2)}M`;
    return `₹${(marketCap / 1e3).toFixed(2)}K`;
  };

  const priceChange = coin.price_change_percentage_24h;
  const isPositive = priceChange > 0;

  return (
    <div
      onClick={onClick}
      className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img
            src={coin.image}
            alt={coin.name}
            className="w-10 h-10 rounded-full"
            loading="lazy"
          />
          <div>
            <h3 className="font-semibold text-white group-hover:text-blue-300 transition-colors">
              {coin.name}
            </h3>
            <p className="text-sm text-blue-300 uppercase">{coin.symbol}</p>
          </div>
        </div>
        <div className="text-right">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300">
            #{coin.market_cap_rank}
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="mb-4">
        <p className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
          {formatPrice(coin.current_price)}
        </p>
      </div>

      {/* 24h Change */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-blue-200">24h Change</span>
        <div
          className={`flex items-center space-x-1 px-2 py-1 rounded-lg ${
            isPositive
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {isPositive ? (
            <TrendingUp className="h-4 w-4" />
          ) : (
            <TrendingDown className="h-4 w-4" />
          )}
          <span className="text-sm font-medium">
            {Math.abs(priceChange).toFixed(2)}%
          </span>
        </div>
      </div>

      {/* Market Cap */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-blue-200">Market Cap</span>
        <span className="text-sm font-medium text-white">
          {formatMarketCap(coin.market_cap)}
        </span>
      </div>

      {/* Hover Effect Indicator */}
      <div className="mt-4 pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-xs text-blue-300 text-center">Click for details</p>
      </div>
    </div>
  );
};

export default CoinCard;
