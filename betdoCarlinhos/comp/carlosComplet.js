import React from "react";
import { Image, View, StyleSheet } from "react-native";
import TrevoTop from '../comp/trevoTop';
import CarlinhosIcone from '../comp/imagemCarlos';
import FerraduraIcon from '../comp/ferraduraIcon';
import FerraduraIconCamada2 from '../comp/ferraduraIconCamada2';

const ImageCarlos = ({}) => {
    return (
        <View style={styles.divPai}>
            <TrevoTop />

            <View style={styles.divCarlinhos}>
                <CarlinhosIcone width={120} height={160} />
            </View>

            <View style={styles.divFerradura}>
                <FerraduraIcon width={252} height={200} />
            </View>
            
            <View style={styles.divFerradura2}>
                <FerraduraIconCamada2 width={252} height={110}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    divCarlinhos: {
        position: 'absolute',
        top: 64,
        zIndex: 3,
    },
    divFerradura: {
        position: 'absolute',
        top: 30,
        zIndex: 1,
    },
    divFerradura2: {
        position: 'absolute',
        top: 75,
        zIndex: 4,
    },
    divPai: {
        position: 'relative',
        alignItems: 'center',
    },
});

export default ImageCarlos;
