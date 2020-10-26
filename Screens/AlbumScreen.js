import * as React from "react";
import { Text } from "react-native-paper";
import {ScrollView, View, StyleSheet} from "react-native";
import IconButton from "react-native-paper/src/components/IconButton";

{/*
https://reactnative.dev/docs/flexbox
https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
https://callstack.github.io/react-native-paper/index.html
https://www.youtube.com/watch?v=Hf4MJH0jDb4
https://dev.to/sankhadeeproy007/using-react-hook-form-with-react-native-part-i-set-up-validation-31ca
https://dev.to/sankhadeeproy007/using-react-hook-form-with-react-native-part-i-set-up-validation-31ca
https://www.youtube.com/watch?v=O433Arp-l0E
https://www.reactnativetutorials.com/search/label/Logics
https://docs.nativebase.io/docs/GetStarted.html
https://reactnativeelements.com/docs/
https://necolas.github.io/react-native-web/docs/?path=/docs/overview-getting-started--page
https://reactnavigation.org/docs/getting-started

*/}
const AlbumRoute = () => {
    return (
        <React.Fragment>
            <View style={{flexDirection: "row", flex: 1}}>


                <View style={{flex: 1}}>

                    <IconButton
                        icon="menu"
                        color="green"
                        size={20}
                        onPress={() => console.log('Pressed')}
                    />
                    <IconButton
                        icon="camera"
                        color="red"
                        size={20}
                        onPress={() => console.log('Pressed')}
                    />
                    <IconButton
                        icon="plus"
                        color="red"
                        size={20}
                        onPress={() => console.log('Pressed')}
                    />
                </View>
                <View style={{backgroundColor: "blue", flex:4, position: "relative"}}>
                    <Text style={styles.text}>blue box</Text>
                </View>
                <View style={{backgroundColor: "red", flex: 4,position: "relative"}}>
                    <Text style={styles.text}>red box</Text>
                </View>
            </View>
        </React.Fragment>
    )
}
const styles= StyleSheet.create({
    text:    {
        color: 'black',
        fontSize: 8,
    },
})

export default AlbumRoute;
