import {
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Toggle from 'react-native-toggle-element';
import BottomNavigation from './../global/BottomNavigation';

const windowWidth = Dimensions.get('window').width;

const Profile = ({navigation}) => {
  const [toggleValue, setToggleValue] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.TopHeader}>
        <Image
          source={require('./../../assets/Back-Navs.png')}
          style={{width: 40, height: 40}}
        />
        <Text style={styles.MainText}>Profile</Text>
        <Image
          source={require('./../../assets/Detail-Navs.png')}
          style={{width: 40, height: 40}}
        />
      </View>

      <ScrollView>
        <View style={styles.profileImgContainer}>
          <View>
            <Image
              source={require('./../../assets/Latest-Pic.png')}
              style={styles.ProfileImg}
            />
          </View>
          <View style={{marginHorizontal: 15}}>
            <Text style={styles.ProfileName}>Stefani Wong</Text>
            <Text style={styles.ProfileDec}>Lose a Fat Program</Text>
          </View>
          <View style={{position: 'absolute', right: 0}}>
            <TouchableOpacity
              style={styles.profileEdit}
              onPress={() => navigation.navigate('Login')}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#9DCEFF', '#92A3FD']}
                style={styles.profilebtn}>
                <Text style={styles.profilebtnText}>Edit</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.heightWeightContainer}>
          <View style={styles.heightWeightInnerContainer}>
            <Text style={styles.hWMainText}>180cm</Text>
            <Text style={styles.hWSubText}>Height</Text>
          </View>
          <View style={styles.heightWeightInnerContainer}>
            <Text style={styles.hWMainText}>65kg</Text>
            <Text style={styles.hWSubText}>Weight</Text>
          </View>
          <View style={styles.heightWeightInnerContainer}>
            <Text style={styles.hWMainText}>22yo</Text>
            <Text style={styles.hWSubText}>Age</Text>
          </View>
        </View>

        <View style={styles.AccountContainer}>
          <Text style={styles.AccountMainText}>Account</Text>

          <TouchableOpacity style={[styles.ProfileContent, {marginTop: 20}]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('./../../assets/ProfileAccount.png')}
                style={styles.profileContentImg}
              />
              <Text style={styles.profileContentTxt}>Personal Data</Text>
            </View>
            <Image
              source={require('./../../assets/Icon-Arrow.png')}
              style={styles.profileContentImg}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.ProfileContent}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('./../../assets/Icon-Achievement.png')}
                style={styles.profileContentImg}
              />
              <Text style={styles.profileContentTxt}>Achievement</Text>
            </View>
            <Image
              source={require('./../../assets/Icon-Arrow.png')}
              style={styles.profileContentImg}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.ProfileContent}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('./../../assets/Graph.png')}
                style={styles.profileContentImg}
              />
              <Text style={styles.profileContentTxt}>Activity History</Text>
            </View>
            <Image
              source={require('./../../assets/Icon-Arrow.png')}
              style={styles.profileContentImg}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.ProfileContent}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('./../../assets/Chart.png')}
                style={styles.profileContentImg}
              />
              <Text style={styles.profileContentTxt}>Workout Progress</Text>
            </View>
            <Image
              source={require('./../../assets/Icon-Arrow.png')}
              style={styles.profileContentImg}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.AccountContainer}>
          <Text style={styles.AccountMainText}>Notification</Text>

          <TouchableOpacity style={[styles.ProfileContent, {marginTop: 20}]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('./../../assets/Icon-Notif.png')}
                style={styles.profileContentImg}
              />
              <Text style={styles.profileContentTxt}>Pop-up Notification</Text>
            </View>
            <Toggle
              value={toggleValue}
              onPress={val => setToggleValue(val)}
              trackBarStyle={{
                backgroundColor: toggleValue ? '#C58BF2' : '#ADA4A5',
                height: 25,
                borderColor: toggleValue ? '#C58BF2' : '#ADA4A5',
              }}
              trackBar={{width: 50, borderWidth: 4}}
              thumbButton={styles.toggleBtn}
              thumbStyle={{
                backgroundColor: '#fff',
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.OthersContainer}>
          <Text style={styles.OthersMainText}>Other</Text>

          <TouchableOpacity style={[styles.OthersContent, {marginTop: 20}]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('./../../assets/Icon-Message.png')}
                style={styles.OthersContentImg}
              />
              <Text style={styles.OthersContentTxt}>Contact Us</Text>
            </View>
            <Image
              source={require('./../../assets/Icon-Arrow.png')}
              style={styles.OthersContentImg}
            />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.OthersContent, {marginTop: 20}]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('./../../assets/ShieldDone.png')}
                style={styles.OthersContentImg}
              />
              <Text style={styles.OthersContentTxt}>Privacy Policy</Text>
            </View>
            <Image
              source={require('./../../assets/Icon-Arrow.png')}
              style={styles.OthersContentImg}
            />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.OthersContent, {marginTop: 20}]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('./../../assets/Icon-Setting.png')}
                style={styles.OthersContentImg}
              />
              <Text style={styles.OthersContentTxt}>Settings</Text>
            </View>
            <Image
              source={require('./../../assets/Icon-Arrow.png')}
              style={styles.OthersContentImg}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BottomNavigation />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
  },
  TopHeader: {
    width: windowWidth - 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    alignSelf: 'center',
  },

  MainText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  profileImgContainer: {
    width: windowWidth - 30,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingBottom: 10,
    alignSelf: 'center',
  },
  ProfileImg: {
    width: 50,
    height: 50,
  },
  ProfileName: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  ProfileDec: {
    color: 'gray',
  },
  profileEdit: {
    width: '100%',
    marginTop: 20,
  },
  profilebtn: {
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 30,
    paddingVertical: 5,
  },
  profilebtnText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  heightWeightContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    alignSelf: 'center',
  },
  heightWeightInnerContainer: {
    shadowColor: '#838383',
    elevation: 9,
    width: 100,
    height: 80,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 20,
  },
  hWMainText: {
    color: '#92A3FD',
    fontSize: 20,
  },
  hWSubText: {
    color: '#7B6F72',
    fontSize: 16,
    marginTop: 5,
  },
  AccountContainer: {
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
  AccountMainText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  ProfileContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  profileContentImg: {
    height: 25,
    width: 25,
  },
  profileContentTxt: {
    color: '#7B6F72',
    fontSize: 16,
    marginHorizontal: 10,
  },
  OthersContainer: {
    width: windowWidth - 30,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: '#fff',
    padding: 30,
    marginVertical: 10,
    marginHorizontal: 4,
    borderRadius: 20,
    alignSelf: 'center',
  },
  OthersMainText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  OthersContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  OthersContentImg: {
    height: 25,
    width: 25,
  },
  OthersContentTxt: {
    color: '#7B6F72',
    fontSize: 16,
    marginHorizontal: 10,
  },
  toggleCOntainer: {
    backgroundColor: '#C58BF2',
    height: 25,
    borderColor: '#C58BF2',
    // borderColor: 'gray',
  },
  toggleBtn: {
    width: 25,
    height: 25,
    radius: 20,
  },
});
