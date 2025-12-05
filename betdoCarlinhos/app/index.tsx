import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import Botao from '../comp/botaoJogar';
import Logo from '../comp/logoCarlinhos';
import Back from '../comp/background';
import { useRouter } from 'expo-router';
export default function Index() {

const router = useRouter();



  return (

    <View style={styles.container}>
      <Back style={StyleSheet.absoluteFill}/>

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

  },
  divBotao: {
    marginTop: 340,
    alignItems: 'center',
  },
  divLogo: {
    marginTop: 180,
  },


});
