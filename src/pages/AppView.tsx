import {observer} from 'mobx-react';
import React, {useContext} from 'react';
import {View} from 'react-native';
import AppStoreContext from '../Context/AppStoreContext';
import MarketView from './MarketView';
import OnboardingView from './OnboardingView';

function AppView() {
  const appStore = useContext(AppStoreContext);
  const hideOnboarding = appStore!.dismissOnboarding;
  const onboardingView = hideOnboarding ? <MarketView /> : <OnboardingView />;

  return <View>{onboardingView}</View>;
}


export default observer(AppView);
