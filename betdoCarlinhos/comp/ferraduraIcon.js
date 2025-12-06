import React from "react";
import { Image, View, StyleSheet} from "react-native";
const FerraduraIcon = () => {
    return(
        <View styles={styles.divFerradura} >
            <Image style={styles.iconeFerradura} source={require("../assets/images/ferraduraIcon.png")}></Image>
        </View>

    )

}
const styles = StyleSheet.create({
    divFerradura: { 
        position:'absolute',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 60,
        zIndex:1,
    
    
    },
    iconeFerradura: {
        position: 'absolute',
        width: 250,
        height: 200,
        zIndex:1,
        marginTop:90,
        alignSelf: 'center',
        
    }
});
export default FerraduraIcon;