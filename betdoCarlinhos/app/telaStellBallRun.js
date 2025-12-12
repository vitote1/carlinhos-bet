import { View, StyleSheet } from 'react-native';
import React from 'react';
import Back from '../comp/background';
import NavBar from '../comp/navBar';
import CorridaCavalos from '../comp/corridaCavalos';

const TelaStellBallRun = () => {
    return (
        <View style={styles.screen}>
            <Back style={StyleSheet.absoluteFill} />
            <View style={styles.navBarContainer}>
                <NavBar onSaldo={1} onUsuario={1} />
            </View>
            <View style={styles.corridaContainer}>
                <CorridaCavalos />
            </View>
        </View>
    );
};  

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  corridaContainer: {
    marginTop: 70,
    height: 380,
  },
  content: {
    flex: 1,
  }
});

export default TelaStellBallRun;
