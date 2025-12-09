import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import jogosIcon from '../comp/jogosIcon.js';


const BotaoIniciarJogo = () => {

    const router = useRouter();


    return (
        <View style={styles.divBotaoIniciarJogo}>
            <Image source={require('../assets/images/play.png')} style={{ width: 30, height: 30 }} ></Image>
        </View >
    )
}
export default BotaoIniciarJogo;

const styles = StyleSheet.create({
    divBotaoIniciarJogo: {
        display: 'flex',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2E58B9',
        borderRadius: 40,
    },
});