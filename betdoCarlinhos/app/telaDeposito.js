import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import TelaDeDeposito from '../comp/telaDeDeposito';
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
            <ScrollView 
                style={styles.scroll} 
                contentContainerStyle={styles.scrollViewContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.navBarContainer}>
                    <NavBar />
                </View>

                <View style={styles.divLogo}>
                    <CarlosComplet />
                </View>

                <View style={styles.divDeposito}>
                    <TelaDeDeposito />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    scroll: {
        flex: 1,
        height: '100%',
        width: '100%',
    },
    scrollViewContent: {
        alignItems: 'center',
        paddingVertical: 20,
        
        height: '120%',
    },
    navBarContainer: {
        width: '100%',
        marginTop: 15,
    },
    divLogo: {
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
    },
    divDeposito: {
        position: 'absolute',
        width: '85%',
        marginTop: 500,
        alignSelf: 'center',
        height: '40%',
    },
});
