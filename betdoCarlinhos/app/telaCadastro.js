import { Text, View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Back from '../comp/background';
import Cadastro from '../comp/divCadastro';
export default function Index() {
  return (

    <View style={styles.container}>
      <Back style={StyleSheet.absoluteFill}/>
         <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.divCadastro}>
            <Cadastro/>
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