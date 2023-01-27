import {
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  Animated,
  View,
} from 'react-native';
import React, {useState, useRef} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Toggle from 'react-native-toggle-element';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const WorkoutTracker = ({navigation}) => {
  const [FullBodyWorkout, setFullBodyWorkout] = useState(true);
  const [UpperBodyWorkOut, setUpperBodyWorkOut] = useState(false);

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
          <Text style={styles.MainText}>Workout Tracker</Text>
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
            source={require('./../assets/Graphworkout.png')}
            style={{
              width: '90%',
              height: 200,
              resizeMode: 'stretch',
              alignSelf: 'center',
            }}
          />
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
                onPress={() => navigation.navigate('FullBodyWorkout')}>
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
            <Text style={styles.heading}>Upcoming Workout</Text>
            <TouchableOpacity>
              <Text style={styles.upWorkoutseeMore}>See more</Text>
            </TouchableOpacity>
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
                  <Text style={styles.upcomingWorkouttime}>Today, 03:00pm</Text>
                </View>
              </View>
              <Toggle
                value={FullBodyWorkout}
                onPress={val => setFullBodyWorkout(val)}
                trackBarStyle={{
                  backgroundColor: FullBodyWorkout ? '#C58BF2' : '#ADA4A5',
                  height: 25,
                  borderColor: FullBodyWorkout ? '#C58BF2' : '#ADA4A5',
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
                  backgroundColor: UpperBodyWorkOut ? '#C58BF2' : '#ADA4A5',
                  height: 25,
                  borderColor: UpperBodyWorkOut ? '#C58BF2' : '#ADA4A5',
                }}
                trackBar={{width: 50, borderWidth: 4}}
                thumbButton={styles.toggleBtn}
                thumbStyle={{
                  backgroundColor: '#fff',
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.upWorkoutMainTextContainer}>
            <Text style={styles.heading}>What Do You Want to Train</Text>
          </View>

          <View style={styles.wantTrainContainer}>
            <View style={styles.wantTraintextContainer}>
              <Text style={styles.mainText}>Fullbody Workout</Text>
              <Text style={styles.subText}>11 Exercises | 32mins</Text>
              <TouchableOpacity
                style={styles.viewmorewantTrainbtn}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.wantTrainbtnText}>View More</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.wantTrainImgContainer}>
              <Image
                source={require('./../assets/wantTrainEllipse.png')}
                style={styles.wantTrainEllips}
              />
              <Image
                source={require('./../assets/wantTainTopImg.png')}
                style={styles.wantTrainImg}
              />
            </View>
          </View>

          <View style={styles.wantTrainContainer}>
            <View style={styles.wantTraintextContainer}>
              <Text style={styles.mainText}>Fullbody Workout</Text>
              <Text style={styles.subText}>11 Exercises | 32mins</Text>
              <TouchableOpacity
                style={styles.viewmorewantTrainbtn}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.wantTrainbtnText}>View More</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.wantTrainImgContainer}>
              <Image
                source={require('./../assets/wantTrainEllipse.png')}
                style={styles.wantTrainEllips}
              />
              <Image
                source={require('./../assets/wantTainTopImg2.png')}
                style={styles.wantTrainImg}
              />
            </View>
          </View>

          <View style={styles.wantTrainContainer}>
            <View style={styles.wantTraintextContainer}>
              <Text style={styles.mainText}>Fullbody Workout</Text>
              <Text style={styles.subText}>11 Exercises | 32mins</Text>
              <TouchableOpacity
                style={styles.viewmorewantTrainbtn}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.wantTrainbtnText}>View More</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.wantTrainImgContainer, {marginRight: 10}]}>
              <Image
                source={require('./../assets/wantTrainEllipse.png')}
                style={styles.wantTrainEllips}
              />
              <Image
                source={require('./../assets/Ab-Workout1.png')}
                style={[styles.wantTrainImg, {width: 140}]}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default WorkoutTracker;

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
  },
  MainText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  whitebgContainer: {
    backgroundColor: '#fff',
    width: '100%',
    marginTop: 300,
    paddingVertical: 15,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  checkContainer: {
    backgroundColor: '#eaf0ff',
    width: windowWidth - 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    paddingRight: 20,
    alignSelf: 'center',
    marginTop: 30,
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
    alignSelf: 'center',
  },
  upWorkoutMainTextContainer: {
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between',
  },
  heading: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  upWorkoutseeMore: {
    color: '#ADA4A5',
  },
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
  wantTrainContainer: {
    width: windowWidth - 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#eaf0ff',
    borderRadius: 20,
    alignSelf: 'center',
    marginVertical: 10,
  },
  wantTraintextContainer: {
    paddingVertical: 30,
    paddingLeft: 30,
  },
  wantTrainImgContainer: {
    marginRight: 40,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  wantTrainEllips: {
    width: 110,
    height: 110,
    marginTop: 10,
    position: 'absolute',
  },
  wantTrainImg: {
    width: 100,
    height: 120,
    resizeMode: 'stretch',
  },
  mainText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subText: {
    color: '#7B6F72',
    marginTop: 5,
    fontSize: 12,
  },
  viewmorewantTrainbtn: {
    width: '70%',
    marginTop: 20,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 30,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  wantTrainbtnText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#92A3FD',
  },
});
