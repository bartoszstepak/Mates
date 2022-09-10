import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/components/login/loginComponent';
import gropusDashboard from './src/components/gropusDashboard/groupsDashboardComponent';

const Stack = createNativeStackNavigator();

export default function App() {
  console.log("APP executed");
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='LogDUPAin' component={Login} />
      <Stack.Screen name='TodoList' component={gropusDashboard} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

