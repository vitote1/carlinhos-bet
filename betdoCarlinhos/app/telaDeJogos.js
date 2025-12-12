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
            <View style={styles.navBarContainer}>
                    <NavBar/>
                </View>
                <CarlosComplet />
                <View style={styles.playIcon}>
                    <Image source={require("../assets/images/playIcon1.png")} style={{width: 25, height: 25}}></Image>
                    <Text style={{ fontSize: 26, color: '#ffffff', fontWeight: 'bold' }}>Jogos em destaque</Text>
                </View>

                <View style={styles.divJogos}>
                    <DivJogos />
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    playIcon: {
        position:'absolute',
        flexDirection: 'row',
        alignItems: 'inline-start',
        gap: 10,
        marginTop: '99%',  
        width: '100%',
        marginLeft:'11%'
        
    },

    divJogos: {
        alignContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '49%',
        width: '90%',
        height: '55%',
    },
    divLogo: {
        alignItems: 'center',
    },

    container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        width: '100%',
        height: '100%',
    },
     navBarContainer: {
        width: '100%',
        marginTop: 35,
    },
});


