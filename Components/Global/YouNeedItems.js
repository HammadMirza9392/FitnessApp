import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';
import React from 'react';

const itemdata = [
  {
    img: require('./../assets/barbel.png'),
    name: 'Barbell',
  },
  {
    img: require('./../assets/skipping-rope.png'),
    name: 'Skipping Rope',
  },
  {
    img: require('./../assets/Layer5.png'),
    name: 'Bottle 1 Liters',
  },
];

const rendorItem = item => {
  return (
    <TouchableOpacity style={styles.mainContainer}>
      <View style={styles.imgContainer}>
        <Image source={item.img} style={styles.img} />
      </View>
      <Text style={styles.itemName}>{item.name}</Text>
    </TouchableOpacity>
  );
};
const YouNeedItems = () => {
  return (
    <View>
      <FlatList
        horizontal={true}
        data={itemdata}
        renderItem={({item}) => rendorItem(item)}
        style={{width: '100%'}}
      />
    </View>
  );
};

export default YouNeedItems;

const styles = StyleSheet.create({
  mainContainer: {
    margin: 10,
    marginHorizontal: 5,
  },
  imgContainer: {
    backgroundColor: '#F7F8F8',
    padding: 30,
    borderRadius: 20,
  },
  img: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  itemName: {
    color: '#000',
    margin: 10,
  },
});
