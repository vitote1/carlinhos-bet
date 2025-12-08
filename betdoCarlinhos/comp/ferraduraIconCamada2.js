import React from "react";
import { Image, View, StyleSheet} from "react-native";
const FerraduraIconCamada2 = ({ width, height,top }) => {
    return(
        <View styles={styles.divFerradura} >
            <Image style={{
                position: 'absolute',
                width: width,
                height: height,
                zIndex:3,
                marginTop:top,
                alignSelf: 'center',
            }} source={require("../assets/images/ferraduraIcon.png")}></Image>
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
});
export default FerraduraIconCamada2;