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
import LinearGradient from 'react-native-linear-gradient';
import * as Progress from 'react-native-progress';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.topHeaderContainer}>
          <View style={{margin: 20, marginTop: 40}}>
            <Text style={styles.welcomeText}>Welcome Back,</Text>
            <Text style={styles.userName}>Stefani Wong</Text>
          </View>
          <View style={{margin: 20, marginTop: 40}}>
            <Image
              source={require('./../assets/Notification.png')}
              style={styles.notificationIcon}
            />
          </View>
        </View>

        <View style={styles.bannerContainer}>
          <Image
            source={require('./../assets/Banner.png')}
            style={styles.topBanner}
          />
          <View style={styles.bannertextContainer}>
            <Text style={styles.mainText}>BMI (Body Mass Index)</Text>
            <Text style={styles.subText}>You have a normal weight</Text>
            <TouchableOpacity
              style={styles.viewmorebannerbtn}
              onPress={() => navigation.navigate('Login')}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#EEA4CE', '#C58BF2']}
                style={styles.bannerbtn}>
                <Text style={styles.bannerbtnText}>View More</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.bannerImgContainer}>
            <Image
              source={require('./../assets/Banner-Pie.png')}
              style={styles.pieImg}
            />
          </View>
        </View>

        <View style={styles.checkContainer}>
          <View>
            <Text style={styles.targetText}>Today Target</Text>
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

        <View style={styles.headingContainer}>
          <Text style={[styles.heading, {marginLeft: 30}]}>
            Activity Status
          </Text>
          <Image
            source={require('./../assets/Status.png')}
            style={{width: '100%', height: 160, marginVertical: 10}}
          />
        </View>

        <View style={styles.intakeSleepContainer}>
          <View style={styles.waterIntakeContainer}>
            <View>
              <Progress.Bar
                progress={0.7}
                unfilledColor={'#F7F8F8'}
                color={'#C58BF2'}
                borderWidth={0}
                height={25}
                width={450}
                style={{
                  transform: [{rotate: '-90deg'}],
                  marginTop: 200,
                  borderRadius: 30,
                  position: 'absolute',
                  left: -200,
                }}
              />
            </View>
            <View style={{marginLeft: 45}}>
              <Text style={styles.InnerTopHeading}>Water Intake</Text>
              <Text style={styles.InnerSubHeading}>4 Liters</Text>

              <Text style={{color: 'gray'}}>Real time updates</Text>

              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 20,
                }}>
                <Image
                  source={require('./../assets/Real-Time-Updates-Progress.png')}
                  style={{
                    marginTop: 10,
                    marginLeft: 0,
                    width: '30%',
                    height: 290,
                    resizeMode: 'contain',
                    // backgroundColor: 'red',
                  }}
                />
                <View>
                  <Text style={{color: 'gray'}}>6am - 8am</Text>
                  <Text
                    style={{
                      color: '#C58BF2',
                      fontWeight: '500',
                      marginBottom: 30,
                    }}>
                    600ml
                  </Text>

                  <Text style={{color: 'gray'}}>6am - 8am</Text>
                  <Text
                    style={{
                      color: '#C58BF2',
                      fontWeight: '500',
                      marginBottom: 30,
                    }}>
                    600ml
                  </Text>

                  <Text style={{color: 'gray'}}>6am - 8am</Text>
                  <Text
                    style={{
                      color: '#C58BF2',
                      fontWeight: '500',
                      marginBottom: 30,
                    }}>
                    600ml
                  </Text>

                  <Text style={{color: 'gray'}}>6am - 8am</Text>
                  <Text
                    style={{
                      color: '#C58BF2',
                      fontWeight: '500',
                      marginBottom: 30,
                    }}>
                    600ml
                  </Text>

                  <Text style={{color: 'gray'}}>6am - 8am</Text>
                  <Text
                    style={{
                      color: '#C58BF2',
                      fontWeight: '500',
                      marginBottom: 30,
                    }}>
                    600ml
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.SleepContainer}>
            <View style={styles.SleepInnerContainer}>
              <Text style={styles.InnerTopHeading}>Water Intake</Text>
              <Text style={styles.InnerSubHeading}>4 Liters</Text>
              <Image
                source={require('./../assets/Sleep-Graph.png')}
                style={{
                  width: '100%',
                  resizeMode: 'stretch',
                  height: 120,
                }}
              />
            </View>
            <View style={styles.CaloriesContainer}>
              <Text style={styles.InnerTopHeading}>Water Intake</Text>
              <Text style={styles.InnerSubHeading}>4 Liters</Text>
              <Image
                source={require('./../assets/Calories-Pie.png')}
                style={{
                  width: '100%',
                  resizeMode: 'stretch',
                  height: 120,
                }}
              />
            </View>
          </View>
        </View>

        <View style={styles.headingContainer}>
          <Text style={[styles.heading, {marginLeft: 30}]}>
            Workout Progress
          </Text>
          <Image
            source={require('./../assets/GraphHome.png')}
            style={{
              // width: '90%',
              height: 180,
              alignSelf: 'center',
              resizeMode: 'contain',
              marginTop: 20,
            }}
          />
        </View>

        <View style={styles.headingContainer}>
          <Text style={[styles.heading, {marginLeft: 30}]}>Latest Workout</Text>
        </View>
        <View style={{width: windowWidth - 20, margin: 10}}>
          <View style={styles.ActivityContainer}>
            <View>
              <Image
                source={require('./../assets/Workout-PicHome.png')}
                style={styles.ActivityImg}
              />
            </View>
            <View style={{marginHorizontal: 15}}>
              <Text numberOfLines={1} style={styles.ActivityHeading}>
                Fullbody Workout
              </Text>
              <Text style={styles.ActivityTime}>
                180 Calories Burn | 20minutes
              </Text>
              <Progress.Bar
                progress={0.3}
                unfilledColor={'#F7F8F8'}
                color={'#C58BF2'}
                borderWidth={0}
                width={230}
                height={12}
                style={{
                  // transform: [{rotate: '-90deg'}],
                  marginTop: 10,
                  borderRadius: 30,

                  //// position: 'absolute',
                  // left: 5,
                }}
              />
            </View>
            <View style={{position: 'absolute', right: 10}}>
              <Image
                source={require('./../assets/Workout-Btn.png')}
                style={styles.ActivityImgMore}
              />
            </View>
          </View>

          <View style={styles.ActivityContainer}>
            <View>
              <Image
                source={require('./../assets/Workout-PicHome2.png')}
                style={styles.ActivityImg}
              />
            </View>
            <View style={{marginHorizontal: 15}}>
              <Text numberOfLines={1} style={styles.ActivityHeading}>
                Lowerbody Workout
              </Text>
              <Text style={styles.ActivityTime}>
                200 Calories Burn | 30minutes
              </Text>
              <Progress.Bar
                progress={0.8}
                unfilledColor={'#F7F8F8'}
                color={'#C58BF2'}
                borderWidth={0}
                width={230}
                height={12}
                style={{
                  // transform: [{rotate: '-90deg'}],
                  marginTop: 10,
                  borderRadius: 30,

                  //// position: 'absolute',
                  // left: 5,
                }}
              />
            </View>
            <View style={{position: 'absolute', right: 10}}>
              <Image
                source={require('./../assets/Workout-Btn.png')}
                style={styles.ActivityImgMore}
              />
            </View>
          </View>

          <View style={styles.ActivityContainer}>
            <View>
              <Image
                source={require('./../assets/Workout-PicHome3.png')}
                style={styles.ActivityImg}
              />
            </View>
            <View style={{marginHorizontal: 15}}>
              <Text numberOfLines={1} style={styles.ActivityHeading}>
                Ab Workout
              </Text>
              <Text style={styles.ActivityTime}>
                180 Calories Burn | 20minutes
              </Text>
              <Progress.Bar
                progress={0.5}
                unfilledColor={'#F7F8F8'}
                color={'#C58BF2'}
                borderWidth={0}
                width={230}
                height={12}
                style={{
                  // transform: [{rotate: '-90deg'}],
                  marginTop: 10,
                  borderRadius: 30,

                  //// position: 'absolute',
                  // left: 5,
                }}
              />
            </View>
            <View style={{position: 'absolute', right: 10}}>
              <Image
                source={require('./../assets/Workout-Btn.png')}
                style={styles.ActivityImgMore}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  topHeaderContainer: {
    flexDirection: 'row',
    width: windowWidth - 10,
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  welcomeText: {
    color: '#ADA4A5',
    fontSize: 16,
  },
  userName: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  },
  notificationIcon: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  bannerContainer: {
    width: windowWidth - 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  topBanner: {
    width: '100%',
    height: 220,
    resizeMode: 'stretch',
    position: 'absolute',
    top: 0,
  },
  pieImg: {
    width: 120,
    height: 120,
  },
  bannertextContainer: {
    paddingVertical: 50,
    paddingLeft: 50,
  },
  bannerImgContainer: {
    paddingTop: 40,
    marginRight: 40,
  },
  mainText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  subText: {
    color: '#fff',
    marginTop: 5,
  },
  viewmorebannerbtn: {
    width: '70%',
    marginTop: 20,
  },
  bannerbtn: {
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 30,
    paddingVertical: 10,
  },
  bannerbtnText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  checkContainer: {
    backgroundColor: '#C3CEFE',
    width: windowWidth - 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    paddingRight: 20,
    alignSelf: 'center',
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
  headingContainer: {
    margin: 10,
    marginVertical: 20,
  },
  heading: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
  },
  intakeSleepContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    width: windowWidth - 20,
    alignSelf: 'center',
    //justifyContent: 'space-between',
  },
  waterIntakeContainer: {
    backgroundColor: '#fff',
    shadowColor: '#838383',
    elevation: 4,
    flexDirection: 'row',
    padding: 10,
    paddingTop: 20,
    borderRadius: 10,
    width: '50%',
  },
  SleepContainer: {
    flexDirection: 'column',
    width: '46%',
    marginLeft: 10,
  },
  SleepInnerContainer: {
    backgroundColor: '#fff',
    shadowColor: '#838383',
    elevation: 4,
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  CaloriesContainer: {
    backgroundColor: '#fff',
    shadowColor: '#838383',
    elevation: 4,
    padding: 20,
    borderRadius: 10,
  },
  InnerTopHeading: {
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
  },
  InnerSubHeading: {
    color: '#92A3FD',
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  ActivityContainer: {
    width: '98%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    shadowColor: '#838383',
    elevation: 3,
    backgroundColor: '#fff',
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 15,
    paddingBottom: 20,
    alignSelf: 'center',
  },
  ActivityImg: {
    width: 50,
    height: 50,
  },
  ActivityHeading: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
    width: '80%',
  },
  ActivityTime: {
    color: 'gray',
  },
  ActivityImgMore: {
    width: 25,
    height: 25,
  },
});
