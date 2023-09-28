import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default function Readmore({navigation, route}) {

    const [readnumber, setReadnumber] = useState(0);

  return (
    <View>
      <Text>READ MORE {route.params.person.lastname} </Text>

      <Text>{readnumber}</Text>

      <Button title='PLUS' onPress={() => {
        setReadnumber(readnumber + 1);
      }} />


      <Button title='Gå tredje vyn' onPress={() => {
        navigation.navigate("Tredje");
      }} />


    </View>
  );
}
