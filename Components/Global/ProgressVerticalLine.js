import {StyleSheet, Dimensions, Text, View} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';

const windowWidth = Dimensions.get('window').width;

const ProgressVerticalLine = () => {
  return (
    <View style={styles.progressBarContainer}>
      <Progress.Bar
        progress={0.3}
        unfilledColor={'#F7F8F8'}
        color={'#92A3FD'}
        borderWidth={0}
        height={30}
        style={{
          transform: [{rotate: '-90deg'}],
          marginTop: 80,
          borderRadius: 30,
          position: 'absolute',
          left: -40,
        }}
      />
      <Text style={{color: '#000', position: 'absolute', left: 20, bottom: 10}}>
        Sun
      </Text>
      <Progress.Bar
        progress={0.7}
        unfilledColor={'#F7F8F8'}
        color={'#C58BF2'}
        borderWidth={0}
        height={30}
        style={{
          transform: [{rotate: '-90deg'}],
          marginTop: 80,
          borderRadius: 30,
          position: 'absolute',
          left: 5,
        }}
      />
      <Text style={{color: '#000', position: 'absolute', left: 65, bottom: 10}}>
        Mon
      </Text>
      <Progress.Bar
        progress={0.4}
        unfilledColor={'#F7F8F8'}
        color={'#92A3FD'}
        borderWidth={0}
        height={30}
        style={{
          transform: [{rotate: '-90deg'}],
          marginTop: 80,
          borderRadius: 30,
          position: 'absolute',
          left: 50,
        }}
      />
      <Text
        style={{
          color: '#000',
          position: 'absolute',
          left: 110,
          bottom: 10,
        }}>
        Tue
      </Text>
      <Progress.Bar
        progress={0.6}
        unfilledColor={'#F7F8F8'}
        color={'#C58BF2'}
        borderWidth={0}
        height={30}
        style={{
          transform: [{rotate: '-90deg'}],
          marginTop: 80,
          borderRadius: 30,
          position: 'absolute',
          left: 95,
        }}
      />
      <Text
        style={{
          color: '#000',
          position: 'absolute',
          left: 155,
          bottom: 10,
        }}>
        Wed
      </Text>
      <Progress.Bar
        progress={0.8}
        unfilledColor={'#F7F8F8'}
        color={'#92A3FD'}
        borderWidth={0}
        height={30}
        style={{
          transform: [{rotate: '-90deg'}],
          marginTop: 80,
          borderRadius: 30,
          position: 'absolute',
          left: 140,
        }}
      />
      <Text
        style={{
          color: '#000',
          position: 'absolute',
          left: 202,
          bottom: 10,
        }}>
        Thu
      </Text>
      <Progress.Bar
        progress={0.3}
        unfilledColor={'#F7F8F8'}
        color={'#C58BF2'}
        borderWidth={0}
        height={30}
        style={{
          transform: [{rotate: '-90deg'}],
          marginTop: 80,
          borderRadius: 30,
          position: 'absolute',
          left: 185,
        }}
      />
      <Text
        style={{
          color: '#000',
          position: 'absolute',
          left: 250,
          bottom: 10,
        }}>
        Fri
      </Text>

      <Progress.Bar
        progress={0.6}
        unfilledColor={'#F7F8F8'}
        color={'#92A3FD'}
        borderWidth={0}
        height={30}
        style={{
          transform: [{rotate: '-90deg'}],
          marginTop: 80,
          borderRadius: 30,
          position: 'absolute',
          left: 230,
        }}
      />
      <Text
        style={{
          color: '#000',
          position: 'absolute',
          left: 295,
          bottom: 10,
        }}>
        Sat
      </Text>
    </View>
  );
};

export default ProgressVerticalLine;

const styles = StyleSheet.create({
  progressBarContainer: {
    backgroundColor: '#fff',
    padding: 10,
    shadowColor: '#838383',
    elevation: 9,
    height: 200,
    width: windowWidth - 50,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    //  backgroundColor: 'red',
  },
});
