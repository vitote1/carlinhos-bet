import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useEffect } from "react";

const symbols = [
  require('../assets/images/cavalo.png'),
  require('../assets/images/Jegue.png'),
  require('../assets/images/coritias.png')
];

function verificarLinha(line) {
  if (line.every(symbol => symbol === line[0])) {
    return line[0]; 
  }
  return null;
}
function verificarTodosIguais(reels) {
  const flat = reels.flat();
  if (flat.every(symbol => symbol === flat[0])) {
    return flat[0];
  }
  return null;
}

export default function Jackpot({acionarFuncao}) {
  const [reels, setReels] = useState([
    [symbols[0], symbols[1], symbols[2]], 
    [symbols[1], symbols[2], symbols[0]],
  ]);

  const spin = () => {
    console.log('go')
    const newReels = Array.from({ length: 2 }, () =>
      Array.from({ length: 3 }, () => {
        const randomIndex = Math.floor(Math.random() * symbols.length);
        return symbols[randomIndex];
      })
    );
    setReels(newReels);
    
newReels.forEach((line, i) => {
    const repetido = verificarLinha(line);
    if (repetido) {
      console.log(`Linha ${i+1} tem 3 símbolos iguais!`, repetido);
      if (enviarResultado) enviarResultado(repetido); 
    }
  });


  const todosIguais = verificarTodosIguais(newReels);
  if (todosIguais) {
    console.log("Todas as 6 posições são iguais!", todosIguais);
    if (enviarResultado) enviarResultado(todosIguais);
  }
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