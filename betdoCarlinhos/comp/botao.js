import { Text, View,  StyleSheet } from 'react-native';
import React from 'react';

const Botao = () => {







    return (
         <View style={styles.divBotao}>
            <View style={styles.botao}>
                <Text style={styles.texto}>Jogar</Text>
            </View>
         </View>


    );

}

const styles = StyleSheet.create({
    botao: {
        width: 230,
        height: 69,
        borderWidth: 2,
        borderRadius: 15,
        color: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#182554',
    },
    texto: {
        fontSize: 30,
        fontWeight: 400,
        color: '#FFFFFF',
    },


});

export default Botao;