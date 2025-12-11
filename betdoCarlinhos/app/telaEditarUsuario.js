import { View, StyleSheet, StatusBar as RNStatusBar } from 'react-native';
import React from 'react';
import Back from '../comp/background';
import Editar from '../comp/camposEditarUsuario';
import NavBar from '../comp/navBar';
import { StatusBar } from 'expo-status-bar';
export default function Index() {
  return (

    <View style={styles.container}> 
    <StatusBar style="dark" />
      <Back style={StyleSheet.absoluteFill}/>
      <NavBar onSaldo = {0} onUsuario = {0}/>
          <View style={styles.divEditar}>
            <Editar/>
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
    divEditar: {
      marginTop: 150,
    },

});