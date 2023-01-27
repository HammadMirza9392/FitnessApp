import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import SignUp from './Components/FormScreens/SignUp';
import CompleteProfile from './Components/FormScreens/CompleteProfile';
import WhatYourGoal1 from './Components/WhatYourGoal/WhatYourGoal1';
import WhatYourGoal2 from './Components/WhatYourGoal/WhatYourGoal2';
import WhatYourGoal3 from './Components/WhatYourGoal/WhatYourGoal3';
import Login from './Components/FormScreens/Login';
import Welcome from './Components/WhatYourGoal/Welcome';

import BottomNavigation from './Components/Global/BottomNavigation';

import Chart from './Components/Global/Chart';
import WorkoutTracker from './Components/WorkOut/WorkoutTracker';
import FullBodyWorkout from './Components/WorkOut/FullBodyWorkout';
import AddSchedule from './Components/WorkOut/AddSchedule';

import Workout from './Components/WorkOut/Workout';
import MealPlanner from './Components/MealPlanner/MealPlanner';
import BreakFast from './Components/MealPlanner/BreakFast';
import OnBoarding1 from './Components/OnBoarding/OnBoarding1';
import OnBoarding2 from './Components/OnBoarding/OnBoarding2';
import OnBoarding3 from './Components/OnBoarding/OnBoarding3';
import OnBoarding4 from './Components/OnBoarding/OnBoarding4';
import Splash1 from './Components/OnBoarding/Splash1';
import Splash2 from './Components/OnBoarding/Splash2';

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Splash1'
     screenOptions={{
    headerShown: false,
     presentation: 'transparentModal'
   
  }} >
      <Stack.Screen name="Splash1" component={Splash1} />
      <Stack.Screen name="Splash2" component={Splash2}/>
      <Stack.Screen name="OnBoarding1" component={OnBoarding1} />
      <Stack.Screen name="OnBoarding2" component={OnBoarding2} />
      <Stack.Screen name="OnBoarding3" component={OnBoarding3} />
      <Stack.Screen name="OnBoarding4" component={OnBoarding4} />

      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="CompleteProfile" component={CompleteProfile}  />
      <Stack.Screen name="WhatYourGoal1" component={WhatYourGoal1} />
      <Stack.Screen name="WhatYourGoal2" component={WhatYourGoal2}  />
      <Stack.Screen name="WhatYourGoal3" component={WhatYourGoal3}/>
      <Stack.Screen name="Login" component={Login}  />
      <Stack.Screen name="Welcome" component={Welcome} />

      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />

      <Stack.Screen name="WorkoutTracker" component={WorkoutTracker}  />
      <Stack.Screen name="FullBodyWorkout" component={FullBodyWorkout} />
      <Stack.Screen name="Workout" component={Workout}  />
      <Stack.Screen name="AddSchedule" component={AddSchedule}  />

      <Stack.Screen name="MealPlanner" component={MealPlanner} />
      <Stack.Screen name="BreakFast" component={BreakFast} />
      
      <Stack.Screen name="Chart" component={Chart} />
     

    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})