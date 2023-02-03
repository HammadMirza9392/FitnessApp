
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import SignUp from './src/screens/formscreens/SignUp';
import Login from './src/screens/formscreens/Login';
import CompleteProfile from './src/screens/formscreens/CompleteProfile';
import WhatYourGoal1 from './src/screens/whatyourgoal/WhatYourGoal1';
import WhatYourGoal2 from './src/screens/whatyourgoal/WhatYourGoal2';
import WhatYourGoal3 from './src/screens/whatyourgoal/WhatYourGoal3';

import Welcome from './src/screens/whatyourgoal/Welcome';

import BottomNavigation from './src/screens/global/BottomNavigation';
import Chart from './src/screens/global/Chart';

import WorkoutTracker from './src/screens/workout/WorkoutTracker';
import FullBodyWorkout from './src/screens/workout/FullBodyWorkout';
import AddSchedule from './src/screens/workout/AddSchedule';
import Workout from './src/screens/workout/Workout';

import MealPlanner from './src/screens/mealplanner/MealPlanner';
import BreakFast from './src/screens/mealplanner/BreakFast';
import BlueBerryPanCake from './src/screens/mealplanner/BlueBerryPanCake';
import MealSchedule from './src/screens/mealplanner/MealSchedule';

import OnBoarding1 from './src/screens/onboarding/OnBoarding1';
import OnBoarding2 from './src/screens/onboarding/OnBoarding2';
import OnBoarding3 from './src/screens/onboarding/OnBoarding3';
import OnBoarding4 from './src/screens/onboarding/OnBoarding4';
import Splash1 from './src/screens/onboarding/Splash1';
import Splash2 from './src/screens/onboarding/Splash2';


import Udummy from './src/screens/exercise/Udummy';

import SleepTracker from './src/screens/sleeptracker/SleepTracker';

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='BreakFast'
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
      <Stack.Screen name="BlueBerryPanCake" component={BlueBerryPanCake} />
      <Stack.Screen name="MealSchedule" component={MealSchedule} />

      <Stack.Screen name="SleepTracker" component={SleepTracker} />

      
      <Stack.Screen name="Chart" component={Chart} />
      <Stack.Screen name="Udummy" component={Udummy} />
     

    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

