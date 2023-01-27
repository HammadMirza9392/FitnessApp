import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Splash1 = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>Fitnest</Text>
        <Text style={styles.mainTextheight}>X</Text>
      </View>
      <Text style={styles.bottomText}>Everybody Can Train</Text>
      <TouchableOpacity
        style={styles.gradientButtonContainer}
        onPress={() => navigation.navigate('Splash2')}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#9DCEFF', '#92A3FD']}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>Get Started</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Splash1;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  mainTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 43,
    fontWeight: 'bold',
    color: '#000',
  },
  mainTextheight: {
    fontSize: 55,
    color: '#92A3FD',
    fontWeight: 'bold',
  },
  bottomText: {
    color: '#7B6F72',
    fontSize: 18,
    marginBottom: 40,
  },
  gradientButtonContainer: {
    position: 'absolute',
    width: '80%',
    bottom: 40,
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 30,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
