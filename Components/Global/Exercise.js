import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  View,
} from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;

const itemdata = [
  {
    img: require('./../assets/Vector-Exercises1.png'),
    name: 'Warm Up',
    duration: '05:00',
  },
  {
    img: require('./../assets/Vector-Exercises2.png'),
    name: 'Jumping Jack',
    duration: '12x',
  },
  {
    img: require('./../assets/Vector-Exercises3.png'),
    name: 'Skipping',
    duration: '15x',
  },
  {
    img: require('./../assets/Vector-Exercises4.png'),
    name: 'Squats',
    duration: '20x',
  },
  {
    img: require('./../assets/Vector-Exercises5.png'),
    name: 'Arm Raises',
    duration: '00:53',
  },
  {
    img: require('./../assets/Vector-Exercises6.png'),
    name: 'Rest and Drink',
    duration: '02:00',
  },
];

const rendorItem = item => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <View style={styles.InnerContainer}>
        <Image source={item.img} style={styles.img} />
        <View style={{marginHorizontal: 10}}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemduration}>{item.duration}</Text>
        </View>
      </View>
      <Image
        source={require('./../assets/Icon-Next.png')}
        style={styles.nextIcon}
      />
    </TouchableOpacity>
  );
};
const Exercise = () => {
  return (
    <View>
      <FlatList
        data={itemdata}
        renderItem={({item}) => rendorItem(item)}
        style={{width: '100%'}}
      />
    </View>
  );
};

export default Exercise;

const styles = StyleSheet.create({
  mainContainer: {
    margin: 10,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: windowWidth - 30,
    alignSelf: 'center',
  },
  InnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  itemName: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    // margin: 10,
  },
  itemduration: {
    color: '#000',
  },
  nextIcon: {
    width: 30,
    height: 30,
  },
});
