import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/home';
import GenericList from './src/screens/genericPageList'
import Header from './src/components/header/header';
import './src/services/server'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
  
     <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}  
          options={{
          title: 'the bee.  ミツバチ',
          headerStyle: {
            backgroundColor: '#ffdfaf',
          },
          headerTintColor: '#333',
    
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 17,
          },
        }} />

      <Stack.Screen name="GenericList" component={GenericList} 
       options={{
          title: 'the bee.  ミツバチ',
          headerStyle: {
            backgroundColor: '#ffdfaf',
          },
          headerTintColor: '#333',
    
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 17,
          },
        }} />

        </Stack.Navigator>
      </NavigationContainer>

 
  );
}

const styles = StyleSheet.create({
  main: {
    // paddingTop: 25,
  },
  header:{

  }
});