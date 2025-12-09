import { Text, View, StyleSheet, Image, StatusBar as RNStatusBar} from 'react-native';
import React from 'react';
import Botao from '../comp/botaoJogar';
import Logo from '../comp/logoCarlinhos';
import Back from '../comp/background';
import { useRouter } from 'expo-router';
import TrevoTop from '../comp/trevoTop';
import CarlinhosIcone from '../comp/imagemCarlos';
import FerraduraIcon from '../comp/ferraduraIcon';
import FerraduraIconCamada2 from '../comp/ferraduraIconCamada2';
import { StatusBar } from 'expo-status-bar';
export default function Index() {

const router = useRouter();



  return (

    <View style={styles.container}>
    <StatusBar style="dark" />
      <Back style={StyleSheet.absoluteFill}/>
        <View  style={styles.divLogo}>
            <View>
                <TrevoTop/>     
            </View>
            <View style={styles.carlinhosIcone} >
                <CarlinhosIcone height={120} width={90} topCarlinhos={67} />
            </View>
            <View style={styles.ferradura1}>  
                <FerraduraIcon width={200} height={170} ferraduraTop={70}/>
            </View>
            <View style={styles.ferradura2}>  
                <FerraduraIconCamada2 width={200} height={84} top={113}/>
            </View>
            <View>
                <Image source={require("../assets/images/playIcon1.png")}></Image>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
     container: {
      flex: 1,
      alignItems: 'center',
      width: '100%',
      height: '100%',
      paddingTop: RNStatusBar.currentHeight,
    },
    divLogo: {
      
    },

    ferradura1: {
        zIndex:1,
        
    },

    ferradura2: {
      zIndex:3,
      
    },

    carlinhosIcone: {
        zIndex: 2,
    },

    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '100%',

    },


});
