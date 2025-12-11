import { View, StyleSheet } from 'react-native';
import React from 'react';
import Back from '../comp/background';
import NavBar from '../comp/navBar';
import BotoesCavalosAposta from '../comp/botoesApostaCavalo';

const TelaStellBallRun = () => {
    return (
        <View style={styles.screen}>
            <Back />
            <View style={styles.navBarContainer}>
                <NavBar onSaldo={1} onUsuario={1} />
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
    overflow: 'hidden',
  },
  navBarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  content: {
    flex: 1,
    marginTop: 70,
  }
});

export default TelaStellBallRun;
