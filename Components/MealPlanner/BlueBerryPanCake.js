import {
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  View,
  FlatList,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Dot from '../Global/Dot';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BlueBerryPanCake = ({navigation}) => {
  const nutritionData = [
    {
      img: require('./../assets/Calories-Icon.png'),
      title: '180kCal',
    },
    {
      img: require('./../assets/Fat-Icon.png'),
      title: '30g fats',
    },
    {
      img: require('./../assets/Proteins-Icon.png'),
      title: '20g proteins',
    },
    {
      img: require('./../assets/rice.png'),
      title: '50g carbo',
    },
  ];
  const IngredientsData = [
    {
      img: require('./../assets/Flour-Icon.png'),
      title: 'Wheat Flour',
      qnty: '100gr',
    },
    {
      img: require('./../assets/Sugar-Icon.png'),
      title: 'Sugar',
      qnty: '3 tbsp',
    },
    {
      img: require('./../assets/baking.png'),
      title: 'Baking Soda',
      qnty: '2 tsp',
    },
    {
      img: require('./../assets/Eggs-Icon.png'),
      title: 'Eggs',
      qnty: '2 items',
    },
    {
      img: require('./../assets/Flour-Icon.png'),
      title: 'Wheat Flour',
      qnty: '100gr',
    },
    {
      img: require('./../assets/Sugar-Icon.png'),
      title: 'Sugar',
      qnty: '3 tbsp',
    },
  ];

  return (
    <View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#9DCEFF', '#92A3FD']}
        style={styles.linearGradientTop}>
        <View style={styles.TopHeader}>
          <Image
            source={require('./../assets/Back-Navs.png')}
            style={{width: 40, height: 40}}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate('FinishedWorkout')}>
            <Image
              source={require('./../assets/Detail-Navs.png')}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={require('./../assets/pancake.png')}
            style={{
              width: '100%',
              height: 300,
              resizeMode: 'contain',
              alignSelf: 'center',
            }}
          />
        </View>
      </LinearGradient>

      <View style={styles.whitebgContainer}>
        <ScrollView>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Blueberry Pancake</Text>
            <Text style={styles.subheading}>
              by
              <Text style={{color: '#92A3FD'}}> James Ruth</Text>
            </Text>
          </View>

          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Nutrition</Text>
          </View>

          <View>
            <FlatList
              data={nutritionData}
              horizontal={true}
              renderItem={({item}) => (
                <View style={styles.nutritionMainContainer}>
                  <Image source={item.img} style={styles.nutritionImg} />
                  <Text style={styles.nutritionTitle}>{item.title}</Text>
                </View>
              )}
              style={{marginLeft: 20}}
            />
          </View>

          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Descriptions</Text>
            <Text style={styles.subheading}>
              Pancakes are some people's favorite breakfast, who doesn't like
              pancakes? Especially with the real honey splash on top of the
              pancakes, of course everyone loves that! besides being
              <Text style={{color: '#92A3FD'}}> Read More...</Text>
            </Text>
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
            <Text style={[styles.heading, {width: '70%'}]}>
              Ingredients That You Will Need
            </Text>
            <Text style={styles.subheading}>6 items</Text>
          </View>

          <View>
            <FlatList
              data={IngredientsData}
              horizontal={true}
              renderItem={({item}) => (
                <View style={styles.IngredientMainContainer}>
                  <View style={styles.IngredientImgContainer}>
                    <Image source={item.img} style={styles.IngredientImg} />
                  </View>
                  <Text style={styles.IngredientTitle}>{item.title}</Text>
                  <Text style={styles.Ingredientqnty}>{item.qnty}</Text>
                </View>
              )}
              style={{marginLeft: 20}}
            />
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
            <Text style={[styles.heading, {width: '70%'}]}>Step by Step</Text>
            <Text style={styles.subheading}>8 Steps</Text>
          </View>

          <View>
            <View style={styles.setpsContainer}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: '#C58BF2', fontSize: 18}}>01</Text>
                  <Dot />
                </View>
                <View
                  style={{
                    borderLeftColor: '#C58BF2',
                    borderLeftWidth: 1,
                    paddingLeft: 20,
                    borderStyle: 'dashed',
                    zIndex: -1,
                    marginLeft: -13,
                    width: '90%',
                  }}>
                  <Text style={styles.innerHeading}>Step 1</Text>
                  <Text style={styles.innerContent}>
                    Prepare all of the ingredients that needed
                  </Text>
                </View>
              </View>
            </View>

            <View style={[styles.setpsContainer, {marginTop: -10}]}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: '#C58BF2', fontSize: 18}}>02</Text>
                  <Dot />
                </View>
                <View
                  style={{
                    borderLeftColor: '#C58BF2',
                    borderLeftWidth: 1,
                    paddingLeft: 20,
                    borderStyle: 'dashed',
                    zIndex: -1,
                    marginLeft: -13,
                    width: '90%',
                  }}>
                  <Text style={styles.innerHeading}>Step 2</Text>
                  <Text style={styles.innerContent}>
                    Mix flour, sugar, salt, and baking powder
                  </Text>
                </View>
              </View>
            </View>

            <View style={[styles.setpsContainer, {marginTop: -10}]}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: '#C58BF2', fontSize: 18}}>03</Text>
                  <Dot />
                </View>
                <View
                  style={{
                    borderLeftColor: '#C58BF2',
                    borderLeftWidth: 1,
                    paddingLeft: 20,
                    borderStyle: 'dashed',
                    zIndex: -1,
                    marginLeft: -13,
                    width: '90%',
                  }}>
                  <Text style={styles.innerHeading}>Step 3</Text>
                  <Text style={styles.innerContent}>
                    In a seperate place, mix the eggs and liquid milk until
                    blended
                  </Text>
                </View>
              </View>
            </View>

            <View style={[styles.setpsContainer, {marginTop: -10}]}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: '#C58BF2', fontSize: 18}}>04</Text>
                  <Dot />
                </View>
                <View
                  style={{
                    borderLeftColor: '#C58BF2',
                    borderLeftWidth: 1,
                    paddingLeft: 20,
                    borderStyle: 'dashed',
                    zIndex: -1,
                    marginLeft: -13,
                    width: '90%',
                  }}>
                  <Text style={styles.innerHeading}>Step 4</Text>
                  <Text style={styles.innerContent}>
                    Put the egg and milk mixture into the dry ingredients, Stir
                    untul smooth and smooth
                  </Text>
                </View>
              </View>
            </View>

            <View style={[styles.setpsContainer, {marginTop: -10}]}>
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: '#C58BF2', fontSize: 18}}>05</Text>
                  <Dot />
                </View>
                <View
                  style={{
                    paddingLeft: 20,
                    width: '90%',
                    zIndex: -1,
                    marginLeft: -13,
                  }}>
                  <Text style={styles.innerHeading}>Step 5</Text>
                  <Text style={styles.innerContent}>
                    Mix flour, sugar, salt, and baking powder
                  </Text>
                </View>
              </View>
            </View>

            <TouchableOpacity
              style={styles.gradientButtonContainer}
              onPress={() => navigation.navigate('CompleteProfile')}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#9DCEFF', '#92A3FD']}
                style={styles.linearGradient}>
                <Text style={styles.buttonText}>Add to Breakfast Meal</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default BlueBerryPanCake;

const styles = StyleSheet.create({
  linearGradientTop: {
    height: windowHeight,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  TopHeader: {
    width: windowWidth - 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    marginBottom: 0,
  },
  whitebgContainer: {
    backgroundColor: '#fff',
    width: '100%',
    marginTop: 300,
    paddingVertical: 15,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  headingContainer: {
    margin: 20,
  },
  heading: {
    color: '#000',
    fontSize: 22,
    fontWeight: 'bold',
  },
  subheading: {
    color: '#7B6F72',
  },
  nutritionMainContainer: {
    backgroundColor: '#eaeeff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 8,
  },
  nutritionTitle: {
    color: '#000',
  },
  nutritionImg: {
    height: 20,
    width: 20,
    marginHorizontal: 5,
  },
  IngredientMainContainer: {
    marginHorizontal: 8,
  },
  IngredientImgContainer: {
    backgroundColor: '#E8E8E8',
    padding: 15,
    borderRadius: 15,
  },
  IngredientImg: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  IngredientTitle: {
    color: '#000',
    marginVertical: 2,
  },
  Ingredientqnty: {
    color: '#7B6F72',
    marginVertical: 2,
  },
  setpsContainer: {
    // flexDirection: 'row',
    width: windowWidth - 50,
    alignSelf: 'center',
    marginTop: 15,
  },
  setpContentContainer: {
    width: '80%',
    marginTop: 10,
    marginHorizontal: 10,
  },
  innerHeading: {
    color: '#000',
    fontWeight: '500',
    fontSize: 18,
    marginBottom: 10,
  },
  innerContent: {
    color: 'gray',
    marginBottom: 40,
  },
  gradientButtonContainer: {
    width: windowWidth - 80,
    alignSelf: 'center',
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
});
