import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Dot = () => {
  return (
    <View style={styles.mainContgainer}>
      <View
        style={{
          height: 14,
          width: 14,
          backgroundColor: '#C58BF2',
          borderRadius: 60,
        }}></View>
    </View>
  );
};

export default Dot;

const styles = StyleSheet.create({
  mainContgainer: {
    borderColor: '#C58BF2',
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
