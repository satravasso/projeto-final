import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import Home from './src/screens/home';
import GenericList from './src/screens/genericPageList'
import './src/services/server'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitionPresets } from 'react-navigation-stack';



const Stack = createNativeStackNavigator();


function Modal  ({route}) {
  const data = route.params.data;
  return(<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Text style={{ fontSize: 30 }}>This is a modal!</Text>
  <Button onPress={() => console.log()} title="Dismiss" />
</View>)
}

export default function App() {
  return (
  
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({route}) => {
          return {gestureEnabled: true,
          cardOverlayEnabled: true,
          ...TransitionPresets.ModalTransition
          }
        }}
        mode="modal"
        headermode="nome"
      >
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
            <Stack.Screen name="Modal" component={Modal}    mode="modal" headerMode="none"       />
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