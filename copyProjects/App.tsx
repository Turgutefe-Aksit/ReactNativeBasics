/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  useColorScheme,
  View,
} from 'react-native';

import StartScreen from './src/StartScreen';
import searchScreen from './src/restorant/screens/SearchScreen';
import ResultShowScreen from './src/restorant/screens/ResultShowScreen';
import LoginScreen from './src/firebaselogin/screens/LoginScreen';
import HomeScreen from './src/firebaselogin/screens/HomeScreen';
import BlogCreateScreen from './src/blogApp/screens/BlogCreateScreen';
import BlogIndexScreen from './src/blogApp/screens/BlogIndexScreen';


const Stack = createNativeStackNavigator();



function App(): React.JSX.Element {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={StartScreen} />
        <Stack.Screen name="StartRestorant" component={searchScreen} />
        <Stack.Screen name="StartFireBase" component={LoginScreen} />
        <Stack.Screen name="ResultShow" component={ResultShowScreen} />
        <Stack.Screen name="FireBaseHome" component={HomeScreen} />
        <Stack.Screen name="CreateScreen" component={BlogCreateScreen} />
        <Stack.Screen name="IndexScreen" component={BlogIndexScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
  container:{
    flex :1,
    alignItems:'center',
    justifyContent:'center',
    
  },
  app:{
    margin:20,
    width: '50%',
  }
  
});

export default App;
