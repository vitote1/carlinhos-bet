import React from "react";
import { Image, View, StyleSheet } from "react-native";

const FerraduraIcon = ({height, width, ferraduraTop}) => {
    return (
        <View style={styles.divFerradura}>
            <Image
                style={{
                    height: height,
                    width: width,
                    marginTop: ferraduraTop,
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

export default FerraduraIcon;
