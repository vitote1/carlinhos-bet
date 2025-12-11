
import React from 'react';
import { View, StyleSheet, StatusBar as RNStatusBar } from 'react-native';
import Back from '../comp/background';
import UserHeader from '../comp/userHeader';
import MenuOption from '../comp/menuOption';
import { StatusBar } from 'expo-status-bar';
import NavBar from '../comp/navBar';

const TelaUsuario = () => {
  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <Back style={styles.background} />
      <NavBar onSaldo = {1}/>
      <View style={styles.content}>
        <UserHeader />
        <MenuOption />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: RNStatusBar.currentHeight,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
});

export default TelaUsuario;