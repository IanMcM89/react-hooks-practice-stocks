import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [filteredStocks, setFilteredStocks] = useState(stocks);
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(r => r.json())
    .then(data => {
      setStocks(data);
      setFilteredStocks(data)
    })
  }, []);

  function handleSortChange(e) {
    const sortByTicker = (a, b) => {
      if(a.ticker < b.ticker) { return -1; }
      if(a.ticker > b.ticker) { return 1; }
      return 0;
    };

    const sortByPrice = (a, b) => {
      if(a.price < b.price) { return -1; }
      if(a.price > b.price) { return 1; }
      return 0;
    };

    if (e.target.value === "Alphabetically") {
      setFilteredStocks(stocks.slice(0).sort(sortByTicker));
    } else {
      setFilteredStocks(stocks.slice(0).sort(sortByPrice));
    }
  }

  function handleCategoryChange(e) {
    setFilteredStocks(stocks.filter(stock => stock.type === e.target.value));
  }

  return (
    <div>
      <SearchBar onSortChange={handleSortChange} onCategoryChange={handleCategoryChange}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} portfolio={portfolio} setPortfolio={setPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} setPortfolio={setPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
