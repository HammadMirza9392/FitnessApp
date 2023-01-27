import {
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ProgressCircle from 'react-native-progress-circle';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const OnBoarding4 = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <Image
          source={require('./../assets/onboarding4.png')}
          style={styles.TopImage}
        />

        <View style={styles.ContentContainer}>
          <Text style={styles.heading}>Improve Sleep Quality</Text>
          <Text style={styles.content}>
            Improve the quality of your sleep with us, good quality sleep can
            bring a good mood in the morning
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.bottombtnMainContainer}
        onPress={() => navigation.navigate('SignUp')}>
        <ProgressCircle
          percent={100}
          radius={40}
          borderWidth={4}
          color="#92A3FD"
          shadowColor="#fff"
          containerStyle={{borderWidth: 4, borderColor: '#fff'}}
          bgColor="#92A3FD">
          <Image
            source={require('./../assets/Arrow-Right2.png')}
            style={styles.bottomIcon}
          />
        </ProgressCircle>
      </TouchableOpacity>
    </View>
  );
};

export default OnBoarding4;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  TopImage: {
    width: windowWidth,
    height: windowHeight / 1.9,
    resizeMode: 'stretch',
  },
  ContentContainer: {
    width: windowWidth - 60,
    alignSelf: 'center',
    marginVertical: 60,
  },
  heading: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  },
  content: {
    color: '#7B6F72',
    margin: 20,
    marginLeft: 0,
  },
  bottombtnMainContainer: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  bottomIcon: {
    width: 30,
    height: 30,
  },
});
