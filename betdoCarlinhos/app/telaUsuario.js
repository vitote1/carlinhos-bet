
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Back from '../comp/background';
import Cabecalho from '../comp/cabecalho';
import UserHeader from '../comp/userHeader';
import MenuOption from '../comp/menuOption';

const TelaUsuario = () => {
  return (
    <View style={styles.screen}>
      <Back style={styles.background} />
      <Cabecalho />
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