import * as React from "react";
// import { Text } from "react-native-paper";
import {View, StyleSheet, Text} from "react-native";
import Box from "../Components/Box";
import BoxStyles from "../CustomProperties/BoxStyles";
import {blue50, green400, greenA100, purple500, red500, yellow800} from "react-native-paper/src/styles/colors";
import {green500} from "react-native-paper";
import Column from "../Components/Column";
const styles = StyleSheet.create({
    container:  {
        flex:   1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor:    "ghostwhite",
    },
    box:{
        width:  "auto",
        alignSelf:  "stretch",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightgray",
        borderWidth:    1,
        borderStyle:    "dashed",
        borderColor:    "black",
    },
    boxText: {
        fontWeight: "bold",
        color:  "darkgray",
    }
})

const RecentRoute = () =>{
    return(
        <View style={BoxStyles.container}>
            <View style={BoxStyles.box} >
                <Text style={BoxStyles.boxText}>Box 1 </Text>
            </View>
            <View style={[BoxStyles.box, {backgroundColor: "red"}]} >
                <Text style={BoxStyles.boxText}>Box 2 </Text>
            </View>
            <View style={BoxStyles.box} >
                <Text style={BoxStyles.boxText}>Box 3 </Text>
            </View>
            <View style={[BoxStyles.box, {backgroundColor: "red"}]} >
                <Text style={BoxStyles.boxText}>Box 4 </Text>
            </View>
            <Column>
                <Box boxColor={yellow800} styleObj={[styles.box,{height: "auto", width: "auto",}]}> Box 6  </Box>
                <Box boxColor={red500} styleObj={[styles.box,{height: "auto", width: "auto",}]}> Box 6  </Box>
                <Box boxColor={yellow800} styleObj={[styles.box,{height: "auto", width: "auto",}]}> Box 6  </Box>
                <Box boxColor={red500} styleObj={[styles.box,{height: "auto", width: "auto",}]}> Box 6  </Box>
                <Box boxColor={yellow800} styleObj={[styles.box,{height: "auto", width: "auto",}]}> Box 6  </Box>
                <Box boxColor={red500} styleObj={[styles.box,{height: "auto", width: "auto",}]}> Box 6  </Box>
                <Box boxColor={yellow800} styleObj={[styles.box,{height: "auto", width: "auto",}]}> Box 6  </Box>
                <Box boxColor={red500} styleObj={[styles.box,{height: "auto", width: "auto",}]}> Box 6  </Box>
                <Box boxColor={yellow800} styleObj={[styles.box,{height: "auto", width: "auto",}]}> Box 6  </Box>
                <Box boxColor={red500} styleObj={[styles.box,{height: "auto", width: "auto",}]}> Box 6  </Box>
                <Box boxColor={yellow800} styleObj={[styles.box,{height: "auto", width: "auto",}]}> Box 6  </Box>
                <Box boxColor={red500} styleObj={[styles.box,{height: "auto", width: "auto",}]}> Box 6  </Box>
                <Box boxColor={yellow800} styleObj={[styles.box,{height: "auto", width: "auto",}]}> Box 6  </Box>
                <Box boxColor={red500} styleObj={[styles.box,{height: "auto", width: "auto",}]}> Box 6  </Box>
                <Box boxColor={yellow800} styleObj={[styles.box,{height: "auto", width: "auto",}]}> Box 6  </Box>
                <Box boxColor={red500} styleObj={[styles.box,{height: "auto", width: "auto",}]}> Box 6  </Box>
            </Column>
            <Box boxColor={purple500}> Box 7  </Box>
            <Box boxColor={greenA100}> Box 7  </Box>
        </View>
        )
}

export default RecentRoute;
