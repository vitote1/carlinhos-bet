

import { Text, View,  StyleSheet } from 'react-native';
import React from 'react';

const Logo = () => {

     

    return (
     <View style={styles.divLogo}>
        <Text style={styles.carlos1}>
          Carlinhos
        </Text>
        <Text style={styles.carlos2}>
          Bet
        </Text>
      </View>


    );

}

const styles = StyleSheet.create({
    divLogo: {
        
        width: 500,
        height: 70,
        marginTop: 130,
        justifyContent: 'center',
        alignItems: 'center',
    },
    carlos1: {
        fontSize: 50,
        fontWeight: 800,
        color: '#00C5AE',
    },
    carlos2: {
        marginRight: 140,
        alignContent:'start',
        fontSize: 50,
        fontWeight: 800,
        color: '#A7A7A7',
    },

});

export default Logo;