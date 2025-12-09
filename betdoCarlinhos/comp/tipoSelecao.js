import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default function TipoSelecao({ label, selected, onPress, icon }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.box, selected && styles.selected]}> 
      <View style={styles.row}>
        <Text style={styles.icon}>{icon}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    width: '45%',
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D0D0D0',
  },
  selected: {
    borderColor: '#007AFF',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    fontSize: 20,
  },
  label: {
    fontSize: 16,
  },
});