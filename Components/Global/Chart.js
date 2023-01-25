import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ProgressView} from '@react-native-community/progress-view';

const Chart = () => {
  return (
    <View style={{flex: 1}}>
      <ProgressView
        progressTintColor="orange"
        trackTintColor="blue"
        progress={0.7}
      />
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({});
