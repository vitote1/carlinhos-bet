import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, StatusBar as RNStatusBar } from 'react-native';
import TelaDeSaque from '../comp/teladeSaque';
import Back from '../comp/background';
import NavBar from '../comp/navBar';
import CarlosComplet from '../comp/carlosComplet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { listarUsers } from '../service/betService';

export default function App() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <Back style={StyleSheet.absoluteFill} />

            <View style={styles.navBarContainer}>
                    <NavBar />
                </View>

            <View style={styles.divLogo}>
                <CarlosComplet />

                <View style={styles.divSaque}>
                    <TelaDeSaque />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({


    divSaque: {
        alignSelf: 'center',
        position: 'absolute',
        alignItems: 'center',
        marginTop: 20,
    },

    ferradura1: { zIndex: 1 },
    ferradura2: { zIndex: 3 },
    carlinhosIcone: { zIndex: 10 },

    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    divLogo: {
        alignItems: 'center',
        marginTop: 0,
    },
     navBarContainer: {
        width: '100%',
        marginTop: 35,
    },
});
