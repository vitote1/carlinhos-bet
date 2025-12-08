import { Text, View,  StyleSheet, Image } from 'react-native';
import React from 'react';

const CarlinhosIcone = ({ width, height, topCarlinhos }) => {







    return (
         
            <View style={styles.carlinhosIconeDiv}>
                <Image  
                style={{ 
                width: width, 
                height: height,
                zIndex:2,
                marginTop: topCarlinhos,
                position: 'absolute',
                borderRadius: 12,
      }} source={require("../assets/images/carlinhosIcon.png")}></Image>
            </View>


    );

}

const styles = StyleSheet.create({
    carlinhosIconeDiv:{
        zIndex:2,
        position:'absolute',
        alignContent: 'center',
        alignItems: 'center',
        
        
    },


});

export default CarlinhosIcone;