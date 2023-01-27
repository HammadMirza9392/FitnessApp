import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Welcome1 from './Components/OnBoarding/Welcome1'
import Welcome2 from './Components/OnBoarding/Welcome2';
import OnBoardSlide from './Components/OnBoarding/OnBoardSlide';
import SignUp from './Components/FormScreens/SignUp';
import CompleteProfile from './Components/FormScreens/CompleteProfile';
import WhatYourGoal1 from './Components/WhatYourGoal/WhatYourGoal1';
import WhatYourGoal2 from './Components/WhatYourGoal/WhatYourGoal2';
import WhatYourGoal3 from './Components/WhatYourGoal/WhatYourGoal3';
import Login from './Components/FormScreens/Login';
import Welcome from './Components/WhatYourGoal/Welcome';
import Home from './Components/Main/Home';
import Notification from './Components/Main/Notification';
import Profile from './Components/Main/Profile';
import BottomNavigation from './Components/Global/BottomNavigation';
import FinishedWorkout from './Components/Main/FinishedWorkout';
import Chart from './Components/Global/Chart';
import WorkoutTracker from './Components/WorkOut/WorkoutTracker';
import FullBodyWorkout from './Components/WorkOut/FullBodyWorkout';
import AddSchedule from './Components/WorkOut/AddSchedule';
import ActivityTracker from './Components/Main/ActivityTracker';
import Workout from './Components/WorkOut/Workout';
import MealPlanner from './Components/MealPlanner/MealPlanner';



const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='MealPlanner'>

      <Stack.Screen name="SignUp" component={SignUp}  options={{headerShown:false}}/>
      <Stack.Screen name="MealPlanner" component={MealPlanner}  options={{headerShown:false}}/>
      {/* <Stack.Screen name="ActivityTracker" component={ActivityTracker}  options={{headerShown:false}}/> */}
      <Stack.Screen name="Workout" component={Workout}  options={{headerShown:false}}/>
      <Stack.Screen name="WorkoutTracker" component={WorkoutTracker}  options={{headerShown:false}}/>
      <Stack.Screen name="FullBodyWorkout" component={FullBodyWorkout}  options={{headerShown:false}}/>
      <Stack.Screen name="AddSchedule" component={AddSchedule}  options={{headerShown:false}}/>
      <Stack.Screen name="BottomNavigation" component={BottomNavigation}  options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={Login}  options={{headerShown:false}}/>
      <Stack.Screen name="Welcome" component={Welcome}  options={{headerShown:false}}/>
      <Stack.Screen name="WhatYourGoal1" component={WhatYourGoal1}  options={{headerShown:false}}/>
      <Stack.Screen name="WhatYourGoal2" component={WhatYourGoal2}  options={{headerShown:false}}/> 
      <Stack.Screen name="Home" component={Home}  options={{headerShown:false}}/>
      {/* <Stack.Screen name="FinishedWorkout" component={FinishedWorkout}  options={{headerShown:false}}/> */}
      <Stack.Screen name="Chart" component={Chart}  options={{headerShown:false}}/>
      {/* <Stack.Screen name="Profile" component={Profile}  options={{headerShown:false}}/>
     
      <Stack.Screen name="Notification" component={Notification}  options={{headerShown:false}}/>
     */}
      <Stack.Screen name="WhatYourGoal3" component={WhatYourGoal3}  options={{headerShown:false}}/>
      <Stack.Screen name="CompleteProfile" component={CompleteProfile}  options={{headerShown:false}}/>
      <Stack.Screen name="Welcome1" component={Welcome1} options={{headerShown:false}} />
      <Stack.Screen name="Welcome2" component={Welcome2}  options={{headerShown:false}}/>
      <Stack.Screen name="OnBoarding" component={OnBoardSlide}  options={{headerShown:false}}/>

    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})