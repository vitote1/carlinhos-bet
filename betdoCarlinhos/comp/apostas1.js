import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
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
    const [isRolling, setIsRolling] = useState(false);
    const [lucro, setLucro] = useState(0);
    const [pickerVisible, setPickerVisible] = useState(false);
    const [texto, setTexto] = useState('');
    const [textoGanhar, setTextoGanhar] = useState('');
    const multipliers = {
        Cavalo: { 3: 2, 6: 12 },
        Jegue: { 3: 3, 6: 9 },
        Corinthians: { 3: 1.5, 6: 10 },
        Carlinhos: { 3: 2.5, 6: 7 },
        Amongus: { 3: 3, 6: 10 }
    };

async function handleWin(winningLines) {
    if (!winningLines || winningLines.length === 0) {
        setLucro(prev => prev - valorBruto);
        setTextoGanhar(`Perdeu R$ ${valorBruto.toFixed(2).replace('.', ',')}`);
        return;
    }

    const win = winningLines[0];
    const simbolo = win.nome;
    const count = win.count;

    if (!multipliers[simbolo] || !multipliers[simbolo][count]) {
        setLucro(0);
        return;
    }

    const multi = multipliers[simbolo][count];
    const ganho = valorBruto * multi;

    setLucro(prev => prev + (ganho - valorBruto));
    setTextoGanhar(`Ganhou R$ ${ganho.toFixed(2).replace('.', ',')}!`);

    const usuarioStr = await AsyncStorage.getItem("usuarioLogado");
    const bd = await listarUsers();
    let bdArray = Array.isArray(bd) ? bd : [bd];

    const usuario = JSON.parse(usuarioStr);
    const userbd = bdArray.find(u => u.email === usuario.email && u.senha === usuario.senha);

    usuario.saldo += ganho;
    userbd.saldo += ganho;

    await AsyncStorage.setItem("usuarioLogado", JSON.stringify(usuario));
    await AsyncStorage.setItem("usuarios", JSON.stringify(bdArray));

    if (setTriggerAtt) setTriggerAtt(prev => !prev);
}



    function formatarMoeda(text) {
        let apenasNumeros = text.replace(/\D/g, "");
        let numero = parseFloat(apenasNumeros) / 100 || 0;
        setValorBruto(numero);
        let v = numero.toFixed(2).replace(".", ",");
        v = "R$ " + v.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        setValor(v);
    }
    async function atualizarSaldo() {
        console.log('apertou');
        const usuarioLogadoStr = await AsyncStorage.getItem("usuarioLogado");
        const bd = await listarUsers();
        let bdArray = [];
        if (bd) {
            bdArray = Array.isArray(bd) ? bd : [bd];
        }
        if (usuarioLogadoStr && bd) {
            const userLogado = JSON.parse(usuarioLogadoStr);
            const userbd = bdArray.find((u) => u.email === userLogado.email && u.senha === userLogado.senha);
            if (userLogado.saldo < valorBruto) {
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
    const opcoesMultiplicador = [
        { texto: "3 Cavalo — 2x", valor: 2, image: require('../assets/images/cavalo.png'), nome: "Cavalo" },
        { texto: "6 Cavalo — 12x", valor: 12, image: require('../assets/images/cavalo.png'), nome: "Cavalo" },

        { texto: "3 Jegue — 3x", valor: 3, image: require('../assets/images/Jegue.png'), nome: "Jegue" },
        { texto: "6 Jegue — 9x", valor: 9, image: require('../assets/images/Jegue.png'), nome: "Jegue" },

        { texto: "3 Corinthians — 1.5x", valor: 1.5, image: require('../assets/images/coritias.png'), nome: "Corinthians" },
        { texto: "6 Corinthians — 10x", valor: 10, image: require('../assets/images/coritias.png'), nome: "Corinthians" },

        { texto: "3 Carlinhos — 2.5x", valor: 2.5, image: require('../assets/images/carlinhosRoleta.webp'), nome: "Carlinhos" },
        { texto: "6 Carlinhos — 7x", valor: 7, image: require('../assets/images/carlinhosRoleta.webp'), nome: "Carlinhos" },

        { texto: "3 Amongus — 3x", valor: 3, image: require('../assets/images/among.jpg'), nome: "Amongus" },
        { texto: "6 Amongus — 10x", valor: 10, image: require('../assets/images/among.jpg'), nome: "Amongus" },
    ];



    return (
        <View style={styles.divPai}>
            <View style={styles.jack}>

                <Roleta acionarFuncao={triggerSpin}
                    onRollingChange={setIsRolling}
                    onWin={(winningLines) => handleWin(winningLines)} />

            </View>

            <View style={styles.telao}>
                <View style={styles.moldura}>
                    <View style={styles.expoe}>
                        <Text style={styles.indicar}>{textoGanhar}</Text>
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
                    <TouchableOpacity style={styles.fakePicker} onPress={() => setPickerVisible(true)}>
                        <Text style={styles.fakePickerText}>
                            {`Ver info`}
                        </Text>
                    </TouchableOpacity>

                    <Modal visible={pickerVisible} transparent animationType="fade">
                        <TouchableOpacity style={styles.modalOverlay} onPress={() => setPickerVisible(false)}>
                            <View style={styles.modalBox} pointerEvents="none">

                                {opcoesMultiplicador.map((opcao, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={styles.option}
                                        onPress={() => {
                                            setMultiplicador(opcao.valor);
                                            setTexto(opcao.nome);
                                            setPickerVisible(false);
                                        }}
                                    >
                                        <View style={{ width: '40%', alignItems: 'flex-end' }}>
                                            <Image source={opcao.image} style={styles.icon} />
                                        </View>
                                        <View style={{ width: '60%' }}>
                                            <Text style={styles.optionText}>{opcao.texto}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}

                            </View>
                        </TouchableOpacity>
                    </Modal>
                    <Text style={{ color: 'white', marginTop: 5, fontWeight: '500', fontSize: 17, }}>Multiplicador</Text>
                </View>
                <View style={styles.divGanho}>
                    <View style={styles.Lucro}>
                        <Text style={{ fontSize: 17, color: 'white', textAlign: 'center', textAlignVertical: 'center' }}>R$ {lucro.toFixed(2).replace('.', ',')}</Text>
                    </View>
                    <Text style={{ color: 'white', marginTop: 5, fontWeight: '500', fontSize: 17, }}>Lucro</Text>
                </View>
            </View>

            <View style={styles.botao}>
                <TouchableOpacity style={styles.bot} onPress={atualizarSaldo} disabled={isRolling} >
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    fakePicker: {
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
    fakePickerText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBox: {
        width: 300,
        backgroundColor: '#ffffffff',
        borderRadius: 12,
        padding: 20,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    icon: {
        width: 30,
        height: 30,
        marginRight: 12,
    },
    optionText: {
        color: 'black',
        fontSize: 16,
        textAlign: 'left',
        width: '100%'
    },
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