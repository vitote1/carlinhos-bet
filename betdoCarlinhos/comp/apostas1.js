import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, input } from 'react-native';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { listarUsers } from '../service/betService';
import Roleta from '../comp/roleta';

const Aposta = ({ setTriggerAtt }) => {
    const [triggerSpin, setTriggerSpin] = useState(false);
    const router = useRouter();
    const [valor, setValor] = useState("");
    const [valorBruto, setValorBruto] = useState(0);
    const [multiplicador, setMultiplicador] = useState('2');


    function formatarMoeda(text) {
        let apenasNumeros = text.replace(/\D/g, "");
        let numero = parseFloat(apenasNumeros) / 100 || 0;
        setValorBruto(numero);
        let v = numero.toFixed(2).replace(".", ",");
        v = "R$ " + v.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        setValor(v);
    }
    async function atualizarSaldo() {
        const usuarioLogadoStr = await AsyncStorage.getItem("usuarioLogado");
        const bd = await listarUsers();
        let bdArray = [];
        if (bd) {
            bdArray = Array.isArray(bd) ? bd : [bd]; 
        }
        if (usuarioLogadoStr && bd) {
            const userLogado = JSON.parse(usuarioLogadoStr);
            const userbd = bdArray.find((u) => u.email === userLogado.email && u.senha === userLogado.senha);
            if (userLogado.saldo < valorBruto ){
                alert("Saldo insuficiente!");
                return;
            }
            else if (valorBruto <= 0) {
                alert("Insira um valor válido para apostar!");
                return;
            }  
            else {
                alert("Aposta válida!");
                userLogado.saldo = userLogado.saldo - valorBruto;
                userbd.saldo = userbd.saldo - valorBruto;
                await AsyncStorage.setItem("usuarioLogado", JSON.stringify(userLogado));
                await AsyncStorage.setItem("usuarios", JSON.stringify(bdArray));

                setTriggerSpin(prev => !prev);
                if (setTriggerAtt) setTriggerAtt(prev => !prev);

            }
            
        }
    }



    return (
        <View style={styles.divPai}>
            <View style={styles.jack}>

                <Roleta acionarFuncao={triggerSpin} />

            </View>

            <View style={styles.telao}>
                <View style={styles.moldura}>
                    <View style={styles.expoe}>
                        <Text style={styles.indicar}>323131</Text>
                    </View>
                </View>
            </View>
            <View style={styles.divBaixo}>
                <View style={styles.divValor}>
                    <TextInput
                        style={styles.valor}
                        value={valor}
                        onChangeText={formatarMoeda}
                        placeholder="Aposta"
                        placeholderTextColor="#ccc"
                        keyboardType="numeric"
                    />
                    <Text style={{ color: 'white', marginTop: 5, fontWeight: '500', fontSize: 17, }}>Aposta</Text>
                </View>
                <View style={styles.divMultiplicador}>
                    <Picker
                        selectedValue={multiplicador}
                        onValueChange={(itemValue, itemIndex) => setMultiplicador(itemValue)}
                        style={styles.picker}
                        dropdownIconColor="white"
                    >
                        <Picker.Item label="3🐴 2x" value="2" />
                        <Picker.Item label="6🐴 12x" value="12" />
                        <Picker.Item label="3🫏 3x" value="3" />
                        <Picker.Item label="6🫏 10x" value="10" />
                        <Picker.Item label="3🇰🇷 6x" value="6" />
                        <Picker.Item label="6🇰🇷 9x" value="9" />

                    </Picker>
                    <Text style={{ color: 'white', marginTop: 5, fontWeight: '500', fontSize: 17, }}>Multiplicador</Text>
                </View>
                <View style={styles.divGanho}>
                    <View style={styles.Lucro}>
                        <Text style={{ fontSize: 17, color: 'white', textAlign: 'center', textAlignVertical: 'center' }}>R$ </Text>
                    </View>
                    <Text style={{ color: 'white', marginTop: 5, fontWeight: '500', fontSize: 17, }}>Lucro</Text>
                </View>
            </View>

            <View style={styles.botao}>
                <TouchableOpacity style={styles.bot} onPress={atualizarSaldo}>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    botao: {
        marginTop: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    bot: {
        height: 80,
        width: 80,
        borderRadius: 50,
        backgroundColor: '#A20101',
        borderWidth: 5,
        borderColor: '#878787',
    },
    divPai: {
        alignItems: 'center',
    },
    jack: {
        backgroundColor: 'white',
        borderRadius: 6,
        height: 400,
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',

    },
    divBaixo: {
        backgroundColor: '#121A30',
        borderWidth: 1,
        borderColor: '#242424',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '3%'
    },
    divValor: {
        display: 'flex',
        width: '30%',
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 10,
    },
    divMultiplicador: {
        display: 'flex',
        width: '30%',
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 10,
    },
    divGanho: {
        display: 'flex',
        width: '30%',
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 10,
    },
    picker: {
        backgroundColor: 'black',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#666666',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        paddingVertical: 15,
        paddingHorizontal: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 17,
    },
    Lucro: {
        backgroundColor: 'black',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#666666',
        width: '100%',
        color: 'white',
        paddingVertical: 15,
        paddingHorizontal: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 17,
    },
    valor: {
        backgroundColor: 'black',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#666666',
        width: '100%',
        color: 'white',
        paddingVertical: 15,
        paddingHorizontal: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 17,
    },

    divPai: {
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    telao: {
        alignContent: 'center',
        borderTopWidth: 3,
        borderBottomWidth: 4,
        borderColor: '#FFB20B',
        width: 430,
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