import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import Home from './../main/Home';
import Profile from './../main/Profile';
import Notification from './../main/Notification';
import ActivityTracker from './../main/ActivityTracker';
import FinishedWorkout from './../main/FinishedWorkout';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#C58BF2',
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
              source={require('./../../assets/Home.png')}
              style={[styles.Icon, {tintColor: color}]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
              source={require('./../../assets/Activity.png')}
              style={[styles.Icon, {tintColor: color}]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ActivityTracker"
        component={ActivityTracker}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#9DCEFF', '#92A3FD']}
              style={styles.searchIconContainer}>
              <Image
                source={require('./../../assets/Search.png')}
                style={[styles.SearchIcon, {tintColor: '#fff'}]}
              />
            </LinearGradient>
          ),
        }}
      />
      <Tab.Screen
        name="FinishedWorkout"
        component={FinishedWorkout}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
              source={require('./../../assets/Camera.png')}
              style={[styles.Icon, {tintColor: color}]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Image
              source={require('./../../assets/Profile1.png')}
              style={[styles.Icon, {tintColor: color}]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  Icon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  searchIconContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 60,
    marginBottom: 40,
    shadowColor: '#838383',
    elevation: 9,
  },
  SearchIcon: {
    width: 30,
    height: 30,
  },
});
