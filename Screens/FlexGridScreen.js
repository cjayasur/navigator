import React from "react";
import { View, StatusBar } from "react-native";
import  styles from "../CustomProperties/FlexGridStyles";
import Box from "../Components/Box";
import {greenA400, red600, yellow800} from "react-native-paper/src/styles/colors";

const boxes = new Array(10).fill(null).map((v, i) => i + 1);

const FlexGrid = () => {
    return(
        <View style={styles.container}>
            <StatusBar hidden={false} />
            {console.log("FlexGrid Console Log")}
            {boxes.map(i => (
                <Box key={i} boxColor={red600} styleObj={styles.box}>#{i}</Box>
            ))}
        </View>
    )
}

export default FlexGrid
