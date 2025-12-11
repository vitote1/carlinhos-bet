import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { listarUsers } from '../service/betService';
import { useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";



const Login = () => {

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const fazerLogin = async () => {
        const usuario = await listarUsers();
        const usuarioEncontrado = usuario.find(
            (u) => u.email === email && u.senha === senha
        );
        console.log(usuarioEncontrado)

        if (usuarioEncontrado) {
            router.navigate('telaDeJogos');
            await AsyncStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));
        } else {
            alert('Usuário ou senha inválidos');
        }
    };

    return (
        <View style={styles.divLogin}>
            <View style={styles.divText}>
                <Text style={styles.title}>
                    Login
                </Text>
            </View>
            <View style={styles.divForm}>
                <View style={styles.divEmail}>
                    <View style={styles.email}>
                        <Text style={styles.text}>
                            E-mail
                        </Text>
                    </View>
                    <View style={styles.inputEmail}>
                        <TextInput style={styles.input}
                            placeholder='seu@email.com'
                            placeholderTextColor="#b3b3b3ff"
                            value={email}
                            onChangeText={setEmail}
                        >
                        </TextInput>
                    </View>
                </View>
                <View style={styles.divEmail}>
                    <View style={styles.email}>
                        <Text style={styles.text}>
                            Senha
                        </Text>
                    </View>
                    <View style={styles.inputEmail}>
                        <TextInput style={styles.input}
                            placeholder='Insira sua senha'
                            placeholderTextColor="#b3b3b3ff"
                            secureTextEntry={true}
                            value={senha}
                            onChangeText={setSenha}
                        >
                        </TextInput>
                    </View>
                </View>
                <View style={styles.divBotao}>

                    <TouchableOpacity style={styles.botaoLogar} onPress={() => fazerLogin()}>
                        <Text style={styles.textBotao}>Logar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.linkCadastro}>
                    <Text style={styles.textCadastro}>Ainda não tem uma conta?</Text>
                    <TouchableOpacity onPress={() => router.navigate('telaCadastro')}> <Text style={styles.botaoCadastro}>Cadastre-se</Text></TouchableOpacity>
                </View>
            </View>

        </View >

    );
};

const styles = StyleSheet.create({
    divLogin: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        width: 320,
    },
    divText: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000000',
    },
    divForm: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

    },
    divForm: {
        width: '80%',
        flexDirection: 'column',
        gap: 20,
    },
    divEmail: {
        gap: 6,
    },
    text: {
        fontSize: 17,
        color: '#000000',
        paddingLeft: 10,
    },
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#000000',
        height: 46,
        borderRadius: 17,
        paddingLeft: 15,
    },
    divBotao: {
        marginTop: 30,
        marginBottom: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoLogar: {
        width: '70%',
        backgroundColor: '#2E58B9',
        textWeight: 'bold',
        color: 'white',
        height: 55,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBotao: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    linkCadastro: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        width: '100%',
        gap: 6,
    },
    textCadastro: {
        fontSize: 17,
        color: '#000000',
        fontWeight: '500',
    },
    botaoCadastro: {
        color: "#001FEB",
        fontSize: 17,
        fontWeight: '500',
    },
});

export default Login;