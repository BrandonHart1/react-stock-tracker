import React from 'react';

const Stock = ({ name, symbol, price, volume }) => {
  return (
    <div className='stock-container'>
      <div className='stock-row'>
        <div className='stock'>
          <h1>{name}</h1>
          <h4 className='stock-symbol'>{symbol}</h4>
        </div>
        <div className='stock-data'>
          <h4 className='price'>${price}</h4>
          <h4 className='price-voluem'>{volume}</h4>
        </div>
      </div>
    </div>
  );
};

export default Stock;
