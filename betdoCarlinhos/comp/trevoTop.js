import React from "react";
import { Image, View, StyleSheet} from "react-native";
const TrevoTop = () => {
    return(
        <View styles={styles.divtrevo} >
            <Image style={styles.iconeTrevo} source={require("../assets/images/trevosTopIcon.png")}></Image>
        </View>

    )

}
const styles = StyleSheet.create({
    divtrevo: { 
    alignItems: 'center',
    marginTop: 100,
    flex: 1,
    
                
            },
    iconeTrevo: {
        alignSelf: 'center',
        width: 410,
        marginTop:0,
        height: 350,
        position: 'absolute',
    },
})
export default TrevoTop;