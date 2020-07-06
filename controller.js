const http = require('http');
const url = require('url');
const querySymbol = require('./stockService.js');

module.exports = http.createServer(async(req, res) => {

    var stockService = require('./stockService.js');
    const reqUrl = url.parse(req.url, true);

    // GET Endpoint
    if (reqUrl.pathname == '/stockreport' && req.method === 'GET') {
        console.log('Request Type:' +
            req.method + ' Endpoint: ' +
            reqUrl.pathname);
            const response =  await stockService.getStockReportWeek(reqUrl.query.symbol);
            console.log(response);
            res.statusCode = 200;
            res.end(JSON.stringify(response));

    }  
});