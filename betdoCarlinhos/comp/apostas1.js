import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { userEffect, useState } from 'react';
import { useRouter } from 'expo-router';

const Aposta = () => {
    const router = useRouter();

    return (
        <View style={styles.divPai}>
            <View style={styles.telao}>
                <View style={styles.moldura}>
                    <View style={styles.expoe}>
                           <Text style={styles.indicar}>323131</Text>
                    </View>
                </View>

            </View>
        </View>
            );
};

            const styles = StyleSheet.create({
                divPai: {
                    display: 'flex',
                    flexDirection: 'column',              
                 },
                telao: {
                    borderTopWidth: 3,
                    borderBottomWidth: 3,
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
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                indicar: {
                    fontSize: 22,
                }

            });

            export default Aposta;