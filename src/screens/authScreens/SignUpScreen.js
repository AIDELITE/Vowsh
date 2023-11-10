import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { Button } from "react-native-elements";
import { colors, parameters,title} from '../../global/styles';

export default function SignUpScreen({navigation}) {
    return (
    <View style={styles.container}>
        <Header title="My Account" type="arrow-left" navigation = {navigation}/>
        <View style={{marginLeft:20, marginTop:10}}>
            <Text style={title}>Create an Account</Text>
        </View>

        <View style={{alignItems:"center",marginTop:10}}>
            <Text style={styles.text1}>Please Fill in Your Names, Email</Text>
            <Text style={styles.text1}>And Password to Create your Account</Text>
        </View>

        <View>
            <View style={{marginTop:20}}>
                <TextInput
                    style={styles.TextInput1}
                    placeholder="First Name (Required) * :"
                />
            </View>

            <View style={{marginTop:15}}>
                <TextInput
                    style={styles.TextInput1}
                    placeholder="Last Name (Required) * :"
                />
            </View>

            <View style={{marginTop:15}}>
                <TextInput
                    style={styles.TextInput1}
                    placeholder="Email (Required) * :"
                />
            </View>

            <View style={{marginTop:15}}>
                <TextInput
                    style={styles.TextInput1}
                    placeholder="Password (Required) * :"
                />
            </View>

            <View style={{marginTop:15}}>
                <TextInput
                    style={styles.TextInput1}
                    placeholder="Confirm Password (Required) * :"
                />
            </View>
        </View>
        <View style={{marginHorizontal:20, marginTop:30}}>
            <Button
                title="SIGN UP"
                buttonStyle={parameters.styledButton}
                titleStyle={parameters.buttonTitle}
                //onPress={()=>{navigation.navigate('DrawerNavigator')}}
            />
        </View>

        <View style={{marginTop:25, marginLeft:20}}>
            <Text style={{...styles.text1}}>Already Having an Account ?</Text>
        </View>

        <View style={{alignItems:'flex-end',marginHorizontal:20}}>
            <Button
                title="Sign In"
                buttonStyle={styles.createButton}
                titleStyle={styles.createButtonTitle}
                onPress={()=>{
                    navigation.navigate("SignInScreen");
                }}
            />
        </View>
    </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text1: {
        color: colors.grey3,
        fontSize:16
    },

    TextInput1: {
        borderWidth:1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft: 20
    },

    TextInput2: {
        borderWidth:1,
        borderRadius:12,
        marginHorizontal:20,
        borderColor: "#86939e",
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent: "center",
        alignItems: "center",
        paddingLeft: 15
    },

    socialIcon:{
        borderRadius: 12,
        height:50
    },

    createButton:{
        backgroundColor:'white',
        alignContent:'center',
        justifyContent:'center',
        borderRadius:12,
        borderWidth:1,
        borderColor:'#df078e',
        height:40,
        paddingHorizontal:20
    },

    createButtonTitle:{
        color: '#df078e',
        fontSize:16,
        fontWeight:'bold',
        alignItems:'center',
        justifyContent:'center',
        marginTop:-3
    }
})