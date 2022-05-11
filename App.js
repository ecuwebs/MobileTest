import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import Colors from './app/config/colors';
import RootNavigator from './app/navigation/RootNavigator';
   
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle='light-content' backgroundColor={Colors.primary}/>
      <RootNavigator/> 
    </NavigationContainer>
  );
}