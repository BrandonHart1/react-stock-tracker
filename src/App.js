import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import Stock from './components/Stock';

const options = {
  method: 'GET',
  url: 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/AAPL,MSFT',
  headers: {
    'X-RapidAPI-Key': '1fc89bb480mshc1d943b3abb9bd4p1307f2jsnc9abef2d6a98',
    'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com',
  },
};

function App() {
  const [stocks, setStocks] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setStocks(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const filteredStocks = stocks.filter((stock) => stock.name);

  return (
    <div className='stock-app'>
      <div className='stock-search'>
        <h1 className='stock-text'>Search Stock</h1>
        <form>
          <input
            type='text'
            className='stock-input'
            placeholder='Search Stock'
            onChange={changeHandler}
          />
        </form>
      </div>
      {filteredStocks.map((stock) => {
        return (
          <Stock
            // -------- Need to change the price and volume when the market is open --------
            key={stock.symbol}
            name={stock.shortName}
            price={stock.regularMarketPrice}
            volume={stock.averageDailyVolume10Day}
          />
        );
      })}
    </div>
  );
}

export default App;
