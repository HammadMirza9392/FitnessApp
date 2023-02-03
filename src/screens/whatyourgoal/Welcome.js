import {
  StyleSheet,
  ScrollView,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
const windowWidth = Dimensions.get('window').width;

const Welcome = ({navigation}) => {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.bodyContainer}>
        <Image
          source={require('./../../assets/Group.png')}
          style={{marginTop: 80}}
        />
        <View style={{alignItems: 'center', marginVertical: 60}}>
          <Text style={styles.topText}>Welcome, Stefani</Text>
          <Text style={styles.topBottomText}>
            You are all set now, let’s reach your goals together with us
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.gradientButtonContainer}
        onPress={() => navigation.navigate('BottomNavigation')}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#9DCEFF', '#92A3FD']}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>Go To Home</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bodyContainer: {
    alignItems: 'center',
  },
  topText: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  topBottomText: {
    color: '#7B6F72',
    fontSize: 16,
    width: windowWidth - 150,
    textAlign: 'center',
  },
  gradientButtonContainer: {
    width: windowWidth - 80,
    marginTop: 140,
    marginBottom: 20,
    alignSelf: 'center',
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
