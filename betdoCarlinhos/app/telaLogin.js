import { View, StyleSheet, StatusBar as RNStatusBar } from 'react-native';
import React from 'react';
import Back from '../comp/background';
import Login from '../comp/divLogin';
import NavBar from '../comp/navBar';
import { StatusBar } from 'expo-status-bar';
export default function Index() {
  return (

    <View style={styles.container}> 
    <StatusBar style="dark" />
      <Back style={StyleSheet.absoluteFill}/>
          
          <View style={styles.divLogin}>
            <Login/>
          </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: RNStatusBar.currentHeight,
    },
    divLogin: {
      marginTop: 150,
    },

});