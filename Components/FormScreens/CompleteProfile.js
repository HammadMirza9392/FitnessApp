import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  View,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {SelectList} from 'react-native-dropdown-select-list';
import LinearGradient from 'react-native-linear-gradient';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CompleteProfile = ({navigation}) => {
  const [selected, setSelected] = useState('');

  const data = [
    {key: '1', value: 'Male'},
    {key: '2', value: 'Female'},
  ];

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.bodyContainer}>
        <View>
          <Image
            source={require('./../assets/Vector-Section.png')}
            style={{
              width: windowWidth,
              height: windowHeight / 2.3,
              resizeMode: 'stretch',
            }}
          />
        </View>

        <View style={styles.topTextContainer}>
          <Text style={styles.mainText}>Let’s complete your profile</Text>
          <Text style={styles.subText}>
            It will help us to know more about you!
          </Text>
        </View>

        <View style={styles.formContainer}>
          <TextInput />
          <View style={styles.dropDownBox}>
            <Image
              source={require('./../assets/2User.png')}
              style={styles.dropdownIcon}
            />
            <SelectList
              setSelected={val => setSelected(val)}
              data={data}
              save="value"
              boxStyles={{
                borderWidth: 0,
                width: windowWidth - 120,
              }}
              inputStyles={styles.dropdowninpt}
              dropdownStyles={{borderWidth: 0}}
              dropdownTextStyles={styles.dropdowninptdrop}
              placeholder="Choose Gender"
              maxHeight={150}
            />
          </View>
          <View style={styles.textInputBox}>
            <Image
              source={require('./../assets/Calendar.png')}
              style={styles.inptImg}
            />
            <TextInput
              placeholder="Date Of Birth"
              style={styles.textInput}
              placeholderTextColor="#ADA4A5"
            />
          </View>

          <View style={styles.sidebtnFormContainer}>
            <View style={styles.textInputsidebtnBox}>
              <Image
                source={require('./../assets/weight-scale1.png')}
                style={styles.inptImg}
              />
              <TextInput
                placeholder="Your Weight"
                style={styles.textInput}
                placeholderTextColor="#ADA4A5"
              />
            </View>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#EEA4CE', '#C58BF2']}
              style={styles.linearGradient}>
              <Text style={styles.buttonText}>KG</Text>
            </LinearGradient>
          </View>

          <View style={styles.sidebtnFormContainer}>
            <View style={styles.textInputsidebtnBox}>
              <Image
                source={require('./../assets/Swap.png')}
                style={styles.inptImg}
              />
              <TextInput
                placeholder="Your Height"
                style={styles.textInput}
                placeholderTextColor="#ADA4A5"
              />
            </View>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#EEA4CE', '#C58BF2']}
              style={styles.linearGradient}>
              <Text style={styles.buttonText}>CM</Text>
            </LinearGradient>
          </View>

          <TouchableOpacity
            style={styles.submitbtnContainer}
            onPress={() => navigation.navigate('WhatYourGoal1')}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#9DCEFF', '#92A3FD']}
              style={styles.submitbtn}>
              <Text style={styles.submitBtnText}>Next</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CompleteProfile;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bodyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topTextContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  mainText: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
  },
  subText: {
    color: 'gray',
  },
  formContainer: {
    marginVertical: 10,
  },
  dropDownBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F8F8',
    width: windowWidth - 80,
    borderRadius: 10,
  },
  dropdowninpt: {
    color: '#ADA4A5',
  },
  dropdowninptdrop: {
    color: '#ADA4A5',
    width: windowWidth - 150,
  },
  dropdownIcon: {
    position: 'absolute',
    left: 0,
    marginLeft: 10,
    top: 15,
    width: 20,
    height: 20,
  },
  textInputBox: {
    backgroundColor: '#F7F8F8',
    width: windowWidth - 80,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  textInput: {
    color: '#000',
    marginHorizontal: 10,
    width: windowWidth - 130,
  },
  inptImg: {
    width: 20,
    height: 20,
  },
  sidebtnFormContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textInputsidebtnBox: {
    backgroundColor: '#F7F8F8',
    width: windowWidth - 140,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  linearGradient: {
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  submitbtnContainer: {
    width: windowWidth - 80,
    marginVertical: 20,
  },
  submitbtn: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 30,
    paddingVertical: 10,
  },
  submitBtnText: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
