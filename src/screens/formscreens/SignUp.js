import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignUp = ({navigation}) => {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.bodyContainer}>
        <View style={{alignItems: 'center', marginVertical: 60}}>
          <Text style={styles.topText}>Hey there,</Text>
          <Text style={styles.topBottomText}>Create an Account</Text>
        </View>

        <View style={styles.textInputBox}>
          <Image
            source={require('./../../assets/Profile.png')}
            style={styles.inptImg}
          />
          <TextInput
            placeholder="First Name"
            style={styles.textInput}
            placeholderTextColor="#ADA4A5"
          />
        </View>
        <View style={styles.textInputBox}>
          <Image
            source={require('./../../assets/Profile.png')}
            style={styles.inptImg}
          />
          <TextInput
            placeholder="Last Name"
            style={styles.textInput}
            placeholderTextColor="#ADA4A5"
          />
        </View>
        <View style={styles.textInputBox}>
          <Image
            source={require('./../../assets/Message.png')}
            style={styles.inptImg}
          />
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            placeholderTextColor="#ADA4A5"
          />
        </View>
        <View style={styles.textInputBox}>
          <Image
            source={require('./../../assets/Lock.png')}
            style={{width: 16, height: 18, resizeMode: 'stretch'}}
          />
          <TextInput
            placeholder="Password"
            style={styles.textInput}
            secureTextEntry={true}
            placeholderTextColor="#ADA4A5"
          />
          <Image
            source={require('./../../assets/Hide-Password.png')}
            style={styles.inptImg}
          />
        </View>

        <View style={styles.checkBoxContainer}>
          <Text style={{color: '#ADA4A5'}}>
            By continuing you accept our Privacy Policy and Term of Use
          </Text>
        </View>

        <TouchableOpacity
          style={styles.gradientButtonContainer}
          onPress={() => navigation.navigate('CompleteProfile')}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#9DCEFF', '#92A3FD']}
            style={styles.linearGradient}>
            <Text style={styles.buttonText}>Register</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.boderLineContainer}>
          <View style={styles.Line}></View>
          <Text style={{color: '#000'}}>Or</Text>
          <View style={styles.Line}></View>
        </View>

        <View style={styles.socialProfileContainer}>
          <View style={styles.socialBox}>
            <Image
              source={require('./../../assets/google.png')}
              style={{width: 25, height: 25}}
            />
          </View>
          <View style={styles.socialBox}>
            <Image
              source={require('./../../assets/facebook.png')}
              style={{width: 25, height: 25}}
            />
          </View>
        </View>

        <View style={styles.bottomLoginTextContainer}>
          <Text style={styles.bottomTextnormal}>Already have an account? </Text>
          <Text
            style={styles.bottomLoginText}
            onPress={() => navigation.navigate('Login')}>
            Login
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bodyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    color: '#000',
    fontSize: 16,
  },
  topBottomText: {
    color: '#000',
    fontSize: 26,
    fontWeight: 'bold',
  },
  textInputBox: {
    backgroundColor: '#F7F8F8',
    width: windowWidth - 70,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  inptImg: {
    width: 20,
    height: 20,
  },
  textInput: {
    color: '#000',
    marginHorizontal: 10,
    width: windowWidth - 150,
  },
  checkBoxContainer: {
    width: windowWidth - 100,
  },
  gradientButtonContainer: {
    width: windowWidth - 80,
    marginTop: 60,
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
  boderLineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  Line: {
    borderTopColor: '#DDDADA',
    marginHorizontal: 10,
    width: windowWidth - 250,
    borderTopWidth: 1,
  },
  socialProfileContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  socialBox: {
    marginHorizontal: 10,
    padding: 10,
    borderColor: '#DDDADA',
    borderWidth: 1,
    borderRadius: 10,
  },
  bottomLoginTextContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  bottomTextnormal: {
    color: '#000',
  },
  bottomLoginText: {
    color: '#C58BF2',
  },
});
