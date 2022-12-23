import React, { useEffect, useState } from 'react';

import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://mboum-finance.p.rapidapi.com/qu/quote',
  params: { symbol: 'AAPL,MSFT,^SPX,^NYA,GAZP.ME, SIBN.ME, GEECEE.NS' },
  headers: {
    'X-RapidAPI-Key': '1fc89bb480mshc1d943b3abb9bd4p1307f2jsnc9abef2d6a98',
    'X-RapidAPI-Host': 'mboum-finance.p.rapidapi.com',
  },
};

const HomeScreen = () => {
  const [stockQuotes, setStockQuotes] = useState();
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>HomeScreen</h1>
    </div>
  );
};

export default HomeScreen;
