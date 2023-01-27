import {
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import YouNeedItems from '../Global/YouNeedItems';
import Exercise from '../Global/Exercise';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FullBodyWorkout = ({navigation}) => {
  return (
    <View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#9DCEFF', '#92A3FD']}
        style={styles.linearGradientTop}>
        <View style={styles.TopHeader}>
          <Image
            source={require('./../assets/Back-Navs.png')}
            style={{width: 40, height: 40}}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate('FinishedWorkout')}>
            <Image
              source={require('./../assets/Detail-Navs.png')}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={require('./../assets/fullbodyVector.png')}
            style={{
              width: '85%',
              height: 400,
              alignSelf: 'center',
            }}
          />
        </View>
      </LinearGradient>
      <ScrollView>
        <View style={styles.whitebgContainer}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Fullbody Workout</Text>
            <Text style={styles.subheading}>
              11 Exercises | 32mins | 320 Calories Burn
            </Text>
          </View>

          <TouchableOpacity
            style={[styles.workDityContainer, {backgroundColor: '#eaefff'}]}>
            <View style={styles.workDityInnerContainer}>
              <Image
                source={require('./../assets/Calendar.png')}
                style={styles.workDityIcon}
              />
              <Text style={styles.workDityText}>Schedule Workout</Text>
            </View>
            <View style={styles.workDityInnerContainer}>
              <Text style={styles.workDityText}>5/27, 09:00 AM</Text>
              <Image
                source={require('./../assets/Icon-Arrow.png')}
                style={styles.workDityIcon}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.workDityContainer, {backgroundColor: '#f6e9fa'}]}>
            <View style={styles.workDityInnerContainer}>
              <Image
                source={require('./../assets/Swap.png')}
                style={{height: 20, width: 20}}
              />
              <Text style={styles.workDityText}>Difficulity</Text>
            </View>
            <View style={styles.workDityInnerContainer}>
              <Text style={styles.workDityText}>Beginner</Text>
              <Image
                source={require('./../assets/Icon-Arrow.png')}
                style={styles.workDityIcon}
              />
            </View>
          </TouchableOpacity>

          <View
            style={[
              styles.headingContainer,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              },
            ]}>
            <Text style={styles.heading}>You’ll Need</Text>

            <Text style={styles.itemCountText}>5 items</Text>
          </View>

          <YouNeedItems />

          <View
            style={[
              styles.headingContainer,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              },
            ]}>
            <Text style={styles.heading}>Exercises</Text>

            <Text style={styles.itemCountText}>3 Sets</Text>
          </View>

          <View style={[styles.headingContainer]}>
            <Text style={{fontSize: 16, color: '#000'}}>set 1</Text>
          </View>

          <Exercise />

          <View style={[styles.headingContainer]}>
            <Text style={{fontSize: 16, color: '#000'}}>set 2</Text>
          </View>
          <Exercise />

          <TouchableOpacity
            style={styles.gradientButtonContainer}
            onPress={() => navigation.navigate('Workout')}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#9DCEFF', '#92A3FD']}
              style={styles.linearGradient}>
              <Text style={styles.buttonText}>Start Workout</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default FullBodyWorkout;

const styles = StyleSheet.create({
  linearGradientTop: {
    height: windowHeight,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  TopHeader: {
    width: windowWidth - 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    marginBottom: 0,
  },
  whitebgContainer: {
    backgroundColor: '#fff',
    width: '100%',
    marginTop: 350,
    paddingVertical: 15,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  headingContainer: {
    margin: 20,
  },
  heading: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
  },
  subheading: {
    color: '#7B6F72',
  },
  workDityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth - 30,
    alignSelf: 'center',
    padding: 20,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginVertical: 10,
  },
  workDityInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  workDityIcon: {
    width: 25,
    height: 25,
  },
  workDityText: {
    color: '#90878c',
    marginHorizontal: 10,
  },
  itemCountText: {
    color: '#ADA4A5',
  },
  gradientButtonContainer: {
    width: windowWidth - 80,
    marginVertical: 20,
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
