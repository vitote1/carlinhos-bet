import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import jogosIcon from '../comp/jogosIcon.js';


const BotaoIniciarJogo = () => {

    const router = useRouter();


    return (
        <View style={styles.divBotaoIniciarJogo}>s
            <Image source={require('../assets/images/playIcon2.png')}></Image>
        </View >
    )
}
export default BotaoIniciarJogo;

const styles = StyleSheet.create({
    divBotaoIniciarJogo: {
        backgroundColor: '#2E58B9',
        height: 50,
        width: 50,  
        marginTop:55,
        marginLeft:-10,
        borderRadius: 100,
        alignItems:'center',
        justifyContent:'center',
         position: 'absolute',   
    },
 });