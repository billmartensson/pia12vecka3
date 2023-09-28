import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import Fancybox from './Fancybox';
import { useState } from 'react';
import Readmore from './Readmore';

export default function Welcome({navigation}) {

  const [addname, onAddname] = useState("NAMN");

  const [people, setPeople] = useState([{key: 'Xerxes', lastname: "Xerxessson"}]);

  const [showReadmore, setShowReadmore] = useState(true);

  function letsAddPerson() {
    if(addname != "") {
      const newlist = people.concat({key: addname, lastname: addname});
      setPeople(newlist);
    }
  }

  return (
    <View style={styles.container}>
        
        <Button title='Läsa mera' onPress={() => {
            navigation.navigate("Läsmer", {fruit: "Papaya"});
        }} />

        <Text>Hej</Text>

      <TextInput onChangeText={onAddname} value={addname} />

      <Button title='Lägg till' onPress={() => {
        letsAddPerson();
      }} />
      
      <FlatList
        data={people}
        renderItem={({item}) => <Fancybox name={item} />}
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
    marginTop: 0
  },
});
