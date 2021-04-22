// 액션들 임포트하기
import { GET_COIN_INFO } from "../actions/coin.js";

const defaultState = {
  coinList: [
    {
      id: "BTC",
      name_kr: "dfdfdfd",
      name_en: "",
      standard: {
        market: "upbit",
        market_KRW: 0,
        market_USD: 0,
      },
      target: [
        {
          market: "binance",
          market_KRW: 0,
          market_USD: 0,
          diff_KRW: 0,
          diff_USD: 0,
          diff_percent: 0,
        },
      ],
    },
  ],
};

export default function getCoinInfo(state = defaultState, action) {
  switch (action.type) {
    case GET_COIN_INFO:
      return Object.assign({}, state, getCoinInfo);
    default:
      return state;
  }
}
