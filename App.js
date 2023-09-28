import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import Fancybox from './Fancybox';
import { useState } from 'react';
import Readmore from './Readmore';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './Welcome';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Starten' component={Welcome} />

        <Stack.Screen name='Läsmer' component={Readmore} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}
