import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "ghostwhite",
        alignItems: "center",
        justifyContent: "space-around",
                ...Platform.select({
                    ios: { paddingTop: 20 },
                    android: { paddingTop: StatusBar.currentHeight }
                })
    },

    box: {
        /*
        height: 100,
        width: 100,
         */
        height: "auto",
        width: "auto",
        justifyContent: "center",
        alignSelf: "stretch",
        alignItems: "center",
        backgroundColor: "lightgray",
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "darkslategray"
    },

    boxText: {
        color: "darkslategray",
        fontWeight: "bold"
    },
    row:    {
       flex:    1,
       flexDirection: "row",
       alignItems: "center",
       alignSelf: "stretch",
       backgroundColor: "green",
       borderColor: "darkgray",
       borderWidth: 1,
    },
    column: {
        height: "auto",
        width: "auto",
        flex:    1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        alignSelf: "stretch",
        backgroundColor: "pink",
        borderColor: "darkgray",
        borderWidth: 1,
    }

});
