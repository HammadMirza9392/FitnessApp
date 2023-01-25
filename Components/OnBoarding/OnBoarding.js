import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

const OnBoarding = ({navigation}) => {
  return (
    <View>
      <Onboarding
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image source={require('./images/circle.png')} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },

          {
            backgroundColor: '#fff',
            image: <Image source={require('./images/circle.png')} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
        ]}
      />
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({});
