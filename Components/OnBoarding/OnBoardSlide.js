import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

const OnBoardSlide = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Onboarding
        bottomBarColor={'#fff'}
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image source={require('./../assets/GetBurn.png')} />,
            title: 'Track Your Goal',
            subtitle: 'Done with React Native Onboarding Swiper',
          },

          {
            backgroundColor: '#fff',
            image: <Image source={require('./../assets/GetBurn.png')} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('./../assets/GetBurn.png')} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('./../assets/TrackYourGoal.png')} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
        ]}
      />
    </View>
  );
};

export default OnBoardSlide;

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 320,
  },
});
