import {
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
const windowWidth = Dimensions.get('window').width;

const FinishedWorkout = ({navigation}) => {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.bodyContainer}>
        <Image
          source={require('./../assets/completeWorkout.png')}
          style={styles.topImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.mainText}>
            Congratulations, You Have Finished Your Workout
          </Text>
          <Text style={styles.subText}>
            Exercises is king and nutrition is queen. Combine the two and you
            will have a kingdom
          </Text>
          <Text style={styles.subText}>-Jack Lalanne</Text>
        </View>
        <TouchableOpacity
          style={styles.gradientButtonContainer}
          onPress={() => navigation.navigate('WorkoutTracker')}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#9DCEFF', '#92A3FD']}
            style={styles.linearGradient}>
            <Text style={styles.buttonText}>Back To Home</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default FinishedWorkout;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bodyContainer: {
    alignItems: 'center',
  },
  topImage: {
    marginTop: 50,
  },
  textContainer: {
    marginVertical: 20,
  },
  mainText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  subText: {
    color: '#000',
    width: windowWidth - 70,
    textAlign: 'center',
    marginTop: 20,
  },
  gradientButtonContainer: {
    width: windowWidth - 80,
    marginTop: 80,
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 30,
    paddingVertical: 10,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
