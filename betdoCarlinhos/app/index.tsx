import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import Botao from '../comp/botaoJogar';
import Logo from '../comp/logoCarlinhos';
import Back from '../comp/background';
import { useRouter } from 'expo-router';
import TrevoTop from '../comp/trevoTop';
import CarlinhosIcone from '../comp/imagemCarlos';
import FerraduraIcon from '../comp/ferraduraIcon';
import FerraduraIconCamada2 from '../comp/ferraduraIconCamada2';
export default function Index() {

const router = useRouter();



  return (

    <View style={styles.container}>
      <Back style={StyleSheet.absoluteFill}/>
        <View >
          <TrevoTop />
        </View>

        <View>
          <CarlinhosIcone />
        </View>
        <View style={styles.ferradura1}> 
          <FerraduraIcon />

        </View>
        <View style={styles.ferradura2}> 
          <FerraduraIconCamada2 />

        </View>


        <View style={styles.divLogo}>
          <Logo />
        </View>

        <View style={styles.divBotao}>
          <Botao />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    ferradura1: {
      zIndex:1,
    },
    ferradura2: {
      zIndex:3,
    },

  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',

  },
  divBotao: {
    marginTop: 300,
    alignItems: 'center',
  },
  divLogo: {
    marginTop: 180,
  },


});
