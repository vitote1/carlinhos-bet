import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, StatusBar as RNStatusBar } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Back from '../comp/background';
import CorridaCavalos from '../comp/corridaCavalos';

export default function TelaCorridaCavalos() {
  

  return (
    <View style={styles.container}>
        
    
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Back style={StyleSheet.absoluteFill} />
        <View>
            <CorridaCavalos setTriggerAtt={atualizarSaldoNavBar} />
        </View>
        
        
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    paddingTop: RNStatusBar.currentHeight,
    alignContent:'center',
    width: '100%',
    height: '100%',
    justifyContent :'center',
    
  },
 
});
