import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  View,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {SelectList} from 'react-native-dropdown-select-list';
import ProgressVerticalLine from './../global/ProgressVerticalLine';

const windowWidth = Dimensions.get('window').width;

const notifyData = [
  {
    Icon: require('./../../assets/Latest-Pic.png'),
    Heading: 'Drinking 300ml Water',
    Time: 'About 3 minutes ago',
  },
  {
    Icon: require('./../../assets/Vector12.png'),
    Heading: 'Eat Snack (Fitbar)',
    Time: 'About 10 minutes ago',
  },
];

const ActivityTracker = () => {
  const [SelectedVal, setSelected] = useState('');
  const days = [
    {key: 1, value: 'Weekly'},
    {key: 2, value: 'Mothly'},
    {key: 3, value: 'Yearly'},
  ];
  const rendorActivity = item => {
    return (
      <View style={styles.ActivityContainer}>
        <View>
          <Image source={item.Icon} style={styles.ActivityImg} />
        </View>
        <View style={{marginHorizontal: 15}}>
          <Text numberOfLines={1} style={styles.ActivityHeading}>
            {item.Heading}
          </Text>
          <Text style={styles.ActivityTime}>{item.Time}</Text>
        </View>
        <View style={{position: 'absolute', right: 0}}>
          <Image
            source={require('./../../assets/Icon-More.png')}
            style={styles.ActivityImgMore}
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
            source={require('./../../assets/Back-Navs.png')}
            style={{width: 40, height: 40}}
          />
          <Text style={styles.MainText}>Activity Tracker</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('FinishedWorkout')}>
            <Image
              source={require('./../../assets/Detail-Navs.png')}
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.TodayTargetContainer}>
          <View style={styles.InnerContainer}>
            <Text style={styles.targetText}>Today Target</Text>

            <TouchableOpacity
              style={styles.checktargetbtnContainer}
              onPress={() => navigation.navigate('Login')}>
              <Image
                source={require('./../../assets/AddButton.png')}
                style={styles.addTargetBtn}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.targetBottomBoxContainer}>
            <View style={styles.InnerWhiteBox}>
              <Image
                source={require('./../../assets/glass1.png')}
                style={styles.whiteboxIcon}
              />
              <View>
                <Text style={styles.whiteBoxMainText}>8L</Text>
                <Text style={styles.whiteBoxSubText}>Water Intake</Text>
              </View>
            </View>
            <View style={styles.InnerWhiteBox}>
              <Image
                source={require('./../../assets/boots1.png')}
                style={styles.whiteboxIcon}
              />
              <View>
                <Text style={styles.whiteBoxMainText}>2400</Text>
                <Text style={styles.whiteBoxSubText}>FootSteps</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.progressHeadingContainer}>
          <Text style={[styles.ProgressMainText, {marginLeft: 20}]}>
            Workout Progress
          </Text>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#9DCEFF', '#92A3FD']}
            style={styles.dropdownbox}>
            <SelectList
              setSelected={val => setSelected(val)}
              data={days}
              save="value"
              boxStyles={{
                borderWidth: 0,
                width: 110,
              }}
              inputStyles={styles.dropdowninpt}
              dropdownStyles={{borderWidth: 0}}
              dropdownTextStyles={styles.dropdowninptdrop}
              placeholder="weekly"
              maxHeight={90}
            />
          </LinearGradient>
        </View>

        <ProgressVerticalLine />

        <View style={styles.LatestActivityContainer}>
          <View style={styles.latestActivityTopHeading}>
            <Text style={styles.latestActivityMainText}>Latest Activity</Text>
            <Text style={styles.latestActivitySubText}> See More</Text>
          </View>
          <FlatList
            data={notifyData}
            renderItem={({item}) => rendorActivity(item)}
            style={{width: '100%'}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ActivityTracker;

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
  TodayTargetContainer: {
    backgroundColor: '#C3CEFE',
    width: windowWidth - 50,
    borderRadius: 20,
  },
  InnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  targetText: {
    color: '#000',
    fontSize: 18,
    margin: 20,
  },
  checktargetbtnContainer: {
    margin: 20,
  },
  addTargetBtn: {
    width: 30,
    height: 30,
  },
  targetBottomBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  InnerWhiteBox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  whiteboxIcon: {
    width: 30,
    height: 40,
    resizeMode: 'stretch',
  },
  whiteBoxMainText: {
    color: '#92A3FD',
    fontSize: 20,
    marginLeft: 10,
  },
  whiteBoxSubText: {
    color: 'gray',
    marginHorizontal: 10,
  },
  LatestActivityContainer: {
    width: windowWidth - 50,
    marginVertical: 30,
  },
  latestActivityTopHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 20,
    alignItems: 'center',
  },
  latestActivityMainText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  latestActivitySubText: {
    color: 'gray',
    fontSize: 16,
  },

  ActivityContainer: {
    width: '98%',
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
  },
  ActivityImg: {
    width: 50,
    height: 50,
  },
  ActivityHeading: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
    width: '80%',
  },
  ActivityTime: {
    color: 'gray',
  },
  ActivityImgMore: {
    width: 25,
    height: 25,
  },
  progressHeadingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth - 40,
    alignItems: 'center',
    marginVertical: 20,
  },
  ProgressMainText: {
    color: '#000',
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
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
});
