import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import Seta from '../assets/arrow_back';


const setaVoltar = () => {

    const router = useRouter();


    return (
       <View style={styles.divImage}>
         <Seta style={styles.seta}></Seta>
       </View >

    );
};

const styles = StyleSheet.create({
    divImage: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    seta: {
        width: 40,
        height: 40,
    },
});

export default setaVoltar;