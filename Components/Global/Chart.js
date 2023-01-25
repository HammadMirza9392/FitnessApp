import {ScrollView, StyleSheet, Dimensions, Text, View} from 'react-native';
import React from 'react';
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph';

const Chart = () => {
  const data = [{value: 40}, {value: 80}, {value: 90}, {value: 70}];

  return (
    <ScrollView style={{backgroundColor: 'gray'}}>
      <VerticalBarGraph
        data={[20, 45, 28, 80, 99, 43, 50]}
        labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
        width={Dimensions.get('window').width - 90}
        height={200}
        barRadius={5}
        barWidthPercentage={0.65}
        barColor="#53ae31"
        baseConfig={{
          hasXAxisBackgroundLines: false,
          xAxisLabelStyle: {
            position: 'left',
          },
        }}
        style={{
          marginBottom: 30,
          padding: 10,
          paddingTop: 20,
          borderRadius: 20,
          backgroundColor: `#dff4d7`,
          width: Dimensions.get('window').width - 70,
        }}
      />
    </ScrollView>
  );
};

export default Chart;

const styles = StyleSheet.create({});
