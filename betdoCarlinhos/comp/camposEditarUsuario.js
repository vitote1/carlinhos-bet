import React, { useState } from 'react';
import { 
    View, 
    StyleSheet, 
    TextInput 
} from 'react-native';
import Back from '../comp/background';

const TelaEditarUsuario = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [cpf, setCpf] = useState('');

    return (
        <View style={styles.screen}>
            <Back/>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#666666"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#666666"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="CPF"
                    placeholderTextColor="#666666"
                    value={cpf}
                    onChangeText={setCpf}
                    keyboardType="numeric"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 50, 
        justifyContent: 'flex-start', 
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#999999',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: '#f8f8f8', 
        color: '#333333', 
    },
});

export default TelaEditarUsuario;