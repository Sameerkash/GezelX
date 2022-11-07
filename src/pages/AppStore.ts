import {action, makeObservable, observable, runInAction} from 'mobx';
import {CoinMarketModel, ICoinMarketModel} from '../models/CoinMarketModel';
import {getMarketData} from '../Service/Repository';
import {parseCoinData} from '../utils';

class AppStore {
  constructor() {
    makeObservable(this);
  }

  @observable dismissOnboarding: boolean = false;

  @observable pageNumber: number = 1;

  @observable isDataLoading: boolean = false;
  @observable isPaginationDataLoading: boolean = false;

  @observable marketDataList: Array<CoinMarketModel> = [];

  @action
  onClickOnboardingButton() {
    this.dismissOnboarding = true;
  }

  @action
  changeIsDataLoadingState() {
    this.isDataLoading = !this.isDataLoading;
  }

  @action
  changePaginationDataLoadingState() {
    this.isPaginationDataLoading = !this.isPaginationDataLoading;
  }

  @action
  async getMarketData(pageNumber: number) {
    let marketList: Array<CoinMarketModel> = [];
    this.changeIsDataLoadingState();

    let result = await getMarketData(this.pageNumber);
    if (result != null || Array.isArray(result)) {
      result.map(coin => {
        const coinMarketModel = parseCoinData(coin);
        marketList.push(coinMarketModel);
      });

      runInAction(() => {
        this.marketDataList = marketList;
      });
    }

    this.changeIsDataLoadingState();
  }

  @action
  async getPaginatedMarketData(pageNumber: number) {
    let marketList: Array<CoinMarketModel> = [];

    this.pageNumber = pageNumber;
    this.changePaginationDataLoadingState();

    let result = await getMarketData(this.pageNumber);
    if (result != null || Array.isArray(result)) {
      result.map(coin => {
        const coinMarketModel = parseCoinData(coin);
        marketList.push(coinMarketModel);
      });

      runInAction(() => {
        this.marketDataList.push(...marketList);
      });
      this.changePaginationDataLoadingState();
    }
  }
}

const store = new AppStore();
export {store, AppStore};
