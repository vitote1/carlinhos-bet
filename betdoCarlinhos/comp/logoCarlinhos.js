

import { Text, View,  StyleSheet } from 'react-native';
import React from 'react';

const Logo = () => {

     

    return (
     <View style={styles.divLogo}>
        <Text style={styles.carlos}>
          Carlinhos Bet
        </Text>
      </View>


    );

}

const styles = StyleSheet.create({
    divLogo: {
        width: 400,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    carlos: {
        fontSize: 40,
        fontWeight: 700,
        color: '#FFFFFF',
    },


});

export default Logo;