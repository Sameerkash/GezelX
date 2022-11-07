import {observer} from 'mobx-react';
import React, {useContext, useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {Coin} from '../components/Coin';
import AppStoreContext from '../Context/AppStoreContext';

export type MarketViewProps = {};

const MarketView: React.FC<MarketViewProps> = () => {
  const appStore = useContext(AppStoreContext)!;

  useEffect(() => {
    appStore.getMarketData(1);
  }, []);

  function loadMoreData() {
    let page = appStore.pageNumber;
    appStore.getPaginatedMarketData(page + 1);
  }

  if (appStore.isDataLoading) {
    return (
      <ActivityIndicator
        color="white"
        style={{marginTop: 30, width: 30, height: 30}}
      />
    );
  }

  if (appStore.marketDataList == null || appStore.marketDataList.length == 0) {
    return <Text>nothing to show</Text>;
  }

  return (
    <View style={tw`pt-2`}>
      <View>
        <Text style={tw`text-2xl text-white m-4 font-extrabold`}>
          Welcome to GezelX 👋
        </Text>
      </View>
      <FlatList
        data={appStore.marketDataList}
        renderItem={({item}) => <Coin marketCoin={item} />}
        onEndReached={loadMoreData}
        ListFooterComponent={
          appStore.isPaginationDataLoading ? (
            <ActivityIndicator color="white" style={{marginLeft: 20}} />
          ) : null
        }
      />
    </View>
  );
};

export default observer(MarketView);
