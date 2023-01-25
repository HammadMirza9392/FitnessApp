import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';

const Chart = () => {
  return (
    <View style={{flex: 1}}>
      <Progress.Bar
        progress={0.3}
        width={200}
        unfilledColor={'red'}
        borderWidth={2}
        height={8}
        style={{transform: [{rotate: '-90deg'}], marginTop: 120}}
      />
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({});
