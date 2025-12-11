import { View, StyleSheet, Image, StatusBar as RNStatusBar, ScrollView } from 'react-native';
import React from 'react';
import Back from '../comp/background';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import NavBar from '../comp/navBar';
import Carlos from '../comp/carlosComplet';
import Aposta from '../comp/apostas1';
import { useState } from 'react';

export default function Index() {

    const router = useRouter();
    const [triggerAtt, setTriggerAtt] = useState(0);
    const atualizarSaldoNavBar = () => setTriggerAtt(prev => prev + 1);
    

    return (

        <View style={styles.container}>
            <StatusBar style="dark" />
            <Back style={StyleSheet.absoluteFill} />
            <ScrollView 
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                >
                <NavBar triggerAtt={triggerAtt} onSaldo = {1} onUsuario = {1}/>
                <Carlos />

                <View style={styles.aposta}>
                    <Aposta setTriggerAtt={atualizarSaldoNavBar}/>
                </View>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
   
    ferradura1: { zIndex: 1 },
    ferradura2: { zIndex: 3 },
    carlinhosIcone: { zIndex: 10, },

    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '100%',
        paddingTop: RNStatusBar.currentHeight,
    },
    aposta: {
        marginTop: 140,
    }
});
