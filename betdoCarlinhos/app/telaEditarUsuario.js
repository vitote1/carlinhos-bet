import React from 'react';
import { View, StyleSheet } from 'react-native';
import Back from '../comp/background';
import CamposEditarUsuario from '../comp/camposEditarUsuario';

const TelaEditarUsuario = () => {
  return (
    <View style={styles.screen}>
        <CamposEditarUsuario/>
        <Back/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default TelaEditarUsuario;