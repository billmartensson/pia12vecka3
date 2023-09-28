import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default function Fancybox(props) {

    const [siffran, setSiffran] = useState(0);

  return (
    <View style={fancystyles.redbox}>
      <Text>{props.name.lastname}</Text>
      
      <Text>{siffran}</Text>

      <Button title="Klicka" onPress={() => {
        setSiffran(siffran + 1);
      }} />

    </View>
  );
}

const fancystyles = StyleSheet.create({
    redbox: {
      flex: 1,
      backgroundColor: '#ff0000',
      alignItems: 'center',
      justifyContent: 'center',
      width: 100,
      height: 100,
      marginTop: 5
    },
  });