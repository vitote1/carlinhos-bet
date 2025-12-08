import { Text, View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Back from '../comp/background';
import Cadastro from '../comp/divCadastro';
import NavBar from '../comp/navBar';
export default function Index() {
  return (

    <View style={styles.container}>
      //cu assado
      <Back style={StyleSheet.absoluteFill} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <NavBar></NavBar>
        <View style={styles.divCadastro}>
          <Cadastro />
        </View>
      </ScrollView>

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
  divCadastro: {
    marginTop: 200,
  },

});