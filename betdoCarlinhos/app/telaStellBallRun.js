import { View, StyleSheet } from 'react-native';
import React from 'react';
import Back from '../comp/background';
import NavBar from '../comp/navBar';
import CorridaCavalos from '../comp/corridaCavalos';
import { useState } from 'react'; 

const TelaStellBallRun = () => {
  const [triggerAtt, setTriggerAtt] = useState(0);

  const atualizarSaldoNavBar = () => setTriggerAtt(prev => prev + 1);
  return (
    <View style={styles.screen}>
      <Back style={StyleSheet.absoluteFill} />
      <View style={styles.navBarContainer}>
        <NavBar onSaldo={1} onUsuario={1} triggerAtt={triggerAtt} />
      </View>
      <View style={styles.corridaContainer}>
        <CorridaCavalos setTriggerAtt={atualizarSaldoNavBar} />
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
  },
  navBarContainer: {
    width: '100%',
    marginTop: 35,
  },
});

export default TelaStellBallRun;
