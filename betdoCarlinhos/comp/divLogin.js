import { Text, View, StyleSheet, TextInput } from 'react-native';
import React from 'react';


const Login = () => {
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
                            placeholder='Digite seu E-mail'
                        >
                        </TextInput>
                    </View>
                </View>




            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    divLogin: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        width: 353,
        heigth: 528,
    },
    divText: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000000',
    },
    divForm: {
        marginTop: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    divForm: {
        width: '80%',
        flexDirection: 'column',
    },
    divEmail: {
        gap: 6,
    },
    text: {
        fontSize: 17,
        color: '#000000',
    },
    input: {
        borderWidth: 1,
        borderColor: '#000000',
        height: 56,
        borderRadius: 20,
        paddingLeft: 15,
    }


});

export default Login;