import { Text, View, StyleSheet, ScrollView, StatusBar as RNStatusBar } from 'react-native';
import React from 'react';
import Back from '../comp/background';
import Cadastro from '../comp/divCadastro';
import NavBar from '../comp/navBar';
import { StatusBar } from 'expo-status-bar';
export default function Index() {
  return (

    <View style={styles.container}>
      <StatusBar style='dark' />
      <Back style={StyleSheet.absoluteFill} />
      <View style={styles.navBarContainer}>
        <NavBar onSaldo={0} onUsuario={0} />
      </View>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.divCadastro}>
          <Cadastro />
        </View>
      </ScrollView>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingTop: RNStatusBar.currentHeight,
  },
  scrollViewContent: {
    alignItems: 'center',
    height: '120%',
  },
  divCadastro: {
    marginTop: 120,
  },
 
});