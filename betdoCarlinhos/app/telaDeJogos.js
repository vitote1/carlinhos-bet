import { Text, View, StyleSheet, Image, StatusBar as RNStatusBar } from 'react-native';
import React from 'react';
import Back from '../comp/background';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import CarlosComplet from '../comp/carlosComplet';
import DivJogos from '../comp/divjogos';
import NavBar from '../comp/navBar';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {

    const router = useRouter();


    return (

        <View style={styles.container}>
            <StatusBar style="dark" />
            <Back style={StyleSheet.absoluteFill} />
            <NavBar onSaldo={1} onUsuario={1} />
            <CarlosComplet />
            <View style={styles.divLogo}>
                <View style={styles.playIcon}>
                    <Image source={require("../assets/images/playIcon1.png")} style={{ width: 25, height: 25 }}></Image>
                    <Text style={{ fontSize: 26, color: '#ffffff', fontWeight: 'bold' }}>Jogos em destaque</Text>
                </View>

                <View style={styles.divJogos}>
                    <DivJogos />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    playIcon: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 370,  
        width: '80%',
        marginLeft: '-7%',
    },

    divJogos: {
        alignContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 370,
        width: '100%',
    },
    divLogo: {
        alignItems: 'center',
        gap: 20,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        width: '100%',
        height: '10%',
        marginTop: RNStatusBar.currentHeight,
    },
});


