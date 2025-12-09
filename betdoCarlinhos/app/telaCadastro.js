import { Text, View, StyleSheet, ScrollView, StatusBar as RNStatusBar } from 'react-native';
import React from 'react';
import Back from '../comp/background';
import Cadastro from '../comp/divCadastro';
import NavBar from '../comp/navBar';
import { StatusBar } from 'expo-status-bar';
export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Back style={StyleSheet.absoluteFill} />
       <NavBar />
        <View style={styles.divCadastro}>
          <Cadastro />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingTop: RNStatusBar.currentHeight,
  },
  divCadastro: {
    marginTop: 150,
  },
});