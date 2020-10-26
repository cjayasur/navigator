import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Button,  StyleSheet, TouchableOpacity} from 'react-native';
import {
    Card,
    Title,
    Paragraph,
    List,
    Provider as PaperProvider, Headline,
} from 'react-native-paper';

import { View, Text } from 'react-native';
import TopBar from "./Components/TopBar";
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

const DetailsScreen = ({route, navigation}) => {
    const { itemID, otherParam } = route.params
    return(
        <>
            <TouchableOpacity style={styles.button} onPress={() => navigation.push("Details",
                {itemID: Math.random() * 100})}>
                <Text> Press to go to Detail</Text>
            </TouchableOpacity>
            <Headline> itemID: {JSON.stringify(itemID)}</Headline>
            <TouchableOpacity style={styles.button} onPress={() => navigation.popToTop()}>
                <Text> Press to go Home</Text>
            </TouchableOpacity>
        </>
)
}

const HomeScreen = ({ navigation, title, content }) => (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Details", {
        itemID: 56,
        otherParam: 'Passing 56 to Details screen'
    })}
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
