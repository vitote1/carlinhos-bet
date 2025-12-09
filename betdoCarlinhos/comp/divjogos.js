import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import jogosIcon from '../comp/jogosIcon.js';


const DivJogos = () => {

    const router = useRouter();


    return (
        <View style={styles.divJogos}>
            <View>
                {jogosIcon('Fortune Carlinhos', 'Slots', require('../assets/images/playboycarlos.jpg'), 'telaJackpot')}
            </View>
            <View>
                {jogosIcon('Steel Ball Run', 'Slots', require('../assets/images/fortunecarlinhosicon.jpeg'), 'telaCavalos')}
            </View>
        </View >
    )
}
export default DivJogos;

const styles = StyleSheet.create({
    divJogos: {
        padding: 10,
        paddingBottom: 30,
        paddingTop: 30,
        display: 'flex',
        backgroundColor: '#080B14',
        borderColor: '#242424',
        width: 370,
        borderWidth: 1,
        borderRadius: 20,
        gap: 50,
    },
});