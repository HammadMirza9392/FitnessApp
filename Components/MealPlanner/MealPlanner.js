import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {SelectList} from 'react-native-dropdown-select-list';

const windowWidth = Dimensions.get('window').width;

const MealPlanner = () => {
  const [SelectedVal, setSelected] = useState('');
  const days = [
    {key: 1, value: 'Weekly'},
    {key: 2, value: 'Mothly'},
    {key: 3, value: 'Yearly'},
  ];
  const todayMealData = [
    {
      Icon: require('./../assets/nigiri1.png'),
      Heading: 'Salmon Nigiri',
      Time: 'Today | 7am',
      lastIcon: require('./../assets/Reminders.png'),
    },
    {
      Icon: require('./../assets/glass-of-milk1.png'),
      Heading: 'Lowfat Milk',
      Time: 'Today | 8am',
      lastIcon: require('./../assets/Reminders2.png'),
    },
  ];
  const rendorTodayMeal = item => {
    return (
      <View style={styles.TodayMealContainer}>
        <View>
          <Image source={item.Icon} style={styles.TodayMealImg} />
        </View>
        <View style={{marginHorizontal: 15}}>
          <Text numberOfLines={1} style={styles.TodayMealHeading}>
            {item.Heading}
          </Text>
          <Text style={styles.TodayMealTime}>{item.Time}</Text>
        </View>
        <View style={{position: 'absolute', right: 0}}>
          <Image source={item.lastIcon} style={styles.TodayMealImgMore} />
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
          <Text style={styles.MainText}>Meal Planner</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('FinishedWorkout')}>
            <Image
              source={require('./../assets/Detail-Navs.png')}
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
          <Text style={[styles.heading, {marginLeft: 20}]}>
            Meal Nutritions
          </Text>
          <View style={styles.dropdownbox}>
            <SelectList
              setSelected={val => setSelected(val)}
              data={days}
              save="value"
              boxStyles={{
                borderWidth: 0,
                width: 110,
                // marginLeft: 20,
              }}
              inputStyles={styles.dropdowninpt}
              dropdownStyles={{borderWidth: 0}}
              dropdownTextStyles={styles.dropdowninptdrop}
              placeholder="weekly"
              maxHeight={90}
            />
          </View>
        </View>
        <Image
          source={require('./../assets/GraphMeal.png')}
          style={{
            // width: '90%',
            height: 180,
            alignSelf: 'center',
            resizeMode: 'contain',
            marginTop: 20,
          }}
        />

        <View style={styles.checkContainer}>
          <View>
            <Text style={styles.targetText}>Daily Meal Schedule</Text>
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
          <Text style={[styles.heading, {marginLeft: 20}]}>Today Meals</Text>
          <View style={styles.dropdownbox}>
            <SelectList
              setSelected={val => setSelected(val)}
              data={days}
              save="value"
              boxStyles={{
                borderWidth: 0,
                width: 110,
                // marginLeft: 20,
              }}
              inputStyles={styles.dropdowninpt}
              dropdownStyles={{borderWidth: 0}}
              dropdownTextStyles={styles.dropdowninptdrop}
              placeholder="weekly"
              maxHeight={90}
            />
          </View>
        </View>
        <View>
          <FlatList
            data={todayMealData}
            renderItem={({item}) => rendorTodayMeal(item)}
            style={{width: '100%'}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealPlanner;

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
  },
  MainText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  headingContainer: {
    margin: 25,
  },
  heading: {
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
  },
  dropdownbox: {
    borderColor: '#97b7fe',
    borderWidth: 1,
    borderRadius: 40,
    backgroundColor: '#97b7fe',
    marginRight: 10,
  },
  dropdowninpt: {
    color: '#fff',
  },
  dropdowninptdrop: {
    color: '#fff',
    width: 80,
  },
  checkContainer: {
    backgroundColor: '#eaf0ff',
    width: windowWidth - 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    paddingRight: 20,
    alignSelf: 'center',
    marginVertical: 20,
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

  TodayMealContainer: {
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
  TodayMealImg: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  TodayMealHeading: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  TodayMealTime: {
    color: 'gray',
  },
  TodayMealImgMore: {
    width: 25,
    height: 25,
    marginRight: 20,
  },
});
