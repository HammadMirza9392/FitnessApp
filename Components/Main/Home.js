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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.bodyContainer}>
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
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bodyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topHeaderContainer: {
    flexDirection: 'row',
    width: windowWidth - 10,
    justifyContent: 'space-between',
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
});
