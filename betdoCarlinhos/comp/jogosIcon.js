import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import BotaoIniciarJogo from '../comp/botaoIniciarJogo.js';

const jogosIcon = (nome, tipo, fotoSource, id) => {

    const router = useRouter();


    return (
        <View style={styles.divJogosIcon}>
            <View style={styles.iconeJogo}>
                <Image style={styles.imagemJogo} source={fotoSource}></Image>
            </View >
            <View style={styles.jogoInfo}>  
                <Text style={{color:'#FFFFFF', fontSize:18,}}>{nome}</Text>
                <Text style={{color:'#FFFFFF', fontSize:14, fontWeight:'bold'}}>{tipo}</Text>
                
            </View>

            <View> 
                <BotaoIniciarJogo />
            </View>
        </View>
    )
}
export default jogosIcon;

const styles = StyleSheet.create({
    divJogosIcon: {
        flexDirection:'row',
        backgroundColor: '#080B14',
        borderColor:'#ddddddff',
        height: 120,
        width: 300,  
        borderWidth: 2,
        borderRadius: 20,
        alignSelf: 'center',
        marginTop:40,
        marginBottom:10,
    },
    iconeJogo:{
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',    
        alignSelf:'center',
        height:'85%',
        width:'30%',  
        marginLeft:7,   
        marginBottom:10,
    },
    jogoInfo:{
        flexDirection:'column',
        rowGap:'40%',
        width:'50%',
        height:'80%',
        color:'#FFFFFF',
        marginTop:7,
        justifyContent:'center',   
    },
    imagemJogo:{
        height:'80%',
        width:'80%',  
        borderRadius:12,
    },  
 });