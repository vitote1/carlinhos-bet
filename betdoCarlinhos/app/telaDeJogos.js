import { Text, View, StyleSheet, Image, StatusBar as RNStatusBar } from 'react-native';
import React from 'react';
import Back from '../comp/background';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import CarlosComplet from '../comp/carlosComplet';
import DivJogos from '../comp/divjogos';
import NavBar from '../comp/navBar';

export default function Index() {

    const router = useRouter();

    return (

        <View style={styles.container}>
            <StatusBar style="dark" />
            <Back style={StyleSheet.absoluteFill} />
            <NavBar onSaldo = {1} onUsuario = {1}/>
            <View style={styles.divLogo}>
                <CarlosComplet />
                <View style={styles.playIcon}>
                    <Image source={require("../assets/images/playIcon1.png")} style={{width: 25, height: 25}}></Image>
                    <Text style={{ fontSize: 26, color: '#ffffff', fontWeight: 'bold' }}>Jogos em destaque</Text>
                </View>

                <View style={styles.divJogos}>
                    <DivJogos />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    playIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 320,  
        width: '80%',
        marginLeft: '10%',
    },

    divJogos: {
        alignItems: 'center',
        marginTop: 20,  
    },

    ferradura1: { zIndex: 1 },
    ferradura2: { zIndex: 3 },
    carlinhosIcone: { zIndex: 10,},

    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '100%',
        marginTop: RNStatusBar.currentHeight,
    },
});


