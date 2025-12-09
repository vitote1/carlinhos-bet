import { Text, View,  StyleSheet, Image } from 'react-native';
import React from 'react';

const CarlinhosIcone = ({ width, height }) => {

    return (
         
            <View style={styles.carlinhosIconeDiv}>
                <Image  
                style={{ 
                width: width, 
                height: height,
                borderRadius: 12,
      }} source={require("../assets/images/carlinhosIcon.png")}></Image>
            </View>


    );

}

const styles = StyleSheet.create({
    carlinhosIconeDiv:{
        alignContent: 'center',
        alignItems: 'center',
    },


});

export default CarlinhosIcone;