import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, setPortfolio }) {
  function handleClick(stock) {
    setPortfolio(portfolio.filter(element => element !== stock))
    console.log(portfolio)
  }

  const stocksToBeDisplayed = portfolio.map(stock => {
    return (
    <div key={stock.id} onClick={() => handleClick(stock)}>
      <Stock stock={stock}/>
    </div>
    )
  });

  return (
    <div>
      <h2>My Portfolio</h2>
      {stocksToBeDisplayed}
    </div>
  );
}

export default PortfolioContainer;
