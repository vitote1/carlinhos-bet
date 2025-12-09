import React from "react";
import { Image, View, StyleSheet } from "react-native";

const FerraduraIconCamada2 = ({ width, height, top }) => {
    return (
        <View style={styles.divFerradura}>
            <Image
                style={{
                    width: width,
                    height: height,
                    marginTop: top,
                }}
                source={require("../assets/images/ferraduraIcon.png")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    divFerradura: {
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 60,
    },
});

export default FerraduraIconCamada2;
