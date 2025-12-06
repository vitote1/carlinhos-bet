import { Text, View,  StyleSheet, Image } from 'react-native';
import React from 'react';

const CarlinhosIcone = () => {







    return (
         
            <View style={styles.carlinhosIconeDiv}>
                <Image style={styles.carlinhosIcone}  source={require("../assets/images/carlinhosIcon.png")}></Image>
            </View>


    );

}

const styles = StyleSheet.create({
    carlinhosIconeDiv:{
        zIndex:2,
        position:'absolute',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 62,
        
    },
    carlinhosIcone: {
        zIndex:2,
        position: 'absolute',
        width: 120,
        height: 160,
        borderRadius: 12,
        
    },


});

export default CarlinhosIcone;