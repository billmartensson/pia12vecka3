import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function Fancybox() {

  return (
    <View style={fancystyles.redbox}>
      <Text>Fin box</Text>
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