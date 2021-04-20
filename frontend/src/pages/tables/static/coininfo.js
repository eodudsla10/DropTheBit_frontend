import React, { Component } from "react";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

class CoinInfo extends Component {
  render() {
    var lists = [{'id': 'BTC', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 81475000, 'market_USD': 72927.86}, 'target': [{'market': 'binance', 'market_KRW': 71502006, 'market_USD': 64001.08, 'diff_KRW': 9972993, 'diff_USD': 8926.78, 'diff_percent': 12.24}]},
    {'id': 'ETH', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 3006000, 'market_USD': 2690.66}, 'target': [{'market': 'binance', 'market_KRW': 2638245, 'market_USD': 2361.48, 'diff_KRW': 367754, 'diff_USD': 329.18, 'diff_percent': 12.23}]},
    {'id': 'NEO', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 88540, 'market_USD': 79.25}, 'target': [{'market': 'binance', 'market_KRW': 77548, 'market_USD': 69.41, 'diff_KRW': 10991, 'diff_USD': 9.84, 'diff_percent': 12.41}]},
    {'id': 'MTL', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 5680, 'market_USD': 5.08}, 'target': [{'market': 'binance', 'market_KRW': 4993, 'market_USD': 4.47, 'diff_KRW': 686, 'diff_USD': 0.61, 'diff_percent': 12.09}]},
    {'id': 'LTC', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 354000, 'market_USD': 316.86}, 'target': [{'market': 'binance', 'market_KRW': 309944, 'market_USD': 277.43, 'diff_KRW': 44055, 'diff_USD': 39.43, 'diff_percent': 12.44}]},
    {'id': 'XRP', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 2435, 'market_USD': 2.18}, 'target': [{'market': 'binance', 'market_KRW': 2139, 'market_USD': 1.92, 'diff_KRW': 295, 'diff_USD': 0.26, 'diff_percent': 12.12}]},
    {'id': 'ETC', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 29100, 'market_USD': 26.05}, 'target': [{'market': 'binance', 'market_KRW': 24695, 'market_USD': 22.11, 'diff_KRW': 4404, 'diff_USD': 3.94, 'diff_percent': 15.13}]},
    {'id': 'OMG', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 12430, 'market_USD': 11.13}, 'target': [{'market': 'binance', 'market_KRW': 10915, 'market_USD': 9.77, 'diff_KRW': 1514, 'diff_USD': 1.36, 'diff_percent': 12.19}]},
    {'id': 'SNT', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 281, 'market_USD': 0.25}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'WAVES', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 19700, 'market_USD': 17.63}, 'target': [{'market': 'binance', 'market_KRW': 17312, 'market_USD': 15.5, 'diff_KRW': 2387, 'diff_USD': 2.13, 'diff_percent': 12.12}]},
    {'id': 'XEM', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 548, 'market_USD': 0.49}, 'target': [{'market': 'binance', 'market_KRW': 481, 'market_USD': 0.43, 'diff_KRW': 66, 'diff_USD': 0.06, 'diff_percent': 12.13}]},
    {'id': 'QTUM', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 20410, 'market_USD': 18.27}, 'target': [{'market': 'binance', 'market_KRW': 17918, 'market_USD': 16.04, 'diff_KRW': 2491, 'diff_USD': 2.23, 'diff_percent': 12.21}]},
    {'id': 'LSK', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 8020, 'market_USD': 7.18}, 'target': [{'market': 'binance', 'market_KRW': 7047, 'market_USD': 6.31, 'diff_KRW': 972, 'diff_USD': 0.87, 'diff_percent': 12.12}]},
    {'id': 'STEEM', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 1445, 'market_USD': 1.29}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'XLM', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 862, 'market_USD': 0.77}, 'target': [{'market': 'binance', 'market_KRW': 755, 'market_USD': 0.68, 'diff_KRW': 106, 'diff_USD': 0.09, 'diff_percent': 12.41}]},
    {'id': 'ARDR', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 575, 'market_USD': 0.51}, 'target': [{'market': 'binance', 'market_KRW': 506, 'market_USD': 0.45, 'diff_KRW': 68, 'diff_USD': 0.06, 'diff_percent': 11.89}]},
    {'id': 'KMD', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 4310, 'market_USD': 3.86}, 'target': [{'market': 'binance', 'market_KRW': 3777, 'market_USD': 3.38, 'diff_KRW': 532, 'diff_USD': 0.48, 'diff_percent': 12.36}]},
    {'id': 'ARK', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 3220, 'market_USD': 2.88}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'STORJ', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 3020, 'market_USD': 2.7}, 'target': [{'market': 'binance', 'market_KRW': 2654, 'market_USD': 2.38, 'diff_KRW': 365, 'diff_USD': 0.32, 'diff_percent': 12.1}]},
    {'id': 'GRS', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 2035, 'market_USD': 1.82}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'REP', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 66530, 'market_USD': 59.55}, 'target': [{'market': 'binance', 'market_KRW': 57183, 'market_USD': 51.19, 'diff_KRW': 9346, 'diff_USD': 8.36, 'diff_percent': 14.05}]},
    {'id': 'EMC2', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 684, 'market_USD': 0.61}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'ADA', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 1910, 'market_USD': 1.71}, 'target': [{'market': 'binance', 'market_KRW': 1673, 'market_USD': 1.5, 'diff_KRW': 236, 'diff_USD': 0.21, 'diff_percent': 12.4}]},
    {'id': 'SBD', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 11660, 'market_USD': 10.44}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'POWR', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 677, 'market_USD': 0.61}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'BTG', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 147500, 'market_USD': 132.03}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'ICX', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 3220, 'market_USD': 2.88}, 'target': [{'market': 'binance', 'market_KRW': 2835, 'market_USD': 2.54, 'diff_KRW': 384, 'diff_USD': 0.34, 'diff_percent': 11.93}]},
    {'id': 'EOS', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 9965, 'market_USD': 8.92}, 'target': [{'market': 'binance', 'market_KRW': 8698, 'market_USD': 7.79, 'diff_KRW': 1266, 'diff_USD': 1.13, 'diff_percent': 12.71}]},
    {'id': 'TRX', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 194, 'market_USD': 0.17}, 'target': [{'market': 'binance', 'market_KRW': 168, 'market_USD': 0.15, 'diff_KRW': 25, 'diff_USD': 0.02, 'diff_percent': 13.09}]},
    {'id': 'SC', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 36, 'market_USD': 0.03}, 'target': [{'market': 'binance', 'market_KRW': 32, 'market_USD': 0.03, 'diff_KRW': 4, 'diff_USD': 0.0, 'diff_percent': 11.82}]},
    {'id': 'IGNIS', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 222, 'market_USD': 0.2}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'ONT', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 2535, 'market_USD': 2.27}, 'target': [{'market': 'binance', 'market_KRW': 2221, 'market_USD': 1.99, 'diff_KRW': 313, 'diff_USD': 0.28, 'diff_percent': 12.36}]},
    {'id': 'ZIL', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 255, 'market_USD': 0.23}, 'target': [{'market': 'binance', 'market_KRW': 224, 'market_USD': 0.2, 'diff_KRW': 30, 'diff_USD': 0.03, 'diff_percent': 12.04}]},
    {'id': 'POLY', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 568, 'market_USD': 0.51}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'ZRX', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 2810, 'market_USD': 2.52}, 'target': [{'market': 'binance', 'market_KRW': 2464, 'market_USD': 2.21, 'diff_KRW': 345, 'diff_USD': 0.31, 'diff_percent': 12.31}]},
    {'id': 'LOOM', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 226, 'market_USD': 0.2}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'BCH', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 1032500, 'market_USD': 924.19}, 'target': [{'market': 'binance', 'market_KRW': 908797, 'market_USD': 813.46, 'diff_KRW': 123702, 'diff_USD': 110.73, 'diff_percent': 11.98}]},
    {'id': 'ADX', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 1705, 'market_USD': 1.53}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'BAT', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 1945, 'market_USD': 1.74}, 'target': [{'market': 'binance', 'market_KRW': 1711, 'market_USD': 1.53, 'diff_KRW': 233, 'diff_USD': 0.21, 'diff_percent': 12.01}]},
    {'id': 'IOST', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 92, 'market_USD': 0.08}, 'target': [{'market': 'binance', 'market_KRW': 81, 'market_USD': 0.07, 'diff_KRW': 11, 'diff_USD': 0.01, 'diff_percent': 12.13}]},
    {'id': 'DMT', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 1570, 'market_USD': 1.41}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'RFR', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 28, 'market_USD': 0.03}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'CVC', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 834, 'market_USD': 0.75}, 'target': [{'market': 'binance', 'market_KRW': 732, 'market_USD': 0.66, 'diff_KRW': 101, 'diff_USD': 0.09, 'diff_percent': 12.12}]},
    {'id': 'IQ', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 28, 'market_USD': 0.03}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'IOTA', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 3040, 'market_USD': 2.72}, 'target': [{'market': 'binance', 'market_KRW': 2410, 'market_USD': 2.16, 'diff_KRW': 629, 'diff_USD': 0.56, 'diff_percent': 20.69}]},
    {'id': 'MFT', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 26, 'market_USD': 0.02}, 'target': [{'market': 'binance', 'market_KRW': 23, 'market_USD': 0.02, 'diff_KRW': 3, 'diff_USD': 0.0, 'diff_percent': 12.1}]},
    {'id': 'ONG', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 1395, 'market_USD': 1.25}, 'target': [{'market': 'binance', 'market_KRW': 1228, 'market_USD': 1.1, 'diff_KRW': 166, 'diff_USD': 0.15, 'diff_percent': 11.92}]},
    {'id': 'GAS', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 16700, 'market_USD': 14.95}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'UPP', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 232, 'market_USD': 0.21}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'ELF', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 613, 'market_USD': 0.55}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'KNC', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 4405, 'market_USD': 3.94}, 'target': [{'market': 'binance', 'market_KRW': 3869, 'market_USD': 3.46, 'diff_KRW': 535, 'diff_USD': 0.48, 'diff_percent': 12.15}]},
    {'id': 'BSV', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 399950, 'market_USD': 357.99}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'THETA', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 15840, 'market_USD': 14.18}, 'target': [{'market': 'binance', 'market_KRW': 13903, 'market_USD': 12.45, 'diff_KRW': 1936, 'diff_USD': 1.73, 'diff_percent': 12.22}]},
    {'id': 'EDR', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 93, 'market_USD': 0.08}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'QKC', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 46, 'market_USD': 0.04}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'BTT', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 10, 'market_USD': 0.01}, 'target': [{'market': 'binance', 'market_KRW': 8, 'market_USD': 0.01, 'diff_KRW': 1, 'diff_USD': 0.0, 'diff_percent': 12.6}]},
    {'id': 'MOC', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 224, 'market_USD': 0.2}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'ENJ', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 3780, 'market_USD': 3.38}, 'target': [{'market': 'binance', 'market_KRW': 3323, 'market_USD': 2.98, 'diff_KRW': 456, 'diff_USD': 0.4, 'diff_percent': 12.07}]},
    {'id': 'TFUEL', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 427, 'market_USD': 0.38}, 'target': [{'market': 'binance', 'market_KRW': 374, 'market_USD': 0.34, 'diff_KRW': 52, 'diff_USD': 0.04, 'diff_percent': 12.23}]},
    {'id': 'MANA', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 1365, 'market_USD': 1.22}, 'target': [{'market': 'binance', 'market_KRW': 1202, 'market_USD': 1.08, 'diff_KRW': 162, 'diff_USD': 0.14, 'diff_percent': 11.89}]},
    {'id': 'ANKR', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 201, 'market_USD': 0.18}, 'target': [{'market': 'binance', 'market_KRW': 176, 'market_USD': 0.16, 'diff_KRW': 24, 'diff_USD': 0.02, 'diff_percent': 11.96}]},
    {'id': 'AERGO', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 462, 'market_USD': 0.41}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'ATOM', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 30840, 'market_USD': 27.6}, 'target': [{'market': 'binance', 'market_KRW': 27085, 'market_USD': 24.24, 'diff_KRW': 3754, 'diff_USD': 3.36, 'diff_percent': 12.17}]},
    {'id': 'TT', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 34, 'market_USD': 0.03}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'CRE', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 28, 'market_USD': 0.03}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'SOLVE', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 387, 'market_USD': 0.35}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'MBL', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 24, 'market_USD': 0.02}, 'target': [{'market': 'binance', 'market_KRW': 21, 'market_USD': 0.02, 'diff_KRW': 2, 'diff_USD': 0.0, 'diff_percent': 11.81}]},
    {'id': 'TSHP', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 32, 'market_USD': 0.03}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'WAXP', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 303, 'market_USD': 0.27}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'HBAR', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 474, 'market_USD': 0.42}, 'target': [{'market': 'binance', 'market_KRW': 416, 'market_USD': 0.37, 'diff_KRW': 57, 'diff_USD': 0.05, 'diff_percent': 12.11}]},
    {'id': 'MED', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 189, 'market_USD': 0.17}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'MLK', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 2650, 'market_USD': 2.37}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'STPT', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 95, 'market_USD': 0.09}, 'target': [{'market': 'binance', 'market_KRW': 85, 'market_USD': 0.08, 'diff_KRW': 10, 'diff_USD': 0.01, 'diff_percent': 10.66}]},
    {'id': 'ORBS', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 213, 'market_USD': 0.19}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'VET', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 203, 'market_USD': 0.18}, 'target': [{'market': 'binance', 'market_KRW': 178, 'market_USD': 0.16, 'diff_KRW': 24, 'diff_USD': 0.02, 'diff_percent': 11.99}]},
    {'id': 'CHZ', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 624, 'market_USD': 0.56}, 'target': [{'market': 'binance', 'market_KRW': 549, 'market_USD': 0.49, 'diff_KRW': 74, 'diff_USD': 0.07, 'diff_percent': 11.99}]},
    {'id': 'PXL', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 151, 'market_USD': 0.14}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'STMX', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 80, 'market_USD': 0.07}, 'target': [{'market': 'binance', 'market_KRW': 69, 'market_USD': 0.06, 'diff_KRW': 10, 'diff_USD': 0.01, 'diff_percent': 12.63}]},
    {'id': 'DKA', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 304, 'market_USD': 0.27}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'HIVE', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 732, 'market_USD': 0.66}, 'target': [{'market': 'binance', 'market_KRW': 642, 'market_USD': 0.57, 'diff_KRW': 89, 'diff_USD': 0.09, 'diff_percent': 12.26}]},
    {'id': 'KAVA', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 8165, 'market_USD': 7.31}, 'target': [{'market': 'binance', 'market_KRW': 7179, 'market_USD': 6.43, 'diff_KRW': 985, 'diff_USD': 0.88, 'diff_percent': 12.07}]},
    {'id': 'AHT', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 23, 'market_USD': 0.02}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'LINK', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 46790, 'market_USD': 41.88}, 'target': [{'market': 'binance', 'market_KRW': 40979, 'market_USD': 36.68, 'diff_KRW': 5810, 'diff_USD': 5.2, 'diff_percent': 12.42}]},
    {'id': 'XTZ', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 8635, 'market_USD': 7.73}, 'target': [{'market': 'binance', 'market_KRW': 7523, 'market_USD': 6.73, 'diff_KRW': 1111, 'diff_USD': 1.0, 'diff_percent': 12.87}]},
    {'id': 'BORA', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 321, 'market_USD': 0.29}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'JST', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 201, 'market_USD': 0.18}, 'target': [{'market': 'binance', 'market_KRW': 175, 'market_USD': 0.16, 'diff_KRW': 25, 'diff_USD': 0.02, 'diff_percent': 12.68}]},
    {'id': 'CRO', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 298, 'market_USD': 0.27}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'TON', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 18300, 'market_USD': 16.38}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'SXP', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 5980, 'market_USD': 5.35}, 'target': [{'market': 'binance', 'market_KRW': 5249, 'market_USD': 4.7, 'diff_KRW': 730, 'diff_USD': 0.65, 'diff_percent': 12.21}]},
    {'id': 'LAMB', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 123, 'market_USD': 0.11}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'HUNT', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 513, 'market_USD': 0.46}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'MARO', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 626, 'market_USD': 0.56}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'PLA', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 648, 'market_USD': 0.58}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'DOT', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 55340, 'market_USD': 49.53}, 'target': [{'market': 'binance', 'market_KRW': 48620, 'market_USD': 43.52, 'diff_KRW': 6719, 'diff_USD': 6.01, 'diff_percent': 12.14}]},
    {'id': 'SRM', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 8740, 'market_USD': 7.82}, 'target': [{'market': 'binance', 'market_KRW': 7737, 'market_USD': 6.93, 'diff_KRW': 1002, 'diff_USD': 0.89, 'diff_percent': 11.47}]},
    {'id': 'MVL', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 39, 'market_USD': 0.04}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'PCI', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 2450, 'market_USD': 2.19}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'STRAX', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 5500, 'market_USD': 4.92}, 'target': [{'market': 'binance', 'market_KRW': 2737, 'market_USD': 2.45, 'diff_KRW': 2762, 'diff_USD': 2.47, 'diff_percent': 50.23}]},
    {'id': 'AQT', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 9980, 'market_USD': 8.93}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'BCHA', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 61740, 'market_USD': 55.26}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'GLM', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 687, 'market_USD': 0.61}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'QTCON', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 101, 'market_USD': 0.09}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'SSX', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 166, 'market_USD': 0.15}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'META', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 254, 'market_USD': 0.23}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'OBSR', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 34, 'market_USD': 0.03}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'FCT2', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 250, 'market_USD': 0.22}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'LBC', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 276, 'market_USD': 0.25}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'CBK', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 9475, 'market_USD': 8.48}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'SAND', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 812, 'market_USD': 0.73}, 'target': [{'market': 'binance', 'market_KRW': 715, 'market_USD': 0.64, 'diff_KRW': 96, 'diff_USD': 0.09, 'diff_percent': 11.92}]},
    {'id': 'HUM', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 219, 'market_USD': 0.2}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'DOGE', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 156, 'market_USD': 0.14}, 'target': [{'market': 'binance', 'market_KRW': 135, 'market_USD': 0.12, 'diff_KRW': 20, 'diff_USD': 0.02, 'diff_percent': 13.11}]},
    {'id': 'STRK', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 79550, 'market_USD': 71.2}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'PUNDIX', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 5345, 'market_USD': 4.78}, 'target': [{'market': 'binance', 'market_KRW': 4667, 'market_USD': 4.18, 'diff_KRW': 677, 'diff_USD': 0.6, 'diff_percent': 12.67}]},
    {'id': 'FLOW', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 47130, 'market_USD': 42.19}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'DAWN', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 4920, 'market_USD': 4.4}, 'target': [{'market': 'binance', 'market_KRW': '', 'market_USD': '', 'diff_KRW': '', 'diff_USD': '', 'diff_percent': ''}]},
    {'id': 'AXS', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 9700, 'market_USD': 8.68}, 'target': [{'market': 'binance', 'market_KRW': 8522, 'market_USD': 7.63, 'diff_KRW': 1177, 'diff_USD': 1.05, 'diff_percent': 12.14}]},
    {'id': 'STX', 'name_kr': '', 'name_en': '', 'standard': {'market': 'upbit', 'market_KRW': 2815, 'market_USD': 2.52}, 'target': [{'market': 'binance', 'market_KRW': 2463, 'market_USD': 2.2, 'diff_KRW': 351, 'diff_USD': 0.32, 'diff_percent': 12.5}]},
    ]
    return (
      <tbody>
        {lists.map((row) => (
          <tr>
            <td>1</td>
            <td>
              <img
                src={"https://static.upbit.com/logos/" + row.id + ".png"}
                alt={row.id}
                title={row.id}
                height="16"
              ></img>
              <span class="text-muted fw-semi-bold">{row.id}</span>
            </td>
            <td>
              <span class="text-muted fw-semi-bold">
                {row.name_kr}({row.name_en})
              </span>
            </td>
            <td>{numberWithCommas(row.standard.market_KRW)} 원</td>
            <td>{numberWithCommas(row.target[0].market_KRW)} 원</td>
            <td>
            {row.target[0].diff_percent}% ({numberWithCommas(row.target[0].diff_KRW)})
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default CoinInfo;
