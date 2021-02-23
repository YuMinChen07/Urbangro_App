import * as React from 'react';

// navigate between Screens
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './app/Screens/LoginScreen';
import DeviceListScreen from './app/Screens/DeviceListScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: 'UrbanGro' }}
        />
        <Stack.Screen name="DeviceListScreen" component={DeviceListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;