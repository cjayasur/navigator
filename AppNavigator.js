import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Button,  StyleSheet, TouchableOpacity} from 'react-native';
import {
    Card,
    Title,
    Paragraph,
    List,
    Provider as PaperProvider,
} from 'react-native-paper';

import { View, Text } from 'react-native';
/*
function HomeScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title={"Go to details"} onPress={() => navigation.navigate("Details")} />
        </View>
    );
}
const DetailsScreen = ({navigation}) => {
    return(
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text> Detail Screen</Text>
            <Button title={"Go to details"} onPress={() => navigation.push("Details")} />
        </View>
    )
}
*/

const DetailsScreen = ({navigation}) => {
    return(
        <TouchableOpacity style={styles.button} onPress={() => navigation.push("Details")}>
            <Text> Press to go to Detail</Text>
        </TouchableOpacity>
    )
}

const HomeScreen = ({ navigation, title, content }) => (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Details")}
    >
        <Text>Press to go to details screen</Text>
    </TouchableOpacity>
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    }
});


const Stack = createStackNavigator();
export default function AppNavigator() {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} options={{title:'Home',content: 'Home Content'}} />
                    <Stack.Screen name="Details" component={DetailsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}
