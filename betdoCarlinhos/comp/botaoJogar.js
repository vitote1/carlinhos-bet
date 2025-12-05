import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const Botao = () => {

    const router = useRouter();

    return (
        <TouchableOpacity onPress={() => router.navigate('telaLogin')}>
            <LinearGradient
                colors={[
                    '#3250BF',
                    'rgba(231, 231, 231, 0)'
                ]}
                locations={[0.02, 1]}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.botao}
            >
                <Text style={styles.texto}>Jogar</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    botao: {
        width: 240,
        height: 79,
        borderWidth: 2,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderColor: '#A26F00',

    },
    texto: {
        fontSize: 30,
        fontWeight: '500',
        color: '#FFFFFF',
    },
});

export default Botao;