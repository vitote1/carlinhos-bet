import { Text, View, StyleSheet, StatusBar as RNStatusBar } from 'react-native';
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
      <Back style={StyleSheet.absoluteFill} />
      <TrevoTop/>
        <View style={styles.carlinhos}>
          <CarlinhosIcone width={120} height={160} topCarlinhos={64}/>
        </View>
        <View style={styles.ferradura1}> 
          <FerraduraIcon width={252} height={200} ferraduraTop={90}/>

        </View>
        <View style={styles.ferradura2}> 
          <FerraduraIconCamada2 width={252} height={110} top={135} />

      </View>

        <View style={styles.divLogo}>
          <Logo/>
        </View>

        <View style={styles.divBotao}>
          <Botao/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  carlinhos: {
    position: 'absolute',
    zIndex: 10,
  },
  ferradura1: {
    position: 'absolute',
    zIndex: 2,
  },
  ferradura2: {
    position: 'absolute',
    zIndex: 3,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingTop: RNStatusBar.currentHeight,
  },
  divBotao: {
    marginTop: 300,
    alignItems: 'center',
  },
  divLogo: {
    marginTop: 180,
  },


});
