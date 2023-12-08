import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

export default function MyOrdersScreen({navigation}){
    return(
        <View style={styles.container}>
            <Header title="My Orders"/>
            <View style={styles.view1}>
                <Text style={styles.text1}>No Orders Available</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    text1:{
        fontSize:16
    },
    view1:{
        alignItems:'center',
        justifyContent:'center',
        paddingTop:100
    }
})