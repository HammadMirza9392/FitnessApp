import {
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import DateTimePicker from '@mohalla-tech/react-native-date-time-picker';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';

const windowWidth = Dimensions.get('window').width;

const AddSchedule = () => {
  const [time, setTime] = useState(new Date());
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  //   console.log('seletecd hours are ', time.getHours());
  //   console.log('seletecd minutes are ', time.getMinutes());
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.bodyContainer}>
        <View style={styles.TopHeader}>
          <Image
            source={require('./../assets/Close-Navs.png')}
            style={{width: 40, height: 40}}
          />
          <Text style={styles.MainText}>Add Schedule</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('FinishedWorkout')}>
            <Image
              source={require('./../assets/Detail-Navs.png')}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.topDateContainer}>
          <Image
            source={require('./../assets/Calendar.png')}
            style={styles.dateIcon}
          />
          <Text style={{color: '#000'}}>Thu, 27 May 2021</Text>
        </View>
        <View style={[styles.headingContainer]}>
          <Text style={styles.heading}>Time</Text>
        </View>
        <View style={styles.timeContainer}>
          <DateTimePicker
            mode="time"
            is24Hour={false}
            onChange={time => setTime(time)}
          />
        </View>
        <View style={[styles.headingContainer]}>
          <Text style={styles.heading}>Details Workout</Text>
        </View>
        <TouchableOpacity
          style={styles.workDityContainer}
          onPress={toggleModal}>
          <View style={styles.workDityInnerContainer}>
            <Image
              source={require('./../assets/barbel1.png')}
              style={styles.workDityIcon}
            />
            <Text style={styles.workDityText}>Choose Workout</Text>
          </View>
          <View style={styles.workDityInnerContainer}>
            <Text style={styles.workDityText}>5/27, 09:00 AM</Text>
            <Image
              source={require('./../assets/Icon-Arrow.png')}
              style={styles.workDityIcon}
            />
          </View>
        </TouchableOpacity>

        <Modal isVisible={isModalVisible}>
          <View style={styles.ModalContainer}>
            <View style={styles.ModalTopHeader}>
              <TouchableOpacity onPress={toggleModal}>
                <Image
                  source={require('./../assets/Close-Navs.png')}
                  style={{width: 40, height: 40}}
                />
              </TouchableOpacity>
              <Text style={styles.ModalMainText}>Workout Schedule</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('FinishedWorkout')}>
                <Image
                  source={require('./../assets/Detail-Navs.png')}
                  style={{width: 40, height: 40}}
                />
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.headingContainer,
                {marginBottom: 10, marginTop: 10},
              ]}>
              <Text style={styles.heading}>Lower Body Workout</Text>
            </View>
            <View style={styles.topDateContainer}>
              <Image
                source={require('./../assets/TimeCircle.png')}
                style={styles.dateIcon}
              />
              <Text style={{color: '#000'}}>Today | 03:00PM</Text>
            </View>

            <TouchableOpacity
              style={styles.ModalButtonContainer}
              onPress={toggleModal}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#9DCEFF', '#92A3FD']}
                style={styles.ModallinearGradient}>
                <Text style={styles.ModalbuttonText}>Mark as Complete</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Modal>

        <TouchableOpacity style={styles.workDityContainer}>
          <View style={styles.workDityInnerContainer}>
            <Image
              source={require('./../assets/Swap.png')}
              style={{width: 20, height: 20}}
            />
            <Text style={styles.workDityText}>Difficulity</Text>
          </View>
          <View style={styles.workDityInnerContainer}>
            <Text style={styles.workDityText}>5/27, 09:00 AM</Text>
            <Image
              source={require('./../assets/Icon-Arrow.png')}
              style={styles.workDityIcon}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.workDityContainer}>
          <View style={styles.workDityInnerContainer}>
            <Image
              source={require('./../assets/Icon-Repetitions.png')}
              style={styles.workDityIcon}
            />
            <Text style={styles.workDityText}>Custom Repetitions</Text>
          </View>

          <View style={styles.workDityInnerContainer}>
            <Image
              source={require('./../assets/Icon-Arrow.png')}
              style={styles.workDityIcon}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.workDityContainer}>
          <View style={styles.workDityInnerContainer}>
            <Image
              source={require('./../assets/Icon-Repetitions.png')}
              style={styles.workDityIcon}
            />
            <Text style={styles.workDityText}>Custom Weights</Text>
          </View>
          <View style={styles.workDityInnerContainer}>
            <Image
              source={require('./../assets/Icon-Arrow.png')}
              style={styles.workDityIcon}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.gradientButtonContainer}
          onPress={() => navigation.navigate('Welcome')}>
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

export default AddSchedule;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bodyContainer: {
    //  alignItems: 'center',
  },
  TopHeader: {
    width: windowWidth - 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    alignItems: 'center',
  },

  MainText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  headingContainer: {
    margin: 25,
  },
  heading: {
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
  },
  timeContainer: {
    width: windowWidth - 50,
    alignSelf: 'center',
  },
  topDateContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  dateIcon: {
    width: 25,
    height: 25,
    marginHorizontal: 15,
  },
  workDityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth - 30,
    alignSelf: 'center',
    padding: 20,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginVertical: 5,
    backgroundColor: '#F7F8F8',
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
  gradientButtonContainer: {
    width: windowWidth - 80,
    marginTop: 20,
    alignSelf: 'center',
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
  ModalContainer: {
    height: 300,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 30,
  },
  ModalTopHeader: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    alignItems: 'center',
  },

  ModalMainText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  ModalButtonContainer: {
    width: windowWidth - 80,
    marginTop: 20,
    alignSelf: 'center',
  },
  ModallinearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 30,
    paddingVertical: 5,
  },
  ModalbuttonText: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
