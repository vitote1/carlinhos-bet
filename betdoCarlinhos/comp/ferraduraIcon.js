import React from "react";
import { Image, View, StyleSheet} from "react-native";
const FerraduraIcon = ({height, width, ferraduraTop}) => {
    return(
        <View styles={styles.divFerradura} >
            <Image style={{
                position: 'absolute',
                height: height,
                width: width,
                zIndex:1,
                marginTop:ferraduraTop,
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
        zIndex:1,
        
    
    
    },
});
export default FerraduraIcon;