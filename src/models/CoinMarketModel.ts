export class CoinMarketModel {
  id: string;
  symbol: string;
  name: string;
  image: string;
  currentPrice: number;
  marketCap: number;
  marketCapRank : number;
  high: number;
  low: number;
  priceChange: number;


  constructor(
    id: string,
    symbol: string,
    name: string,
    marketCapRank: number,
    image: string,
    currentPrice: number,
    marketCap: number,
    high: number,
    low: number,
    priceChange: number,
  ) {
    this.id = id;
    this.symbol = symbol;
    this.name = name;
    this.image = image;
    this.currentPrice = currentPrice;
    this.marketCap = marketCap;
    this.marketCapRank = marketCapRank;
    this.high = high;
    this.low = low;
    this.priceChange = priceChange;
  }
}

export interface ICoinMarketModel {
  id: string;
  market_cap_rank: number;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
}



