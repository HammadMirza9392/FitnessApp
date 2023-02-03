import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Dot = ({bgColor, borderColor}) => {
  return (
    <View style={[styles.mainContainer, {borderColor: borderColor}]}>
      <View
        style={{
          height: 14,
          width: 14,
          backgroundColor: bgColor,
          borderRadius: 60,
        }}></View>
    </View>
  );
};

export default Dot;

const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 2,
    backgroundColor: '#fff',
    borderRadius: 90,
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    zIndex: 1,
  },
});
