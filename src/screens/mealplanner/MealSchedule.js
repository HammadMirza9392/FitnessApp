import {
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import LinearGradient from 'react-native-linear-gradient';

const windowWidth = Dimensions.get('window').width;

const MealSchedule = ({navigation}) => {
  const breakfastdata = [
    {
      img: require('./../../assets/breakfast1.png'),
      name: 'Honey Pancake',
      duration: '07:00am',
      bgColor: '#eaeeff',
    },
    {
      img: require('./../../assets/coffee.png'),
      name: 'Coffee',
      duration: '07:30am',
      bgColor: '#f7eafa',
    },
  ];

  const lunchdata = [
    {
      img: require('./../../assets/chickensteak.png'),
      name: 'Chicken Steak',
      duration: '01:00pm',
      bgColor: '#eaeeff',
    },
    {
      img: require('./../../assets/glass-of-milk1.png'),
      name: 'Milk',
      duration: '01:20pm',
      bgColor: '#f7eafa',
    },
  ];

  const snaksdata = [
    {
      img: require('./../../assets/snackdata1.png'),
      name: 'Orange',
      duration: '04:30pm',
      bgColor: '#eaeeff',
    },
    {
      img: require('./../../assets/applepie.png'),
      name: 'Apple Pie',
      duration: '04:40pm',
      bgColor: '#f7eafa',
    },
  ];

  const dinnerdata = [
    {
      img: require('./../../assets/salad.png'),
      name: 'Salad',
      duration: '07:10pm',
      bgColor: '#eaeeff',
    },
    {
      img: require('./../../assets/yogurt.png'),
      name: 'Oatmeal',
      duration: '08:10pm',
      bgColor: '#f7eafa',
    },
  ];
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.bodyContainer}>
          <View style={styles.TopHeader}>
            <Image
              source={require('./../../assets/Back-Navs.png')}
              style={{width: 40, height: 40}}
            />
            <Text style={styles.MainText}>Meal Schedule</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('FinishedWorkout')}>
              <Image
                source={require('./../../assets/Detail-Navs.png')}
                style={{width: 40, height: 40}}
              />
            </TouchableOpacity>
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
            <Text style={styles.heading}>Breakfast</Text>
            <Text style={styles.subheading}>2 meals | 230 calories</Text>
          </View>

          <View>
            {breakfastdata.map(item => (
              <View>
                <TouchableOpacity style={styles.DietmainContainer}>
                  <View style={styles.DietInnerContainer}>
                    <View
                      style={[
                        styles.DietimgContainer,
                        {backgroundColor: item.bgColor},
                      ]}>
                      <Image source={item.img} style={styles.Dietimg} />
                    </View>
                    <View style={{marginHorizontal: 10}}>
                      <Text style={styles.DietitemName}>{item.name}</Text>
                      <Text style={styles.Dietitemduration}>
                        {item.duration}
                      </Text>
                    </View>
                  </View>
                  <Image
                    source={require('./../../assets/Icon-Next.png')}
                    style={styles.DietnextIcon}
                  />
                </TouchableOpacity>
              </View>
            ))}
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
            <Text style={styles.heading}>Lunch</Text>
            <Text style={styles.subheading}>2 meals | 500 calories</Text>
          </View>

          <View>
            {lunchdata.map(item => (
              <View>
                <TouchableOpacity style={styles.DietmainContainer}>
                  <View style={styles.DietInnerContainer}>
                    <View
                      style={[
                        styles.DietimgContainer,
                        {backgroundColor: item.bgColor},
                      ]}>
                      <Image source={item.img} style={styles.Dietimg} />
                    </View>
                    <View style={{marginHorizontal: 10}}>
                      <Text style={styles.DietitemName}>{item.name}</Text>
                      <Text style={styles.Dietitemduration}>
                        {item.duration}
                      </Text>
                    </View>
                  </View>
                  <Image
                    source={require('./../../assets/Icon-Next.png')}
                    style={styles.DietnextIcon}
                  />
                </TouchableOpacity>
              </View>
            ))}
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
            <Text style={styles.heading}>Snacks</Text>
            <Text style={styles.subheading}>2 meals | 140 calories</Text>
          </View>

          <View>
            {snaksdata.map(item => (
              <View>
                <TouchableOpacity style={styles.DietmainContainer}>
                  <View style={styles.DietInnerContainer}>
                    <View
                      style={[
                        styles.DietimgContainer,
                        {backgroundColor: item.bgColor},
                      ]}>
                      <Image source={item.img} style={styles.Dietimg} />
                    </View>
                    <View style={{marginHorizontal: 10}}>
                      <Text style={styles.DietitemName}>{item.name}</Text>
                      <Text style={styles.Dietitemduration}>
                        {item.duration}
                      </Text>
                    </View>
                  </View>
                  <Image
                    source={require('./../../assets/Icon-Next.png')}
                    style={styles.DietnextIcon}
                  />
                </TouchableOpacity>
              </View>
            ))}
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
            <Text style={styles.heading}>Dinner</Text>
            <Text style={styles.subheading}>2 meals | 120 calories</Text>
          </View>

          <View>
            {dinnerdata.map(item => (
              <View>
                <TouchableOpacity style={styles.DietmainContainer}>
                  <View style={styles.DietInnerContainer}>
                    <View
                      style={[
                        styles.DietimgContainer,
                        {backgroundColor: item.bgColor},
                      ]}>
                      <Image source={item.img} style={styles.Dietimg} />
                    </View>
                    <View style={{marginHorizontal: 10}}>
                      <Text style={styles.DietitemName}>{item.name}</Text>
                      <Text style={styles.Dietitemduration}>
                        {item.duration}
                      </Text>
                    </View>
                  </View>
                  <Image
                    source={require('./../../assets/Icon-Next.png')}
                    style={styles.DietnextIcon}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>

          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Today Meal Nutritions</Text>
          </View>

          <View>
            <View style={styles.mealNutritionContainer}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.mealNutritionHeading}>Calories</Text>
                  <Image
                    source={require('./../../assets/Calories-Icon.png')}
                    style={styles.mealNutritionImg}
                  />
                </View>
                <Text style={{color: '#7B6F72'}}>320 kCal</Text>
              </View>
              <Progress.Bar
                progress={0.8}
                unfilledColor={'#F7F8F8'}
                color={'#C58BF2'}
                borderWidth={0}
                width={windowWidth - 80}
                height={12}
                style={{
                  marginTop: 10,
                  borderRadius: 30,
                }}
              />
            </View>

            <View style={styles.mealNutritionContainer}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.mealNutritionHeading}>Proteins</Text>
                  <Image
                    source={require('./../../assets/Proteins-Icon.png')}
                    style={styles.mealNutritionImg}
                  />
                </View>
                <Text style={{color: '#7B6F72'}}>300g</Text>
              </View>
              <Progress.Bar
                progress={0.6}
                unfilledColor={'#F7F8F8'}
                color={'#C58BF2'}
                borderWidth={0}
                width={windowWidth - 80}
                height={12}
                style={{
                  marginTop: 10,
                  borderRadius: 30,
                }}
              />
            </View>

            <View style={styles.mealNutritionContainer}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.mealNutritionHeading}>Fats</Text>
                  <Image
                    source={require('./../../assets/Fat-Icon.png')}
                    style={styles.mealNutritionImg}
                  />
                </View>
                <Text style={{color: '#7B6F72'}}>140g</Text>
              </View>
              <Progress.Bar
                progress={0.4}
                unfilledColor={'#F7F8F8'}
                color={'#C58BF2'}
                borderWidth={0}
                width={windowWidth - 80}
                height={12}
                style={{
                  marginTop: 10,
                  borderRadius: 30,
                }}
              />
            </View>

            <View style={styles.mealNutritionContainer}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.mealNutritionHeading}>Carbo</Text>
                  <Image
                    source={require('./../../assets/rice.png')}
                    style={styles.mealNutritionImg}
                  />
                </View>
                <Text style={{color: '#7B6F72'}}>140g</Text>
              </View>
              <Progress.Bar
                progress={0.3}
                unfilledColor={'#F7F8F8'}
                color={'#C58BF2'}
                borderWidth={0}
                width={windowWidth - 80}
                height={12}
                style={{
                  marginTop: 10,
                  borderRadius: 30,
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('SleepTracker')}
        activeOpacity={0.8}>
        <LinearGradient
          colors={['#EEA4CE', '#C58BF2']}
          style={styles.bottombtnContainer}>
          <Text style={{fontSize: 25, color: '#fff'}}>+</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default MealSchedule;

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
    fontSize: 20,
    fontWeight: 'bold',
  },
  subheading: {
    color: '#7B6F72',
  },

  DietmainContainer: {
    margin: 10,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: windowWidth - 30,
    alignSelf: 'center',
  },
  DietInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  DietimgContainer: {
    paddingHorizontal: 6,
    paddingVertical: 10,
    borderRadius: 10,
    marginRight: 5,
  },
  Dietimg: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  DietitemName: {
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
    // margin: 10,
  },
  Dietitemduration: {
    color: '#7B6F72',
  },
  DietnextIcon: {
    width: 30,
    height: 30,
  },
  mealNutritionContainer: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 1,
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
  },
  mealNutritionImg: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
  },
  mealNutritionHeading: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottombtnContainer: {
    //  padding: 20,
    backgroundColor: '#000',
    borderRadius: 90,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
    shadowColor: '#000',
    elevation: 4,
  },
});
