import React from "react";
import { Image, View, StyleSheet} from "react-native";

const TrevoTop = () => {
    return(
<View>
        <View style={styles.divtrevo}>
            <Image style={styles.iconeTrevo} source={require("../assets/images/trevosTopIcon.png")}></Image>
        </View>
</View>

    )
}

const styles = StyleSheet.create({
    divtrevo: { 
        alignItems: 'center',
        flex: 1,  
    },
    iconeTrevo: {
        alignSelf: 'center',
        width: 430,
        height: 168,
    },
})

export default TrevoTop;