import React from 'react';
import Home from './src/screens/home';
import GenericList from './src/screens/genericPageList'
import './src/services/server'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitionPresets } from 'react-navigation-stack';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
  
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => {
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
      </Stack.Navigator>
    </NavigationContainer>
     );
 

}

