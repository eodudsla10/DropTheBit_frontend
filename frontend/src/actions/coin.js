import axios from 'axios';


export const GET_COIN_INFO = 'GET_COIN_INFO';

export const getCoinInfo = async () => {
  const coin_data = await axios.get('http://localhost:8000/main');
  return {
    type: GET_COIN_INFO,
    payload: coin_data,
  };
}