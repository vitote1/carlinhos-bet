import { Text, View, StyleSheet, Image, StatusBar as RNStatusBar } from 'react-native';
import React from 'react';
import Back from '../comp/background';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import NavBar from '../comp/navBarSalUser';
import Carlos from '../comp/carlosComplet';
import Aposta from '../comp/apostas1';
export default function Index() {

    const router = useRouter();



    return (

        <View style={styles.container}>
            <StatusBar style="dark" />
            <Back style={StyleSheet.absoluteFill} />
            <NavBar/>
            <Carlos/>
            <Aposta/>

        </View>
    );
}

const styles = StyleSheet.create({
    playIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 320,  
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
    },
});
