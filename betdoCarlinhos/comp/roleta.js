import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useEffect } from "react";

const symbols = [
  require('../assets/images/cavalo.png'),
  require('../assets/images/Jegue.png'),
  require('../assets/images/coritias.png')
];


export default function Jackpot({acionarFuncao}) {
  const [reels, setReels] = useState([
    [symbols[0], symbols[1], symbols[2]], 
    [symbols[1], symbols[2], symbols[0]],
    [symbols[2], symbols[0], symbols[1]]
  ]);

  const spin = () => {
    console.log('go')
    const newReels = Array.from({ length: 3 }, () =>
      Array.from({ length: 3 }, () => {
        const randomIndex = Math.floor(Math.random() * symbols.length);
        return symbols[randomIndex];
      })
    );
    setReels(newReels);
    
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