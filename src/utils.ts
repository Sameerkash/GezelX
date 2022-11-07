import {CoinMarketModel, ICoinMarketModel} from './models/CoinMarketModel';

export function parseCoinData(coin: ICoinMarketModel): CoinMarketModel {
  return new CoinMarketModel(
    coin.id,
    coin.symbol,
    coin.name,
    coin.market_cap_rank,
    coin.image,
    coin.current_price,
    coin.market_cap,
    coin.high_24h,
    coin.low_24h,
    coin.price_change_24h,
  );
}
