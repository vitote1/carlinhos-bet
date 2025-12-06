import React from "react";
import { Image, View, StyleSheet} from "react-native";
const FerraduraIconCamada2 = () => {
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
        zIndex:3,
    
    
    },
    iconeFerradura: {
        position: 'absolute',
        width: 250,
        height: 118,
        zIndex:3,
        marginTop:131,
        alignSelf: 'center',
        
    }
});
export default FerraduraIconCamada2;