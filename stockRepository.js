'use strict';
const alpha = require('alphavantage')({ key: 'XMXHISH1MCJZGPV1' });

const getStockUpdate = async function (stock_symbol) {
   const stockUpdates = await alpha.data.daily(stock_symbol,'json','compact','60min');
   return stockUpdates;
}
module.exports.getStockUpdate = getStockUpdate;
