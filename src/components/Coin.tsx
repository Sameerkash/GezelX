import React, {useEffect, useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {CoinMarketModel} from '../models/CoinMarketModel';
import Icon from 'react-native-vector-icons/AntDesign';

type CoinProps = {
  marketCoin: CoinMarketModel;
};

export const Coin: React.FC<CoinProps> = ({marketCoin}) => {
  const {
    image,
    name,
    marketCapRank,
    symbol,
    priceChange,
    currentPrice,
    marketCap,
    id,
  } = marketCoin;

  const handleMarketCap = (marketCap: number) => {
    if (marketCap > 1e12) {
      return `${Math.floor(marketCap / 1e12)}T`;
    }
    if (marketCap > 1e9) {
      return `${Math.floor(marketCap / 1e9)}B`;
    }
    if (marketCap > 1e6) {
      return `${Math.floor(marketCap / 1e6)}M`;
    }
    if (marketCap > 1e3) {
      return `${Math.floor(marketCap / 1e3)}K`;
    }
    return marketCap;
  };
  const handleIconColor = priceChange < 0 ? '#e45c5c' : '#54dcaa';
  const handleIcon = priceChange < 0 ? 'caretdown' : 'caretup';

  return (
    <Pressable
      style={tw`flex flex-row pt-8 p-3 pl-6 pr-6 border-b-2 rounded-2xl border-gray-700 bg-black mx-2`}>
      <Image
        style={tw`h-10 w-10 mr-4 self-center`}
        source={{
          uri: image,
        }}
      />
      <View>
        <Text style={tw`text-white font-bold mb-2`}>{name}</Text>
        <View style={tw`flex flex-row`}>
          <View style={tw`bg-gray-700 px-1 rounded mr-2`}>
            <Text style={tw`text-white font-bold`}>{marketCapRank}</Text>
          </View>
          <Text style={tw`mr-2 text-white`}>{symbol.toUpperCase()}</Text>
          <Icon
            name={handleIcon}
            size={14}
            color={handleIconColor}
            style={tw`self-center mr-2`}
          />
          <Text style={tw.style(`mr-2`, {color: handleIconColor})}>
            {priceChange.toFixed(2)}%
          </Text>
        </View>
      </View>
      <View style={tw`ml-auto items-end`}>
        <Text style={tw`text-white mb-2`}> ₹ {currentPrice}</Text>
        <Text style={tw`text-white`}>
          Market Cap {handleMarketCap(marketCap)}
        </Text>
      </View>
    </Pressable>
  );
};
