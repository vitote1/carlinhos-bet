import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import Back from '../comp/background';
import Login from '../comp/divLogin';
export default function Index() {
  return (

    <View style={styles.container}>
      <Back style={StyleSheet.absoluteFillObject}/>
          <Login/>
       
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


});