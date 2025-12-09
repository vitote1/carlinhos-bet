import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, input } from 'react-native';
import { userEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { TextInput } from 'react-native';

const Aposta = () => {
    const router = useRouter();
    const [valor, setValor] = useState("");

    function formatarMoeda(e) {
        let v = e.target.value.replace(/\D/g, "");
        v = (v / 100).toFixed(2) + "";
        v = v.replace(".", ",");
        v = "R$ " + v.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        setValor(v);
    }

    return (
        <View style={styles.divPai}>
            <View style={styles.telao}>
                <View style={styles.moldura}>
                    <View style={styles.expoe}>
                        <Text style={styles.indicar}>323131</Text>
                    </View>
                </View>
            </View>
            <View style={styles.divBaixo}>
                <View style={styles.divValor}>
                    <input
                        style={styles.valor}
                        type="text"
                        value={valor}
                        onChange={formatarMoeda}
                        placeholder="Digite um valor"
                    />
                     <Text>Aposta</Text>
                </View>
                <View style={styles.divMultiplicador}>

                </View>
                <View style={styles.divGanho}>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    divBaixo: {
        backgroundColor: '#121A30',
        borderWidth: 1,
        borderColor: '#242424',
        paddingBottom: 20,
        paddingTop: 20,
        gap: '6.25%',
    },
    divValor: {
        width: '25%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    valor: {
        backgroundColor: 'black',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#666666',
        width: '100%',
        marginLeft: '6.25%',
        
    },



    divPai: {
        display: 'flex',
        flexDirection: 'column',
    },
    telao: {
        borderTopWidth: 3,
        borderBottomWidth: 4,
        borderColor: '#FFB20B',
        width: 400,
        paddingTop: 7,
        paddingBottom: 7,
    },
    moldura: {
        backgroundColor: '#060912',
        borderRadius: 30,
        borderWidth: 3,
        borderColor: '#FFB20B',
        height: 60,
    },
    expoe: {
        width: '100%',
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    indicar: {
        fontSize: 22,
        color: 'white',
    }

});

export default Aposta;