import { Text, View, StyleSheet, StatusBar as RNStatusBar } from 'react-native';
import React from 'react';
import Botao from '../comp/botaoJogar';
import Logo from '../comp/logoCarlinhos';
import Back from '../comp/background';
import { useRouter } from 'expo-router';
import CarlinhosComplet from '../comp/carlosComplet';
import { StatusBar } from 'expo-status-bar';
export default function Index() {

  const router = useRouter();



  return (

    <View style={styles.container}>
      <StatusBar style="dark" />
      <Back style={StyleSheet.absoluteFill} />
       <CarlinhosComplet />

      <View style={styles.divLogo}>
        <Logo />
      </View>

      <View style={styles.divBotao}>
        <Botao />
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
  divBotao: {
    marginTop: 300,
    alignItems: 'center',
  },
  divLogo: {
    marginTop: 30,
  },

});
