import React from "react";
import { AlertCircle, RefreshCw } from "lucide-react";

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto rounded-full bg-red-500/20 flex items-center justify-center mb-4">
            <AlertCircle className="h-12 w-12 text-red-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-red-300 mb-6">{message}</p>
        </div>

        <button
          onClick={onRetry}
          className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
        >
          <RefreshCw className="h-5 w-5" />
          <span>Try Again</span>
        </button>

        <div className="mt-6 text-sm text-blue-300">
          <p>Having trouble? Try:</p>
          <ul className="mt-2 space-y-1 text-blue-400">
            <li>• Checking your internet connection</li>
            <li>• Refreshing the page</li>
            <li>• Waiting a moment and trying again</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
