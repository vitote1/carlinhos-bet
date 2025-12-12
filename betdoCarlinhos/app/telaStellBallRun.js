import { View, StyleSheet } from 'react-native';
import React from 'react';
import Back from '../comp/background';
import NavBar from '../comp/navBar';
import BotoesCavalosAposta from '../comp/botoesApostaCavalo';
import CorridaCavalos from '../comp/corridaCavalos';

const TelaStellBallRun = () => {
    return (
        <View style={styles.screen}>
            <Back />
            <View style={styles.navBarContainer}>
                <NavBar onSaldo={1} onUsuario={1} />
            </View>
            <View style={styles.corridaContainer}>
                <CorridaCavalos />
            </View>
            <View style={styles.content}>
                <BotoesCavalosAposta />
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
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
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
