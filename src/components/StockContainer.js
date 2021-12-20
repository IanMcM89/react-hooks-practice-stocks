import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, portfolio, setPortfolio }) {
  function handleClick(stock) {
    if (portfolio.includes(stock)) {
      return null
    } else {
      return setPortfolio([...portfolio, stock]);
    }
  }

  const stocksToBeDisplayed = stocks.map(stock => {
    return (
    <div key={stock.id} onClick={() => handleClick(stock)}>
      <Stock stock={stock}/>
    </div>
    )
  });

  return (
    <div>
      <h2>Stocks</h2>
      {stocksToBeDisplayed}
    </div>
  );
}

export default StockContainer;
