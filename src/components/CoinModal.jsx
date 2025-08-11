import React from "react";
import { X, TrendingUp, TrendingDown, BarChart3, Activity } from "lucide-react";

// ✅ Removed TypeScript types:
// import type { Coin } from '../App';
// interface CoinModalProps { ... }

const CoinModal = ({ coin, onClose }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: price < 1 ? 4 : 2,
    }).format(price);
  };

  const formatMarketCap = (marketCap) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(marketCap);
  };

  const priceChange = coin.price_change_percentage_24h;
  const isPositive = priceChange > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <img
              src={coin.image}
              alt={coin.name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-3xl font-bold text-white">{coin.name}</h2>
              <p className="text-blue-300 uppercase text-lg">{coin.symbol}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Current Price */}
        <div className="mb-8 text-center">
          <p className="text-5xl font-bold text-white mb-2">
            {formatPrice(coin.current_price)}
          </p>
          <div
            className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${
              isPositive
                ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400"
            }`}
          >
            {isPositive ? (
              <TrendingUp className="h-5 w-5" />
            ) : (
              <TrendingDown className="h-5 w-5" />
            )}
            <span className="font-medium">
              {isPositive ? "+" : ""}
              {priceChange.toFixed(2)}%
            </span>
            <span className="text-sm opacity-75">24h</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Market Cap */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <BarChart3 className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Market Cap</h3>
                <p className="text-sm text-blue-300">Total market value</p>
              </div>
            </div>
            <p className="text-2xl font-bold text-white">
              {formatMarketCap(coin.market_cap)}
            </p>
            <p className="text-sm text-blue-300 mt-1">
              Rank #{coin.market_cap_rank}
            </p>
          </div>

          {/* Trading Volume */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-green-500/20 rounded-xl">
                <Activity className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">24h Volume</h3>
                <p className="text-sm text-blue-300">Trading activity</p>
              </div>
            </div>
            <p className="text-2xl font-bold text-white">
              {formatMarketCap(coin.total_volume)}
            </p>
          </div>
        </div>

        {/* Price Range */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-8">
          <h3 className="font-semibold text-white mb-4">24h Price Range</h3>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-blue-300">Low</span>
            <span className="text-sm text-blue-300">High</span>
          </div>
          <div className="relative">
            <div className="w-full h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"></div>
            <div
              className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full border-2 border-blue-500"
              style={{
                left: `${
                  ((coin.current_price - coin.low_24h) /
                    (coin.high_24h - coin.low_24h)) *
                  100
                }%`,
              }}
            ></div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm font-medium text-white">
              {formatPrice(coin.low_24h)}
            </span>
            <span className="text-sm font-medium text-white">
              {formatPrice(coin.high_24h)}
            </span>
          </div>
        </div>

        {/* Close Button */}
        <div className="text-center">
          <button
            onClick={onClose}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoinModal;
