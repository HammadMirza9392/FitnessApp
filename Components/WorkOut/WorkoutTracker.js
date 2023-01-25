import {
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Toggle from 'react-native-toggle-element';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const WorkoutTracker = () => {
  const [FullBodyWorkout, setFullBodyWorkout] = useState(true);
  const [UpperBodyWorkOut, setUpperBodyWorkOut] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.bodyContainer}>
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
            <Text style={styles.MainText}>Workout Tracker</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('FinishedWorkout')}>
              <Image
                source={require('./../assets/Detail-Navs.png')}
                style={{width: 40, height: 40}}
              />
            </TouchableOpacity>
          </View>
        </LinearGradient>

        <View style={styles.whitebgContainer}>
          <ScrollView>
            <View style={styles.checkContainer}>
              <View>
                <Text style={styles.targetText}>Daily Workout Schedule</Text>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.checktargetbtnContainer}
                  onPress={() => navigation.navigate('Login')}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#9DCEFF', '#92A3FD']}
                    style={styles.checktargetbtn}>
                    <Text style={styles.checktargetbtnText}>Check</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.upWorkoutMainTextContainer}>
              <Text>Upcoming Workout</Text>
              <Text>See more</Text>
            </View>
            <View style={styles.upcomingWorkoutContainer}>
              <TouchableOpacity style={styles.upcomingWorkoutContent}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={require('./../assets/Workout-Pic.png')}
                    style={styles.upcomingWorkoutContentImg}
                  />
                  <View>
                    <Text style={styles.upcomingWorkoutmainTxt}>
                      Fullbody Workout
                    </Text>
                    <Text style={styles.upcomingWorkouttime}>
                      Today, 03:00pm
                    </Text>
                  </View>
                </View>
                <Toggle
                  value={FullBodyWorkout}
                  onPress={val => setFullBodyWorkout(val)}
                  trackBarStyle={{
                    backgroundColor: FullBodyWorkout ? '#C58BF2' : 'gray',
                    height: 25,
                    borderColor: FullBodyWorkout ? '#C58BF2' : 'gray',
                  }}
                  trackBar={{width: 50, borderWidth: 4}}
                  thumbButton={styles.toggleBtn}
                  thumbStyle={{
                    backgroundColor: '#fff',
                  }}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.upcomingWorkoutContainer}>
              <TouchableOpacity style={styles.upcomingWorkoutContent}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={require('./../assets/Workout-Pic2.png')}
                    style={styles.upcomingWorkoutContentImg}
                  />
                  <View>
                    <Text style={styles.upcomingWorkoutmainTxt}>
                      Upperbody Workout
                    </Text>
                    <Text style={styles.upcomingWorkouttime}>
                      June 05, 02:00pm
                    </Text>
                  </View>
                </View>
                <Toggle
                  value={UpperBodyWorkOut}
                  onPress={val => setUpperBodyWorkOut(val)}
                  trackBarStyle={{
                    backgroundColor: UpperBodyWorkOut ? '#C58BF2' : 'gray',
                    height: 25,
                    borderColor: UpperBodyWorkOut ? '#C58BF2' : 'gray',
                  }}
                  trackBar={{width: 50, borderWidth: 4}}
                  thumbButton={styles.toggleBtn}
                  thumbStyle={{
                    backgroundColor: '#fff',
                  }}
                />
              </TouchableOpacity>
            </View>

            <Text style={{color: '#000', fontSize: 20, margin: 20}}>HELLO</Text>
            <Text style={{color: '#000', fontSize: 20, margin: 20}}>HELLO</Text>
            <Text style={{color: '#000', fontSize: 20, margin: 20}}>HELLO</Text>
            <Text style={{color: '#000', fontSize: 20, margin: 20}}>HELLO</Text>
            <Text style={{color: '#000', fontSize: 20, margin: 20}}>HELLO</Text>
            <Text style={{color: '#000', fontSize: 20, margin: 20}}>HELLO</Text>
            <Text style={{color: '#000', fontSize: 20, margin: 20}}>HELLO</Text>
            <Text style={{color: '#000', fontSize: 20, margin: 20}}>HELLO</Text>
            <Text style={{color: '#000', fontSize: 20, margin: 20}}>HELLO</Text>
            <Text style={{color: '#000', fontSize: 20, margin: 20}}>HELLO</Text>
            <Text style={{color: '#000', fontSize: 20, margin: 20}}>HELLO</Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default WorkoutTracker;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  bodyContainer: {
    alignItems: 'center',
    height: windowHeight,
  },
  linearGradientTop: {
    height: windowHeight,
    position: 'absolute',
    top: 0,
  },
  TopHeader: {
    width: windowWidth - 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  MainText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  whitebgContainer: {
    backgroundColor: '#fff',
    width: '100%',
    marginTop: 150,
    paddingVertical: 20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: 'center',
  },
  checkContainer: {
    backgroundColor: '#C3CEFE',
    width: windowWidth - 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    paddingRight: 20,
  },
  targetText: {
    color: '#000',
    fontSize: 18,
    margin: 20,
  },
  checktargetbtnContainer: {
    width: '80%',
    margin: 20,
  },
  checktargetbtn: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 30,
    paddingVertical: 8,
  },
  checktargetbtnText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
  },
  upcomingWorkoutContainer: {
    shadowColor: '#838383',
    elevation: 9,
    backgroundColor: '#fff',
    width: windowWidth - 30,
    padding: 30,
    marginVertical: 10,
    marginHorizontal: 4,
    borderRadius: 20,
  },
  upWorkoutMainTextContainer: {},
  upcomingWorkoutContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  upcomingWorkoutContentImg: {
    height: 50,
    width: 50,
  },
  upcomingWorkoutmainTxt: {
    color: '#7B6F72',
    fontSize: 16,
    marginHorizontal: 15,
    fontWeight: 'bold',
  },
  upcomingWorkouttime: {
    color: '#7B6F72',
    fontSize: 12,
    marginHorizontal: 15,
  },
  toggleCOntainer: {
    backgroundColor: '#C58BF2',
    height: 25,
    borderColor: '#C58BF2',
  },
  toggleBtn: {
    width: 25,
    height: 25,
    radius: 20,
  },
});
