import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { listarUsers } from '../service/betService';
import React, { useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";



const Login = () => {


    const router = useRouter();
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [cpf, setCpf] = useState('');
    const [novaSenha, setNovaSenha] = useState('');

    async function carregarInfo() {
        try {
            const userStr = await AsyncStorage.getItem("usuarioLogado");
            if (!userStr) return;

            const usuario = JSON.parse(userStr);

            setEmail(usuario.email);
            setSenha(usuario.senha);
            setCpf(usuario.cpf);
            setNome(usuario.nome);

        } catch (err) {
            console.log("Erro ao carregar dados do usuário:", err);
        }
    }

    useEffect(() => {
        carregarInfo();
    }, []);

   async function atualizarDados() {
    try {
        const usuariosArray = await listarUsers();
        const userStr = await AsyncStorage.getItem("usuarioLogado");

        if (!userStr || !usuariosArray) return;

        const userTxt = JSON.parse(userStr);

        const usuarioBd = usuariosArray.find(
            (u) => u.email === userTxt.email && u.id === userTxt.id && u.cpf === userTxt.cpf
        );

        if (!usuarioBd) return;

        if (usuarioBd.email !== email) {
            usuarioBd.email = email;
            userTxt.email = email;
        }
        if (usuarioBd.senha !== senha) {
            usuarioBd.senha = senha;
            userTxt.senha = senha;
        }
        if (usuarioBd.cpf !== cpf) {
            usuarioBd.cpf = cpf;
            userTxt.cpf = cpf;
        }
        if (usuarioBd.nome !== nome) {
            usuarioBd.nome = nome;
            userTxt.nome = nome;
        }

        const index = usuariosArray.findIndex((u) => u.id === usuarioBd.id);
        usuariosArray[index] = usuarioBd;

        await AsyncStorage.setItem("usuarioLogado", JSON.stringify(userTxt));
        await AsyncStorage.setItem("usuarios", JSON.stringify(usuariosArray));

        alert("Dados atualizados com sucesso!");
        router.push("telaUsuario");
    } catch (err) {
        console.log("Erro ao atualizar:", err);
        alert("Erro ao atualizar dados.");
    }
}

    return (
        <View style={styles.divAlterarDados}>
            <View style={styles.divText}>
                <Text style={styles.title}>
                    Dados
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
                            placeholder='Alterar Nome'
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
                            placeholder='Alterar Email'
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
                            placeholder='Alterar senha'
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
                            CPF
                        </Text>
                    </View>
                    <View style={styles.inputEmail}>
                        <TextInput style={styles.input}
                            placeholder='Alterar CPF'
                            placeholderTextColor="#b3b3b3ff"
                            value={cpf}
                            onChangeText={setCpf}
                        >
                        </TextInput>
                    </View>
                </View>
                <View style={styles.divBotao}>

                    <TouchableOpacity style={styles.botaoLogar} onPress={atualizarDados}>
                        <Text style={styles.textBotao}>Atualizar Dados</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View >

    );
};

const styles = StyleSheet.create({
    divAlterarDados: {
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
        width: '90%',
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