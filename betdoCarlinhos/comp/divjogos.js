import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import jogosIcon from '../comp/jogosIcon.js';


const DivJogos = () => {

    const router = useRouter();


    return (
        <View style={styles.divJogos}>s
            {jogosIcon('Fortune Carlinhos', 'slots', require('../assets/images/playboycarlos.jpg'), 1)}
            {jogosIcon('Steel Ball Run', 'slots', require('../assets/images/fortunecarlinhosicon.jpeg'), 2)}
        </View >
    )
}
export default DivJogos;

const styles = StyleSheet.create({
    divJogos: {
        backgroundColor: '#080B14',
        borderColor:'#242424',
        height: 400,
        width: 370,  
        borderWidth: 2,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal:20,
        position: 'absolute',   
    },
 });