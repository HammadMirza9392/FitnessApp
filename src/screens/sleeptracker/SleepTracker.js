import {
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Toggle from 'react-native-toggle-element';

const windowWidth = Dimensions.get('window').width;

const SleepTracker = ({navigation}) => {
  const [UpperBodyWorkOut, setUpperBodyWorkOut] = useState(false);
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.bodyContainer}>
        <View style={styles.TopHeader}>
          <Image
            source={require('./../../assets/Back-Navs.png')}
            style={{width: 40, height: 40}}
          />
          <Text style={styles.MainText}>Sleep Tracker</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('FinishedWorkout')}>
            <Image
              source={require('./../../assets/Detail-Navs.png')}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
        </View>

        <Image
          source={require('./../../assets/Graph-Section.png')}
          style={{
            // width: '90%',
            height: 180,
            alignSelf: 'center',
            resizeMode: 'contain',
            marginTop: 20,
          }}
        />

        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#9DCEFF', '#92A3FD']}
          style={styles.sleepGraphContainer}>
          <Text style={styles.sleepgraphHeading}>Last Night Sleep</Text>
          <Text style={styles.sleepgraphTime}>8h 20m</Text>
          <Image
            source={require('./../../assets/Sleep-Graph12.png')}
            style={styles.sleepgraphImg}
          />
        </LinearGradient>

        <View style={styles.checkContainer}>
          <View>
            <Text style={styles.targetText}>Daily Meal Schedule</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.checktargetbtnContainer}
              onPress={() => navigation.navigate('BreakFast')}>
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
          <Text style={styles.heading}>Today Schedule</Text>
        </View>

        <View style={styles.ScheduleContainer}>
          <TouchableOpacity style={styles.ScheduleContent}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('./../../assets/Icon-Bed.png')}
                style={styles.ScheduleImg}
              />
              <View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={styles.SchedulemainTxt}>Bedtime ,</Text>
                  <Text style={{color: 'gray'}}> 09:00pm</Text>
                </View>
                <View>
                  <Text style={styles.Scheduletime}>June 05, 02:00pm</Text>
                </View>
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
      </View>
    </ScrollView>
  );
};

export default SleepTracker;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  TopHeader: {
    width: windowWidth - 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    alignItems: 'center',
    alignSelf: 'center',
  },
  MainText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  headingContainer: {
    margin: 20,
  },
  heading: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
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
    marginVertical: 20,
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
  ScheduleContainer: {
    shadowColor: '#838383',
    elevation: 9,
    backgroundColor: '#fff',
    width: windowWidth - 30,
    padding: 30,
    paddingHorizontal: 20,
    marginVertical: 10,
    marginHorizontal: 4,
    borderRadius: 20,
    alignSelf: 'center',
  },
  ScheduleContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ScheduleImg: {
    height: 35,
    width: 35,
  },
  SchedulemainTxt: {
    color: '#7B6F72',
    fontSize: 16,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  Scheduletime: {
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
  sleepGraphContainer: {
    width: windowWidth - 30,
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 10,
  },
  sleepgraphHeading: {
    color: '#fff',
    padding: 10,
    paddingHorizontal: 20,
    paddingTop: 20,
    fontSize: 18,
    fontWeight: '600',
  },
  sleepgraphTime: {
    color: '#fff',
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: '500',
  },
  sleepgraphImg: {
    width: '100%',
    resizeMode: 'stretch',
    height: 80,
  },
});
