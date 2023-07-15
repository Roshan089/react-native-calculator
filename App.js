import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Loader from './view/loader';
import { useState,react } from 'react';
import MainScreen from './view/mainScreen';

export default function App() {
  const[load,setload]=useState(false)
  setTimeout(()=>setload(true),2000)
  return (
    <View style={styles.container}>
      {load ? <MainScreen/>: <Loader/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
