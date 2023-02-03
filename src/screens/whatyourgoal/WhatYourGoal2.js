import {
  StyleSheet,
  ScrollView,
  Dimensions,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const windowWidth = Dimensions.get('window').width;
import LinearGradient from 'react-native-linear-gradient';

const WhatYourGoal2 = ({navigation}) => {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.bodyContainer}>
        <View style={styles.TopTextContainer}>
          <Text style={styles.mainText}>What is your Goal ?</Text>
          <Text style={styles.subText}>
            It will help us to choose a best program for you
          </Text>
        </View>

        <View style={styles.middleCardContainer}>
          <Image
            source={require('./../../assets/Card-Goals-1.png')}
            style={styles.leftImg}
          />
          <Image
            source={require('./../../assets/Card-Goals-3.png')}
            style={styles.rightImg}
          />
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#9DCEFF', '#92A3FD']}
            style={styles.middleMainContainer}>
            <Image
              source={require('./../../assets/whatisyourgoal2.png')}
              style={{alignSelf: 'center'}}
            />

            <View style={styles.bottomTextContainer}>
              <Text style={styles.bottomMainText}>Lean & Tone</Text>
              <View style={styles.horzintalLine}></View>
              <Text style={styles.bottomSubText}>
                I’m “skinny fat”. look thin but have no shape. I want to add
                learn muscle in the right way
              </Text>
            </View>
          </LinearGradient>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.confirmbtnContainer}
          onPress={() => navigation.navigate('WhatYourGoal3')}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#9DCEFF', '#92A3FD']}
            style={styles.confirmbtn}>
            <Text style={styles.buttonText}>Confirm</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default WhatYourGoal2;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bodyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  TopTextContainer: {
    marginTop: 30,
    marginBottom: 50,
    width: windowWidth - 150,
  },
  mainText: {
    color: '#000',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  subText: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 5,
  },
  middleCardContainer: {
    width: '100%',
  },
  leftImg: {
    position: 'absolute',
    left: 0,
    top: '10%',
    bottom: '10%',
  },
  rightImg: {
    position: 'absolute',
    right: 0,
    top: '10%',
    bottom: '10%',
  },
  middleMainContainer: {
    width: windowWidth - 120,
    alignSelf: 'center',
    padding: 20,
    borderRadius: 20,
  },
  bottomTextContainer: {
    width: '90%',
    marginVertical: 20,
    alignSelf: 'center',
  },
  bottomMainText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
  horzintalLine: {
    width: '30%',
    borderTopWidth: 1,
    alignSelf: 'center',
    borderTopColor: '#fff',
    marginTop: 5,
    marginBottom: 20,
  },
  bottomSubText: {
    textAlign: 'center',
    color: '#fff',
  },
  confirmbtnContainer: {
    width: windowWidth - 80,
    marginTop: 60,
    alignSelf: 'center',
    marginBottom: 20,
  },
  confirmbtn: {
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
