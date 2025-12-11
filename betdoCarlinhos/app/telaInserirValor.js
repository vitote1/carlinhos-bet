import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native-web';
import { SafeAreaView } from 'react-native';
import TelaDeSaque from '../comp/teladeSaque';
import Back from '../comp/background';

export default function App() {
    const router = useRouter();
    return(
    <View style={styles.container}>
            <StatusBar style="dark" />
            <Back style={StyleSheet.absoluteFill} />
            <NavBar />
            <View style={styles.divLogo}>
                <CarlosComplet />
                <View style={styles.divJogos}>
                    <TelaDeSaque />
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


