import React from 'react';
import { StyleSheet } from 'react-native'; // ⬅️ faltava importar isso
import { LinearGradient } from 'expo-linear-gradient';

const Back = ({ style }) => {
  return (
    <LinearGradient
      colors={['#0D1740', '#060B15']}
      start={{ x: 0, y: 0.31 }}
      end={{ x: 0, y: 0.81 }}
      style={[styles.container, style]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Back;
