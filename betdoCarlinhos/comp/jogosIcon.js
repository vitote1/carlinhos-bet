import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import BotaoIniciarJogo from '../comp/botaoIniciarJogo.js';

const jogosIcon = (nome, tipo, fotoSource, jogoInfoid) => {

    const router = useRouter();


    return (
        <View style={styles.divJogosIcon}>
            <View style={styles.iconeJogo}>
                <Image style={styles.imagemJogo} source={fotoSource}></Image>
            </View >
            <View style={styles.jogoInfo}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>{nome}</Text>
                </View>
                <View style={styles.tipoJogo}>
                    <Text style={styles.tipoText}>{tipo}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => router.push(`/${jogoInfoid}`)} activeOpacity={0.7} >
                <BotaoIniciarJogo />
            </TouchableOpacity>
        </View>
    );
}
export default jogosIcon;

const styles = StyleSheet.create({
    divJogosIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 2,
        borderColor: '#666666',
        borderRadius: 15,
        width: '95%',
        marginLeft: '2.5%',
        height: 130,
    },
    iconeJogo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '35%',
        height: '100%',
    },
    jogoInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '50%',
        gap: 15,
    },
    title: {
        padding: 5,
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginLeft: 5,
        paddingLeft: 10,
    },
    titleText: {
        fontSize: 15,
        color: '#ffffff',
        fontWeight: '500',
        display: 'flex',
    },
    tipoJogo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        display: 'flex',
        alignSelf: 'flex-start',
        marginBottom: 10,
    },
    tipoText: {
        fontSize: 15,
        color: '#ffffffff',
        marginTop: 5,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    imagemJogo: {
        height: '100%',
        width: '100%',
        borderRadius: 15,
    },
});