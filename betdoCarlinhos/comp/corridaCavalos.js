import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CorridaCavalos = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.lane}><View style={styles.num}><Text style={styles.text}>1</Text></View><View style={styles.track} /></View>
      <View style={styles.lane}><View style={styles.num}><Text style={styles.text}>2</Text></View><View style={styles.track} /></View>
      <View style={styles.lane}><View style={styles.num}><Text style={styles.text}>3</Text></View><View style={styles.track} /></View>
      <View style={styles.lane}><View style={styles.num}><Text style={styles.text}>4</Text></View><View style={styles.track} /></View>
      <View style={styles.lane}><View style={styles.num}><Text style={styles.text}>5</Text></View><View style={styles.track} /></View>
      <View style={styles.lane}><View style={styles.num}><Text style={styles.text}>6</Text></View><View style={styles.track} /></View>
      <View style={styles.finish} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#001a00' },
  header: { height: 25, backgroundColor: '#ffff00' },
  lane: { flex: 1, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 },
  num: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center', marginRight: 8 },
  text: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
  track: { flex: 1, backgroundColor: '#00ff00', height: 35, borderRadius: 4, marginHorizontal: 2 },
  finish: { height: 8, backgroundColor: '#ffd700' },
});

export default CorridaCavalos;

