import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';
import Dot from '../Global/Dot';
import {WheelPicker} from 'react-native-wheel-picker-android';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

let temp;

const Workout = ({navigation}) => {
  const [selectedTime, setSelectedTime] = useState('');
  console.log(selectedTime);
  const wheelPickerData = [
    '🔥 450 Calories Burn 20 Times',
    '🔥 450 Calories Burn 21 Times',
    '🔥 450 Calories Burn 22 Times',
    '🔥 450 Calories Burn 23 Times',
    '🔥 450 Calories Burn 24 Times',
    '🔥 450 Calories Burn 25 Times',
    '🔥 450 Calories Burn 26 Times',
    '🔥 450 Calories Burn 27 Times',
    '🔥 450 Calories Burn 28 Times',
    '🔥 450 Calories Burn 29 Times',
    '🔥 450 Calories Burn 30 Times',
  ];
  const btnpress = () => {
    setSelectedTime(wheelPickerData[temp]);
    navigation.navigate('AddSchedule');
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.bodyContainer}>
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
        <View style={{height: 200, width: windowWidth - 30}}>
          <Video
            source={{
              uri: 'https://www.w3schools.com/html/mov_bbb.mp4',
            }}
            style={styles.backgroundVideo}
            controls={true}
            poster={
              'https://img.freepik.com/premium-psd/fitness-gym-training-facebook-cover-web-banner-psd-template_265396-140.jpg?w=2000'
            }
            posterResizeMode={'cover'}
            resizeMode="cover"
            paused={true}
          />
        </View>
        <View style={[styles.headingBox, {marginBottom: 30}]}>
          <Text style={styles.heading}>Jumping Jack</Text>
          <Text style={styles.subHeading}>Easy | 390 Calories Burn</Text>
        </View>

        <View style={styles.headingBox}>
          <Text style={styles.heading}>Descriptions</Text>
          <Text style={styles.subHeading}>
            A jumping jack, also known as a star jump and called a side-straddle
            hop in the US military, is a physical jumping exercise performed by
            jumping to a position with the legs spread wide Read More...
          </Text>
        </View>

        <View
          style={[
            styles.headingBox,
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
          ]}>
          <Text style={styles.heading}>How To Do It</Text>
          <Text style={styles.subHeading}>4 Steps</Text>
        </View>

        <View style={styles.setpsContainer}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#C58BF2', fontSize: 18}}>01</Text>
              <Dot bgColor="#C58BF2" borderColor="#C58BF2" />
            </View>
            <View
              style={{
                borderLeftColor: '#C58BF2',
                borderLeftWidth: 1,
                paddingLeft: 20,
                borderStyle: 'dashed',
                zIndex: -1,
                marginLeft: -13,
              }}>
              <Text style={styles.innerHeading}>Spread Your Arms</Text>
              <Text style={styles.innerContent}>
                To make the gestures feel more relaxed, stretch your arms as you
                start this movement. No bending of hands.
              </Text>
            </View>
          </View>
        </View>

        <View style={[styles.setpsContainer, {marginTop: -10}]}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#C58BF2', fontSize: 18}}>02</Text>
              <Dot bgColor="#C58BF2" borderColor="#C58BF2" />
            </View>
            <View
              style={{
                borderLeftColor: '#C58BF2',
                borderLeftWidth: 1,
                paddingLeft: 20,
                borderStyle: 'dashed',
                zIndex: -1,
                marginLeft: -13,
              }}>
              <Text style={styles.innerHeading}>Rest at The Toe</Text>
              <Text style={styles.innerContent}>
                The basis of this movement is jumping. Now, what needs to be
                considered is that you have to use the tips of your feet
              </Text>
            </View>
          </View>
        </View>

        <View style={[styles.setpsContainer, {marginTop: -10}]}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#C58BF2', fontSize: 18}}>03</Text>
              <Dot bgColor="#C58BF2" borderColor="#C58BF2" />
            </View>
            <View
              style={{
                borderLeftColor: '#C58BF2',
                borderLeftWidth: 1,
                paddingLeft: 20,
                borderStyle: 'dashed',
                zIndex: -1,
                marginLeft: -13,
              }}>
              <Text style={styles.innerHeading}>Adjust Foot Movement</Text>
              <Text style={styles.innerContent}>
                Jumping Jack is not just an ordinary jump. But, you also have to
                pay close attention to leg movements.
              </Text>
            </View>
          </View>
        </View>

        <View style={[styles.setpsContainer, {marginTop: -10}]}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#C58BF2', fontSize: 18}}>04</Text>
              <Dot bgColor="#C58BF2" borderColor="#C58BF2" />
            </View>
            <View
              style={{
                paddingLeft: 20,

                zIndex: -1,
                marginLeft: -13,
              }}>
              <Text style={styles.innerHeading}>Clapping Both Hands</Text>
              <Text style={[styles.innerContent, {width: '35%'}]}>
                This cannot be taken lightly. You see, without realizing it, the
                clapping of your hands helps you to keep your rhythm while doing
                the Jumping Jack
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.headingBox}>
          <Text style={styles.heading}>Custom Repetitions</Text>
        </View>

        <View style={{marginVertical: 10}}>
          <WheelPicker
            // selectedItem={item => setSelectedTime(item)}
            data={wheelPickerData}
            onItemSelected={item => (temp = item)}
            style={{width: 250, height: 120}}
          />
        </View>

        <TouchableOpacity
          style={styles.gradientButtonContainer}
          onPress={() => btnpress()}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#9DCEFF', '#92A3FD']}
            style={styles.linearGradient}>
            <Text style={styles.buttonText}>Save</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Workout;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bodyContainer: {
    alignItems: 'center',
  },
  TopHeader: {
    width: windowWidth - 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  video: {
    width: 300,
    height: 400,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    borderRadius: 20,
    right: 0,
  },
  headingBox: {
    width: windowWidth - 30,
    marginVertical: 10,
  },
  heading: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 5,
  },
  subHeading: {
    color: 'gray',
    margin: 5,
  },
  setpsContainer: {
    // flexDirection: 'row',
    width: windowWidth - 50,
    alignSelf: 'center',
    marginTop: 15,
  },
  setpContentContainer: {
    width: '80%',
    marginTop: 10,
    marginHorizontal: 10,
  },
  innerHeading: {
    color: '#000',
    fontWeight: '500',
    fontSize: 18,
    marginBottom: 10,
  },
  innerContent: {
    color: 'gray',
    marginBottom: 40,
    width: '42%',
  },
  gradientButtonContainer: {
    width: windowWidth - 80,
    marginVertical: 30,
  },
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 30,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
