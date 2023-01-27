import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DashedCircularIndicator} from 'rn-dashed-circular-indicator';

const Chart = () => {
  return (
    <View style={{flex: 1}}>
      <DashedCircularIndicator
        selectedValue={230}
        maxValue={500}
        radius={60}
        strokeWidth={12}
        label={'Cal Left'}
        labelFontSize={12}
        textColor={'#fff'}
        backgroundColor={'#9AC3FE'}
        activeStrokeColor={'#C58BF2'}
        withGradient={false}
        anticlockwise={true}
      />
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({});
