import React, {useContext} from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import {Button} from '../components/Button';
import AppStoreContext from '../Context/AppStoreContext';

export type OnboardingViewProps = {};

const OnboardingView: React.FC<OnboardingViewProps> = () => {
  const appStore = useContext(AppStoreContext);

  return (
    <>
      <SafeAreaView>
        <View style={style.background}>
          <View style={style.heading}>
            <Text style={style.headingTextSuffix}>Gezel</Text>
            <Text style={style.headingTextPrefix}>X</Text>
          </View>

          <Image
            style={{
              width: '100%',
              height: '50%',
              alignSelf: 'flex-end',
              paddingTop: 48,
            }}
            source={require('../../assets/onboarding_icon.png')}
          />

          <View style={style.buttonPosition}>
            <Button
              text="Get Started"
              onTap={() => appStore?.onClickOnboardingButton()}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  background: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'black',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  heading: {
    display: 'flex',
    margin: 32,

    paddingTop: 42,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  headingTextSuffix: {
    color: 'white',
    fontSize: 70,
    fontWeight: 'bold',
  },
  headingTextPrefix: {
    color: '#5a6fe4',
    fontSize: 70,
    fontWeight: 'bold',
  },
  buttonPosition: {
    alignSelf: 'center',
  },
});
export default OnboardingView;
