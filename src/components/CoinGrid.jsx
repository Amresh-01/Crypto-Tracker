import React from "react";
import CoinCard from "./CoinCard";

const CoinGrid = ({ coins, onCoinSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {coins.map((coin) => (
        <CoinCard
          key={coin.id}
          coin={coin}
          onClick={() => onCoinSelect(coin)}
        />
      ))}
    </div>
  );
};

export default CoinGrid;
