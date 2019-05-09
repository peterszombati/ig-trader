const timeframes = ['SECOND', 'MINUTE', 'MINUTE_2', 'MINUTE_3', 'MINUTE_5', 'MINUTE_15', 'MINUTE_30', 'HOUR', 'HOUR_2', 'HOUR_3', 'HOUR_4', 'DAY', 'WEEK', 'MONTH']
const markets = [{
  epic: 'CS.D.GBPUSD.TODAY.IP',
  instrumentName: 'GBP/USD',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 1.0,
  retailMarginPct: 0.033
}, {
  epic: 'CS.D.USDJPY.TODAY.IP',
  instrumentName: 'USD/JPY',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 0.8,
  retailMarginPct: 0.033
}, {
  epic: 'CS.D.EURCHF.TODAY.IP',
  instrumentName: 'EUR/CHF',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 2.1,
  retailMarginPct: 0.033
}, {
  epic: 'CS.D.EURGBP.TODAY.IP',
  instrumentName: 'EUR/GBP',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 1.0,
  retailMarginPct: 0.033
}, {
  epic: 'CS.D.EURJPY.TODAY.IP',
  instrumentName: 'EUR/JPY',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 1.6,
  retailMarginPct: 0.033
}, {
  epic: 'CS.D.EURUSD.TODAY.IP',
  instrumentName: 'EUR/USD',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 0.7,
  retailMarginPct: 0.033
}, {
  epic: 'CS.D.GBPJPY.TODAY.IP',
  instrumentName: 'GBP/JPY',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 2.6,
  retailMarginPct: 0.033
}, {
  epic: 'CS.D.USDCHF.TODAY.IP',
  instrumentName: 'USD/CHF',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 2.1,
  retailMarginPct: 0.033
}, {
  epic: 'CS.D.AUDJPY.TODAY.IP',
  instrumentName: 'AUD/JPY',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 1.4,
  retailMarginPct: 0.05
}, {
  epic: 'CS.D.AUDUSD.TODAY.IP',
  instrumentName: 'AUD/USD',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 0.7,
  retailMarginPct: 0.05
}, {
  epic: 'CS.D.CHFJPY.TODAY.IP',
  instrumentName: 'CHF/JPY',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 2.1,
  retailMarginPct: 0.033
}, {
  epic: 'CS.D.USDCAD.TODAY.IP',
  instrumentName: 'USD/CAD',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 1.8,
  retailMarginPct: 0.033
}, {
  epic: 'CS.D.EURAUD.TODAY.IP',
  instrumentName: 'EUR/AUD',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 1.9,
  retailMarginPct: 0.05
}, {
  epic: 'CS.D.GBPAUD.TODAY.IP',
  instrumentName: 'GBP/AUD',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 2.0,
  retailMarginPct: 0.05
}, {
  epic: 'CS.D.GBPCHF.TODAY.IP',
  instrumentName: 'GBP/CHF',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 3.1,
  retailMarginPct: 0.033
}, {
  epic: 'CS.D.CADJPY.TODAY.IP',
  instrumentName: 'CAD/JPY',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 2.6,
  retailMarginPct: 0.033
}, {
  epic: 'CS.D.EURCAD.TODAY.IP',
  instrumentName: 'EUR/CAD',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 3.1,
  retailMarginPct: 0.033
}, {
  epic: 'CS.D.GBPCAD.TODAY.IP',
  instrumentName: 'GBP/CAD',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 3.6,
  retailMarginPct: 0.033
}, {
  epic: 'CS.D.AUDCAD.TODAY.IP',
  instrumentName: 'AUD/CAD',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 2.1,
  retailMarginPct: 0.05
}, {
  epic: 'CS.D.EURNZD.TODAY.IP',
  instrumentName: 'EUR/NZD',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 3.1,
  retailMarginPct: 0.05
}, {
  epic: 'CS.D.AUDNZD.TODAY.IP',
  instrumentName: 'AUD/NZD',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 3.1,
  retailMarginPct: 0.05
}, {
  epic: 'CS.D.NZDUSD.TODAY.IP',
  instrumentName: 'NZD/USD',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 2.1,
  retailMarginPct: 0.05
}, {
  epic: 'CS.D.NZDJPY.TODAY.IP',
  instrumentName: 'NZD/JPY',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 2.6,
  retailMarginPct: 0.05
},
{
  epic: 'CS.D.AUDCHF.TODAY.IP',
  instrumentName: 'AUD/CHF',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 2.1,
  retailMarginPct: 0.05
},
{
  epic: 'CS.D.CADCHF.TODAY.IP',
  instrumentName: 'CAD/CHF',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 2.6,
  retailMarginPct: 0.033
},
{
  epic: 'CS.D.USDSGD.TODAY.IP',
  instrumentName: 'USD/SGD',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 3.1,
  retailMarginPct: 0.05
},
{
  epic: 'CS.D.AUDSGD.TODAY.IP',
  instrumentName: 'AUD/SGD',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 3.1,
  retailMarginPct: 0.033
},
{
  epic: 'CS.D.NZDCAD.TODAY.IP',
  instrumentName: 'NZD/CAD',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 3.6,
  retailMarginPct: 0.05
},
{
  epic: 'CS.D.GBPSGD.TODAY.IP',
  instrumentName: 'GBP/SGD',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 5.1,
  retailMarginPct: 0.05
},
{
  epic: 'CS.D.GBPNZD.TODAY.IP',
  instrumentName: 'GBP/NZD',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 5.1,
  retailMarginPct: 0.05
},
{
  epic: 'CS.D.USDHUF.TODAY.IP',
  instrumentName: 'USD/HUF',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 20.1,
  retailMarginPct: 0.05
},
{
  epic: 'CS.D.EURPLN.TODAY.IP',
  instrumentName: 'EUR/PLN',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 25.1,
  retailMarginPct: 0.05
},
{
  epic: 'CS.D.USDPLN.TODAY.IP',
  instrumentName: 'USD/PLN',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 25.1,
  retailMarginPct: 0.05
},
{
  epic: 'CS.D.EURNOK.TODAY.IP',
  instrumentName: 'EUR/NOK',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 25.1,
  retailMarginPct: 0.05
},
{
  epic: 'CS.D.USDNOK.TODAY.IP',
  instrumentName: 'USD/NOK',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 25.1,
  retailMarginPct: 0.05
},
{
  epic: 'CS.D.USDSEK.TODAY.IP',
  instrumentName: 'USD/SEK',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 25.1,
  retailMarginPct: 0.05
},
{
  epic: 'CS.D.USDCZK.TODAY.IP',
  instrumentName: 'USD/CZK',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 25.1,
  retailMarginPct: 0.05
},
{
  epic: 'CS.D.EURSEK.TODAY.IP',
  instrumentName: 'EUR/SEK',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 30.1,
  retailMarginPct: 0.05
},
{
  epic: 'CS.D.USDTRY.TODAY.IP',
  instrumentName: 'USD/TRY',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 50.1,
  retailMarginPct: 0.1
},
{
  epic: 'CS.D.EURTRY.TODAY.IP',
  instrumentName: 'EUR/TRY',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 60.1,
  retailMarginPct: 0.1
},
{
  epic: 'CS.D.SEKJPY.TODAY.IP',
  instrumentName: 'SEK/JPY',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 0.7,
  retailMarginPct: 0.05
},
{
  epic: 'CS.D.NOKSEK.TODAY.IP',
  instrumentName: 'NOK/SEK',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 6.1,
  retailMarginPct: 0.05
},
{
  epic: 'CS.D.NOKJPY.TODAY.IP',
  instrumentName: 'NOK/JPY',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 1.1,
  retailMarginPct: 0.05
},
{
  epic: 'CS.D.GBPNOK.TODAY.IP',
  instrumentName: 'GBP/NOK',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 50.1,
  retailMarginPct: 0.05
},
{
  epic: 'CS.D.CHFSGD.TODAY.IP',
  instrumentName: 'CHF/SGD',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 0.1,
  retailMarginPct: 0.05
},
{
  epic: 'CS.D.SGDJPY.TODAY.IP',
  instrumentName: 'SGD/JPY',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 4.1,
  retailMarginPct: 0.05
},
{
  epic: 'CS.D.NZDCHF.TODAY.IP',
  instrumentName: 'NZD/CHF',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 4.1,
  retailMarginPct: 0.05
},
{
  epic: 'CS.D.EURSGD.TODAY.IP',
  instrumentName: 'EUR/SGD',
  instrumentType: 'CURRENCIES',
  expiry: 'DFB',
  maxSpread: 4.1,
  retailMarginPct: 0.05
}]

module.exports = { timeframes, markets }
