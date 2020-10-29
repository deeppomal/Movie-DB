import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/homeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MovieDetail from './src/screens/movieDetails';
import MovieItem from './src/component/movieListItem';
import Tab1 from './src/screens/tabs/tabOne';
import Tab2 from './src/screens/tabs/tabTwo';
import TVDetail from './src/screens/tvDetails';
import TVItem from './src/component/tvListItem';



export default function App() {
  
const Stack = createStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="tab1" component={Tab1} />
          <Stack.Screen name="tab2" component={Tab2} />
          <Stack.Screen name="movieItem" component={MovieItem} />
          <Stack.Screen name="tvItem" component={TVItem} />
          <Stack.Screen name="movieDetails" component={MovieDetail} />
          <Stack.Screen name="tvDetails" component={TVDetail} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}