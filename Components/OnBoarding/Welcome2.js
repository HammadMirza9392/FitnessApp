import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Welcome2 = ({navigation}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#9DCEFF', '#92A3FD']}
      style={styles.mainContainer}>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>Fitnest</Text>
        <Text style={styles.mainTextheight}>X</Text>
      </View>
      <Text style={styles.bottomText}>Everybody Can Train</Text>

      <TouchableOpacity
        style={styles.gradientButtonContainer}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Welcome2;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    color: '#fff',
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
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 30,
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    color: '#92A3FD',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
});
