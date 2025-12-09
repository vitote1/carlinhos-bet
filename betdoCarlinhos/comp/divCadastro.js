import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { adicionarUsuario } from '../service/betService';


const Cadastro = () => {

    const router = useRouter();
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const fazerCadastro = async () => {
        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem');
            return;
        }
        await adicionarUsuario(nome, email, senha, cpf);
        router.navigate('telaLogin');
    };

    return (
        <View style={styles.divLogin}>
            <View style={styles.divText}>
                <Text style={styles.title}>
                    Cadastro
                </Text>
            </View>
            <View style={styles.divForm}>
                <View style={styles.divEmail}>
                    <View style={styles.email}>
                        <Text style={styles.text}>
                            Nome
                        </Text>
                    </View>
                    <View style={styles.inputEmail}>
                        <TextInput style={styles.input}
                            placeholder='Seu nome'
                            placeholderTextColor="#b3b3b3ff"
                            value={nome}
                            onChangeText={setNome}
                        >
                        </TextInput>
                    </View>
                </View>
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
                            CPF
                        </Text>
                    </View>
                    <View style={styles.inputEmail}>
                        <TextInput style={styles.input}
                            placeholder='000.000.000-00'
                            placeholderTextColor="#b3b3b3ff"
                            value={cpf}
                            onChangeText={setCpf}
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
                            placeholder='Crie uma senha'
                            placeholderTextColor="#b3b3b3ff"
                            secureTextEntry={true}
                            value={senha}
                            onChangeText={setSenha}
                        >
                        </TextInput>
                    </View>
                </View>
                <View style={styles.divEmail}>
                    <View style={styles.email}>
                        <Text style={styles.text}>
                            Confirmar Senha
                        </Text>
                    </View>
                    <View style={styles.inputEmail}>
                        <TextInput style={styles.input}
                            placeholder='Confirme sua senha'
                            placeholderTextColor="#b3b3b3ff"
                            secureTextEntry={true}
                            value={confirmarSenha}
                            onChangeText={setConfirmarSenha}
                        >
                        </TextInput>
                    </View>
                </View>
                <View style={styles.divBotao}>
                    <TouchableOpacity style={styles.botaoLogar} onPress={() => fazerCadastro()}>
                        <Text style={styles.textBotao}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.linkCadastro}>
                    <Text style={styles.textCadastro}>Já possui uma conta?</Text>
                    <TouchableOpacity onPress={() => router.navigate('telaLogin')}> <Text style={styles.botaoCadastro}>Logar-se</Text></TouchableOpacity>
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

export default Cadastro;