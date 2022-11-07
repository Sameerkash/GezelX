import axios from 'axios';
import {ICoinMarketModel} from '../models/CoinMarketModel';

const apiUrl: string = 'https://api.coingecko.com/api/v3/coins';

export const getMarketData = async (
  page?: number,
): Promise<Array<ICoinMarketModel>> => {
  try {
    const response = await axios.get(
      `${apiUrl}/markets?vs_currency=inr&order=market_cap_desc&per_page=20&page=${page}&sparkline=false&price_change_percentage=24h`,
    );

    const parsedResponse: Array<ICoinMarketModel> =
      response.data as Array<ICoinMarketModel>;

    return parsedResponse;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default {
  getMarketData: getMarketData,
};
