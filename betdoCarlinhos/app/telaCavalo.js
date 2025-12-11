import { View, StyleSheet } from 'react-native';
import React from 'react';
import Back from '../comp/background';
import NavBar from '../comp/navBar';

const TelaCavalo = () => {
    return (
        <View style={styles.screen}>
            <Back />

            <View style={styles.navBarContainer}>
                <NavBar onSaldo={1} onUsuario={1} />
            </View>
        </View>
    );
};  

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  navBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  }
});

export default TelaCavalo;
