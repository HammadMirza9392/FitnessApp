import {
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width;

const BreakFast = () => {
  const categoryData = [
    {
      TopImg: require('./../assets/fintoeat1.png'),
      CatName: 'Pie',
      bgColor: '#eaeeff',
    },
    {
      TopImg: require('./../assets/recdiet1.png'),
      CatName: 'Cake ',
      bgColor: '#f7eafa',
    },
    {
      TopImg: require('./../assets/Vectorbreakfast1.png'),
      CatName: 'Salad',
      bgColor: '#eaeeff',
    },
    {
      TopImg: require('./../assets/Vectorbreakfast4.png'),
      CatName: 'Smoothie',
      bgColor: '#f7eafa',
    },
  ];
  const RecDietData = [
    {
      TopImg: require('./../assets/recdiet1.png'),
      DietName: 'Honey Pancake',
      FoodDes: 'Easy | 30mins | 180kCal',
      btnClr1: '#9DCEFF',
      btnClr2: '#92A3FD',
      bgColor: '#eaeeff',
    },
    {
      TopImg: require('./../assets/Vectormeal.png'),
      DietName: 'Canai Bread',
      FoodDes: 'Easy | 20mins | 230kCal',
      btnClr1: '#EEA4CE',
      btnClr2: '#C58BF2',
      bgColor: '#f7eafa',
    },
    {
      TopImg: require('./../assets/fintoeat1.png'),
      DietName: 'Breakfast',
      FoodDes: '120+ Foods',
      btnClr1: '#9DCEFF',
      btnClr2: '#92A3FD',
      bgColor: '#eaeeff',
    },
    {
      TopImg: require('./../assets/Vectormeal.png'),
      DietName: 'Salmon Nigiri',
      FoodDes: 'Today | 7am',
      btnClr1: '#EEA4CE',
      btnClr2: '#C58BF2',
      bgColor: '#f7eafa',
    },
  ];
  const rendorRecDiet = item => {
    return (
      <TouchableOpacity
        onPress={() => console.log(item)}
        style={[styles.RecDietContainer, {backgroundColor: item.bgColor}]}>
        <View>
          <Image source={item.TopImg} style={styles.RecDietImg} />
        </View>
        <View>
          <Text style={styles.RecDietHeading}>{item.DietName}</Text>
          <Text style={styles.RecDietDes}>{item.FoodDes}</Text>
        </View>
        <TouchableOpacity
          style={styles.RecDietButtonContainer}
          onPress={() => navigation.navigate('CompleteProfile')}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={[item.btnClr1, item.btnClr2]}
            style={styles.RecDietlinearGradient}>
            <Text style={styles.RecDietbuttonText}>View</Text>
          </LinearGradient>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  const rendorCategory = item => {
    return (
      <TouchableOpacity
        onPress={() => console.log(item)}
        style={[styles.categoryContainer, {backgroundColor: item.bgColor}]}>
        <Image source={require('./../assets/Bg.png')} style={styles.bgCat} />
        <Image source={item.TopImg} style={styles.categoryImg} />
        <Text style={styles.categoryHeading}>{item.CatName}</Text>
      </TouchableOpacity>
    );
  };

  const PopularMealData = [
    {
      Icon: require('./../assets/pancake2.png'),
      Heading: 'Blueberry Pancake',
      Time: 'Medium | 30mins | 230kCal',
    },
    {
      Icon: require('./../assets/nigiri1.png'),
      Heading: 'Salmon Nigiri',
      Time: 'Medium | 20mins | 120kCal',
    },
  ];
  const rendorPopularMeal = item => {
    return (
      <View style={styles.PopularMealContainer}>
        <View>
          <Image source={item.Icon} style={styles.PopularMealImg} />
        </View>
        <View style={{marginHorizontal: 15}}>
          <Text numberOfLines={1} style={styles.PopularMealHeading}>
            {item.Heading}
          </Text>
          <Text style={styles.PopularMealTime}>{item.Time}</Text>
        </View>
        <View style={{position: 'absolute', right: 0}}>
          <Image
            source={require('./../assets/Workout-Btn.png')}
            style={styles.PopularMealImgMore}
          />
        </View>
      </View>
    );
  };
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.bodyContainer}>
        <View style={styles.TopHeader}>
          <Image
            source={require('./../assets/Back-Navs.png')}
            style={{width: 40, height: 40}}
          />
          <Text style={styles.MainText}>Breakfast</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('FinishedWorkout')}>
            <Image
              source={require('./../assets/Detail-Navs.png')}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.searchBoxContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('./../assets/Searchbreakfast.png')}
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="Search Pancake"
              placeholderTextColor={'#DDDADA'}
              style={styles.inptStyle}
            />
          </View>
          <View style={styles.rightImgBox}>
            <Image
              source={require('./../assets/Filter.png')}
              style={styles.filterIcon}
            />
          </View>
        </View>

        <View style={styles.headingContainer}>
          <Text style={styles.headingtxt}>Category</Text>
        </View>

        <View style={{marginBottom: 10}}>
          <FlatList
            data={categoryData}
            horizontal={true}
            renderItem={({item}) => rendorCategory(item)}
            style={{width: '100%'}}
          />
        </View>

        <View style={styles.headingContainer}>
          <Text style={styles.headingtxt}>Recommendation for Diet</Text>
        </View>

        <View style={{marginBottom: 10}}>
          <FlatList
            data={RecDietData}
            horizontal={true}
            renderItem={({item}) => rendorRecDiet(item)}
            style={{width: '100%'}}
          />
        </View>

        <View style={styles.headingContainer}>
          <Text style={styles.headingtxt}>Popular</Text>
        </View>

        <View>
          <FlatList
            data={PopularMealData}
            renderItem={({item}) => rendorPopularMeal(item)}
            style={{width: '100%'}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default BreakFast;

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
  searchBoxContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: windowWidth - 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#838383',
    elevation: 8,
    marginVertical: 10,
    borderRadius: 8,
    alignSelf: 'center',
    paddingHorizontal: 15,
  },
  inptStyle: {
    width: '80%',
    marginLeft: 10,
    color: '#000',
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  filterIcon: {
    width: 25,
    height: 25,
  },
  rightImgBox: {
    borderLeftWidth: 1,
    borderLeftColor: '#DDDADA',
    paddingLeft: 10,
    paddingRight: 20,
  },
  headingContainer: {
    marginVertical: 10,
    alignSelf: 'center',
    width: windowWidth - 50,
  },
  headingtxt: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  categoryContainer: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    height: 160,
    width: 120,
    margin: 10,
    borderRadius: 15,
    shadowColor: '#838383',
    elevation: 1,
  },
  bgCat: {
    height: 80,
    width: 80,
    position: 'absolute',
    alignSelf: 'center',
    resizeMode: 'contain',
    top: 30,
  },
  categoryImg: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  categoryHeading: {
    color: '#000',
    marginTop: 20,
    fontWeight: '500',
    alignSelf: 'center',
  },
  RecDietContainer: {
    width: 180,
    height: 250,
    shadowColor: '#838383',
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 15,
    alignSelf: 'center',
  },
  RecDietImg: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  RecDietHeading: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  RecDietDes: {
    color: 'gray',
    alignSelf: 'center',
  },
  RecDietButtonContainer: {
    width: '55%',
    marginVertical: 15,
  },
  RecDietlinearGradient: {
    borderRadius: 30,
  },
  RecDietbuttonText: {
    fontSize: 14,
    textAlign: 'center',
    margin: 8,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  PopularMealContainer: {
    width: windowWidth - 40,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    shadowColor: '#838383',
    elevation: 4,
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 15,
    paddingBottom: 20,
    alignSelf: 'center',
    paddingLeft: 20,
  },
  PopularMealImg: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  PopularMealHeading: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  PopularMealTime: {
    color: 'gray',
  },
  PopularMealImgMore: {
    width: 25,
    height: 25,
    marginRight: 20,
  },
});
