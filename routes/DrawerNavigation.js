// routes/DrawerNavigation.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import EventStack from './EventStack';
import FeedbackScreen from '../screens/FeedbackScreen';
import RewardsScreen from '../screens/RewardsScreen';
import YourEventsScreen from '../screens/YourEventsScreen';
import CulturalEventsScreen from '../screens/CulturalEventsScreen';
import OurCultureScreen from '../screens/OurCultureScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function FeedbackStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="FeedbackStackScreen" component={FeedbackScreen} options={{ title: 'Feedback' }} />
    </Stack.Navigator>
  );
}

function RewardsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="RewardsStackScreen" component={RewardsScreen} options={{ title: 'Rewards' }} />
    </Stack.Navigator>
  );
}

function YourEventsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="YourEventsStackScreen" component={YourEventsScreen} options={{ title: 'Your Events' }} />
    </Stack.Navigator>
  );
}

function CulturalEventsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="CulturalEventsStackScreen" component={CulturalEventsScreen} options={{ title: 'Cultural Events' }} />
    </Stack.Navigator>
  );
}

function OurCultureStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="OurCultureStackScreen" component={OurCultureScreen} options={{ title: 'Our Culture' }} />
    </Stack.Navigator>
  );
}

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={EventStack} options={{ title: 'Home' }} />
      <Drawer.Screen name="Feedback" component={FeedbackStack} />
      <Drawer.Screen name="Rewards" component={RewardsStack} />
      <Drawer.Screen name="YourEvents" component={YourEventsStack} />
      <Drawer.Screen name="CulturalEvents" component={CulturalEventsStack} />
      <Drawer.Screen name="OurCulture" component={OurCultureStack} />
    </Drawer.Navigator>
  );
}
