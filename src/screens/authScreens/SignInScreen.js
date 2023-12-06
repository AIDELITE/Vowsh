import React,{useState,useRef,useContext} from "react";
import { View, Text, StyleSheet, TextInput,ActivityIndicator,ToastAndroid} from "react-native";
import { colors, parameters,title} from '../../global/styles';
import { Icon,Button,SocialIcon } from "react-native-elements";
import { Formik } from "formik";
import Header from "../../components/Header";
import * as Animatable from 'react-native-animatable';
import auth from '@react-native-firebase/auth';
import { SignInContext } from "../../context/authContext";
import Loader from "../../components/Loader";


export default function SignInScreen({navigation}){

    const showErrorToast =(message)=>{
        ToastAndroid.showWithGravity(
            message,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        )
    }

    const {dispatchSignedIn} = useContext(SignInContext);
    const [textInput2Fossued,setText2Fossued] = useState(false);

    const [showPassword, setShowPassword] = useState(false); //tracks the state of password visibility.

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const textInput1 = useRef(1);
    const textInput2 = useRef(2);

    async function signIn(data){
        try{
        const {password,email} = data
        let new_mail = email.trim();
        let new_password = password.trim();
        if(new_mail==="")
        {
            showErrorToast('Please Enter Email Address');
        }else if(new_password==="")
        {
            showErrorToast('Please Enter Password');
        }else{
        const user = await auth().signInWithEmailAndPassword(new_mail,new_password)
        if(user){
            dispatchSignedIn({type:'UPDATE_SIGN_IN',payload:{userToken:'signed-in'}})
        }}
        }catch(error){
            if(error.code ==='auth/invalid-email'){
                showErrorToast('Please Enter A Valid Email Address');
            }
            else if(error.code ==='auth/invalid-credential'){
                showErrorToast('Email Or Password is NOT Correct');
            }

            else if(error.code ==='auth/network-request-failed'){
                showErrorToast('No Network Connection, Please Check your Network Connectivity');
            }

            else{
                showErrorToast('Cannot Sign in At this Time');
            }
        }
    }
    return(
        <View style={styles.container}>
            <Header title="My Account" type="arrow-left" navigation = {navigation}/>
            <View style={{marginLeft:20, marginTop:10}}>
                <Text style={title}>Sign-In</Text>
            </View>
            <View style={{alignItems:"center",marginTop:10}}>
                <Text style={styles.text1}>Please Enter Email and Password</Text>
                <Text style={styles.text1}>Registered with your Account</Text>
            </View>
            <Formik
                initialValues={{email:'',password:''}}
                onSubmit={(values)=>{

                    signIn(values)
                }}
            >
                {
            (props)=>
            <View>
            <View>
                <View style={{marginTop:20}}>
                    <TextInput
                    style={styles.TextInput1}
                    placeholder="Email"
                    ref={textInput1}
                    onChangeText={props.handleChange('email')}
                    value={props.values.email}
                    autoComplete="off"
                    />
                </View>
                <View style={styles.TextInput2}>
                    <Animatable.View animation={textInput2Fossued? "":"fadeInLeft"} duration={400}>
                        <Icon
                            name="lock"
                            iconStyle={colors.grey3}
                            type="material"
                        />
                    </Animatable.View>
                    <TextInput
                        secureTextEntry={!showPassword}
                        style={{width:"80%"}}
                        placeholder="Password"
                        ref={textInput2}
                        onFocus={()=>{
                            setText2Fossued(false);
                        }}
                        onBlur={()=>{
                            setText2Fossued(true);
                        }}
                        onChangeText={props.handleChange('password')}
                        value={props.values.password}

                    />
                    <Animatable.View animation={textInput2Fossued? "":"fadeInLeft"} duration={400}>
                        <Icon
                            iconStyle={colors.grey3}
                            type="material"
                            style={{marginRight:15}}
                            name={showPassword ? 'visibility' : 'visibility-off'}
                            onPress={toggleShowPassword}
                        />
                    </Animatable.View>
                </View>
            </View>
            <View style={{marginHorizontal:20, marginTop:30}}>
                <Button
                    title="SIGN IN"
                    buttonStyle={parameters.styledButton}
                    titleStyle={parameters.buttonTitle}
                    //onPress={()=>{navigation.navigate('DrawerNavigator')}}
                    onPress={props.handleSubmit}
                />
            </View>
            </View>
            }
            </Formik>

            <View style={{alignItems:'center', marginTop:15}}>
                <Text style={{...styles.text1,textDecorationLine:'underline'}}>Forgot Password ?</Text>
            </View>
            <View>
                <Loader/>
            </View>
            <View style={{alignItems:'center', marginTop:30, marginBottom:20}}>
                <Text style={{fontSize:18, fontWeight:'bold'}}>OR</Text>
            </View>

            <View style={{marginHorizontal:10, marginTop:10}}>
                <SocialIcon
                    title="Sign in with Facebook"
                    button
                    type="facebook"
                    style={styles.socialIcon}
                    onPress={()=>{navigation.navigate('DrawerNavigator')}}
                />
            </View>

            <View style={{marginHorizontal:10, marginTop:10}}>
                <SocialIcon
                    title="Sign in with Google"
                    button
                    type="google"
                    style={styles.socialIcon}
                    onPress={()=>{navigation.navigate('DrawerNavigator')}}
                />
            </View>

            <View style={{marginTop:25, marginLeft:20}}>
                <Text style={{...styles.text1}}>New on Vowsh ?</Text>
            </View>

            <View style={{alignItems:'flex-end',marginHorizontal:20}}>
                <Button
                    title="Create an account"
                    buttonStyle={styles.createButton}
                    titleStyle={styles.createButtonTitle}
                    onPress={()=>{
                        navigation.navigate("SignUpScreen");
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
        paddingLeft: 40
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
    },
    loader:{
        position:'absolute',
        width:60,
        height:60,
        alignItems:'center'
    }
})