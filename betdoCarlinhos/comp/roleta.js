import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useEffect } from "react";

const symbols = [
  require('../assets/images/cavalo.png'), //0
  require('../assets/images/Jegue.png'),//1
  require('../assets/images/coritias.png')//2
];


export default function Jackpot({acionarFuncao}) {
  const [reels, setReels] = useState([
    [symbols[0], symbols[1], symbols[2]], 
    [symbols[1], symbols[2], symbols[0]],
    [symbols[2], symbols[0], symbols[1]]
  ]);

  const [rolling, setRolling] = useState(false);

  const [message, setMessage] = useState("Clique em SPIN para começar!");

  const spin = () => {
        if (rolling) return;
        
        // 1. Inicia a rolagem
        setRolling(true);
        setMessage("Rodando...");

        const newReels = reels.map(() => {
            const randomIndex = Math.floor(Math.random() * symbols.length);
            return symbols[randomIndex];
        });

        // 2. Simula a rotação por 2 segundos (2000ms)
        setTimeout(() => {
            // 3. Atualiza os rolos após a simulação
            setReels(newReels);
            
            // 4. Finaliza a rolagem
            setRolling(false);
            
            // 5. Verifica o resultado
            checkWin(newReels);
        }, 2000); 
    };
    


const checkWin = (currentReels) => {
    if (currentReels[0] === currentReels[1] && currentReels[1] === currentReels[2]) {
        alert("Parabéns! Você GANHOU!");
    } else {}
};

  

   React.useEffect(() => {
    if (acionarFuncao) spin();
  }, [acionarFuncao]);

  return (
    <View style={styles.container}>
      <View style={styles.reelsContainer}>
        {reels.map((line, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {line.map((symbol, colIndex) => (
              <Image 
                key={`${rowIndex}-${colIndex}`} 
                source={symbol} 
                style={styles.symbol} 
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
  title: { 
    fontSize: 32, 
    marginBottom: 30,
    fontWeight: "bold",
    color: "#333"
  },
  reelsContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    
    elevation: 5,
  },
  row: { 
    flexDirection: "row", 
    marginVertical: 10 
  },
  symbol: { 
    width: 80, 
    height: 80, 
    marginHorizontal: 10,
    resizeMode: "contain"
  },
});