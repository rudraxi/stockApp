const sr = require ('./stockRepository');
const dateFns = require ('date-fns');

const getStockReport = async function (symbol,date){
    let stockReport ={};
    const report = await sr.getStockUpdate(symbol);
   // const report['Time Series (Daily)'][date];
    const weeksData = []
    weeksData.push(getDataOfDate(data,));
}

const getReportOfDay = function(report,dateStr){
    const rawReport = report['Time Series (Daily)'][dateStr];
    if(rawReport){
        const dayReport = {
            stockDate: dateStr,
            openValue: rawReport['1. open'],
            highValue: rawReport['2. high']
         }
         return dayReport;
        }
        return null;
}


const getStockReportWeek = async function (symbol){
    let stock ={
        symbol
    };
    let stockReport =[];
    let date = new Date();
    let dateStr = '';

    const report = await sr.getStockUpdate(symbol);

    for(let i=0;i<=5;i++){
        
        dateStr = dateFns.format(date,'yyyy-MM-dd');
        const dayReport = getReportOfDay(report,dateStr)
        if(dayReport){
              stockReport.push(dayReport)
        }
        
        date.setDate(date.getDate() - 1);

    }
    let fullStock={...stock,
        stockReport
    }
    return fullStock;
}

//getStockReport('IBM','2020-06-24');
module.exports.getStockReport = getStockReport;
module.exports.getStockReportWeek = getStockReportWeek;