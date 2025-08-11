import React from "react";
import { Loader } from "lucide-react";

// ✅ Removed TypeScript annotation: React.FC

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse"></div>
          <Loader className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-12 text-white animate-spin" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">
          Loading Cryptocurrencies
        </h2>
        <p className="text-blue-300">Fetching real-time market data...</p>
        <div className="flex justify-center space-x-1 mt-4">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
