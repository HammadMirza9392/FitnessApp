import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;

const notifyData = [
  {
    Icon: require('./../assets/Ellipse.png'),
    Heading: 'Hey, it’s time for lunch',
    Time: 'About 1 minutes ago',
  },
  {
    Icon: require('./../assets/Ellipse2.png'),
    Heading: 'Don’t miss your lowerbody workout',
    Time: 'About 3 hours ago',
  },
  {
    Icon: require('./../assets/Ellipse3.png'),
    Heading: 'Hey, let’s add some meals for your b..',
    Time: 'About 3 hours ago',
  },
  {
    Icon: require('./../assets/Ellipse4.png'),
    Heading: 'Congratulations, You have finished A..',
    Time: '29 May',
  },
  {
    Icon: require('./../assets/Ellipse5.png'),
    Heading: 'Hey, it’s time for lunch',
    Time: '8 April',
  },
  {
    Icon: require('./../assets/Ellipse2.png'),
    Heading: 'Ups, You have missed your Lowerbo...',
    Time: '3 April',
  },
];

const rendorItem = item => {
  return (
    <View style={styles.notifyContainer}>
      <View>
        <Image source={item.Icon} style={styles.notifyImg} />
      </View>
      <View style={{marginHorizontal: 15}}>
        <Text style={styles.notifyHeading}>{item.Heading}</Text>
        <Text style={styles.notifyTime}>{item.Time}</Text>
      </View>
      <View style={{position: 'absolute', right: 0}}>
        <Image
          source={require('./../assets/Icon-More.png')}
          style={styles.notifyImgMore}
        />
      </View>
    </View>
  );
};

const Notification = ({navigation}) => {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.bodyContainer}>
        <View style={styles.TopHeader}>
          <Image
            source={require('./../assets/Back-Navs.png')}
            style={{width: 40, height: 40}}
          />
          <Text style={styles.MainText}>Notification</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('FinishedWorkout')}>
            <Image
              source={require('./../assets/Detail-Navs.png')}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
        </View>

        <FlatList
          data={notifyData}
          renderItem={({item}) => rendorItem(item)}
          style={{width: '100%'}}
        />
      </View>
    </ScrollView>
  );
};

export default Notification;

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

  MainText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  notifyContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDADA',
    paddingBottom: 20,
    alignSelf: 'center',
  },
  notifyImg: {
    width: 50,
    height: 50,
  },
  notifyHeading: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  notifyTime: {
    color: 'gray',
  },
  notifyImgMore: {
    width: 25,
    height: 25,
  },
});
