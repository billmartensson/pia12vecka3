import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import Fancybox from './Fancybox';
import { useState } from 'react';

export default function App() {

  const [addname, onAddname] = useState("NAMN");

  const [people, setPeople] = useState([{key: 'Xerxes', lastname: "Xerxessson"}]);

  return (
    <View style={styles.container}>
      <Text>Hej</Text>

      <TextInput onChange={onAddname} value={addname} />

      <Button title='Lägg till' onPress={() => {
        var oldpeople = people;
        oldpeople.push({key: addname, lastname: addname});
        setPeople(oldpeople);
      }} />
      
      <FlatList
        data={people}
        renderItem={({item}) => <Fancybox />}
      />



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ff00',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  },
});
