import React, { useState, useEffect, useRef } from "react";
import { View, Image, TouchableOpacity, StyleSheet, Text, Alert, Animated, Easing } from "react-native";

const symbols = [
    require('../assets/images/cavalo.png'),
    require('../assets/images/Jegue.png'),
    require('../assets/images/coritias.png'),
    require('../assets/images/carlinhosRoleta.webp'),
    require('../assets/images/among.jpg'),
];

export default function Jackpot({ acionarFuncao, onRollingChange, onWin }) {
    const [reels, setReels] = useState([
        [symbols[0], symbols[1], symbols[2]],
        [symbols[1], symbols[3], symbols[0]],
        [symbols[2], symbols[4], symbols[4]]
    ]);
    const firstRender = useRef(true);
    const [rolling, setRolling] = useState(false);
    
    // Array para armazenar as animações de cada símbolo
    const spinAnimations = useRef(
        Array(3).fill().map(() => 
            Array(3).fill().map(() => new Animated.Value(0))
        )
    ).current;
    
    // Array para armazenar as interpolações de cada símbolo
    const interpolatedSpins = useRef(
        Array(3).fill().map((_, rowIndex) => 
            Array(3).fill().map((_, colIndex) => 
                spinAnimations[rowIndex][colIndex].interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg']
                })
            )
        )
    ).current;

    const symbolNames = new Map([
        [symbols[0], "Cavalo"],
        [symbols[1], "Jegue"],
        [symbols[2], "Corinthians"],
        [symbols[3], "Carlinhos"],
        [symbols[4], "Amongus"],
    ]);

    const checkWin = (currentReels) => {
        const lineWins = [];

        for (let i = 0; i < 3; i++) {
            const [a, b, c] = currentReels[i];

            if (a === b && b === c) {
                const nome = symbolNames.get(a) || "Desconhecido";

                lineWins.push({
                    rowIndex: i,
                    symbol: a,
                    nome: nome,
                    count: 3
                });
            }
        }

        if (lineWins.length >= 2) {
            const s1 = lineWins[0].symbol;
            const s2 = lineWins[1].symbol;

            if (s1 === s2) {
                return [
                    {
                        rowIndex: [lineWins[0].rowIndex, lineWins[1].rowIndex],
                        symbol: s1,
                        nome: symbolNames.get(s1),
                        count: 6
                    }
                ];
            }
        }

        return lineWins;
    };

    // Função para iniciar animações de rotação
    const startSpinAnimations = () => {
        spinAnimations.forEach((row, rowIndex) => {
            row.forEach((anim, colIndex) => {
                // Resetar animação
                anim.setValue(0);
                
                // Criar animação contínua
                Animated.loop(
                    Animated.timing(anim, {
                        toValue: 1,
                        duration: 300, // Mais rápido para parecer uma rotação rápida
                        easing: Easing.linear,
                        useNativeDriver: true,
                    })
                ).start();
            });
        });
    };

    // Função para parar animações de rotação
    const stopSpinAnimations = () => {
        spinAnimations.forEach(row => {
            row.forEach(anim => {
                anim.stopAnimation();
                // Resetar para 0 graus
                anim.setValue(0);
            });
        });
    };

    const spin = () => {
        if (rolling) return;

        setRolling(true);
        if (onRollingChange) onRollingChange(true);
        
        // Iniciar animações de rotação
        startSpinAnimations();

        const newReels = [];
        for (let i = 0; i < 3; i++) {
            const row = [];
            for (let j = 0; j < 3; j++) {
                const randomIndex = Math.floor(Math.random() * symbols.length);
                row.push(symbols[randomIndex]);
            }
            newReels.push(row);
        }

        setTimeout(() => {
            // Parar animações de rotação
            stopSpinAnimations();
            
            setReels(newReels);
            setRolling(false);
            if (onRollingChange) onRollingChange(false);
            const wins = checkWin(newReels);

            if (onWin) {
                onWin(wins);
            }
        }, 500);
    };

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }

        spin();
    }, [acionarFuncao]);

    return (
        <View style={styles.container}>
            <View style={styles.reelsContainer}>
                {reels.map((line, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        {line.map((symbol, colIndex) => (
                            <Animated.Image
                                key={`${rowIndex}-${colIndex}`}
                                source={symbol}
                                style={[
                                    styles.symbol,
                                    {
                                        transform: [
                                            {
                                                rotate: rolling ? interpolatedSpins[rowIndex][colIndex] : '0deg'
                                            }
                                        ]
                                    }
                                ]}
                            />
                        ))}
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0"
    },
    reelsContainer: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 15,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    row: {
        flexDirection: "row",
        marginVertical: 5
    },
    symbol: {
        width: 80,
        height: 80,
        marginHorizontal: 5,
        resizeMode: "contain"
    },
    spinButton: {
        marginTop: 30,
        backgroundColor: "#ff4500",
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 10,
        elevation: 3,
    },
    spinButtonDisabled: {
        backgroundColor: "#888",
    },
    spinButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    },
    statusText: {
        marginTop: 10,
        fontSize: 16,
        color: "#666",
        fontStyle: 'italic',
    },
});