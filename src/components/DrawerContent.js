import React,{useState,useContext,useEffect} from "react";
import{ View, Text,Linking, Pressable, Alert, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView,DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Avatar,Button, Icon, Image } from "react-native-elements";
import { colors } from "../global/styles";
import auth from '@react-native-firebase/auth';
import { SignInContext } from "../context/authContext";

export default function DrawerContent(props){
    const {dispatchSignedIn} = useContext(SignInContext);
    async function signOut(){
        try{
            auth()
            .signOut()
            .then(
                ()=>{
                    console.log("Signed out Successfully");
                    dispatchSignedIn({type:'UPDATE_SIGN_IN',payload:{userToken:null}});
                }
            )
        }
        catch(err){
            Alert.alert(err.code);
        }
    }
    return(
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={{backgroundColor:colors.buttons,paddingBottom:5}}>
                    <View style={{flexDirection:'row', alignItems:'center', paddingLeft:20,paddingVertical:10}}>
                        <Avatar
                            rounded
                            size={75}
                            avatarStyle={styles.avatar}
                            source = {require('../assets/profilePic/user2.png')}
                        />

                        <View style={{marginLeft:10}}>
                            <Text style={{fontWeight:'bold',color:colors.cardbackground, fontSize: 17}}>Vowsh Admin</Text>
                            <Text style={{color:colors.cardbackground, fontSize:10}}>vowshAdmin@vowsh.com</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                        <View style={{flexDirection:'row',marginTop:0}}>
                            <View style={{marginLeft:10, alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontWeight:'bold',color:colors.cardbackground,fontSize:16}}>3</Text>
                                <Text style={{color:colors.cardbackground, fontSize:13}}>My WishList</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row',marginTop:0}}>
                            <View style={{marginLeft:10, alignItems:'center',justifyContent:'center'}}>
                                <Text style={{fontWeight:'bold',color:colors.cardbackground,fontSize:16}}>0</Text>
                                <Text style={{color:colors.cardbackground, fontSize:13}}>My Cart</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <DrawerItemList {...props} />

                <DrawerItem
                    label='Payment'
                    icon={({size,color})=>(
                        <Icon
                            type="material-community"
                            name="credit-card-outline"
                            color={color}
                            size={size}
                        />
                    )}
                />

                <DrawerItem
                    label='Promotions'
                    icon={({size,color})=>(
                        <Icon
                            type="material-community"
                            name="tag-heart"
                            color={color}
                            size={size}
                        />
                    )}
                />

                <DrawerItem
                    label='Settings'
                    icon={({size,color})=>(
                        <Icon
                            type="material-community"
                            name="cog-outline"
                            color={color}
                            size={size}
                        />
                    )}
                />

                <DrawerItem
                    label='Help'
                    icon={({size,color})=>(
                        <Icon
                            type="material-community"
                            name="lifebuoy"
                            color={color}
                            size={size}
                        />
                    )}
                />

                <View style={{borderTopWidth:1,borderTopColor:colors.grey5}}>
                    <Text style={styles.preferences}>Preferences</Text>

                    <View style={styles.switchText}>
                        <Text style={styles.darkThemeText}>Dark Theme</Text>
                        <View style={{paddingRight:10}}>
                            <Switch
                                trackColor={{false:'#767577',true:colors.buttons}}
                                thumbColor='#f4f3f4'
                            />
                        </View>
                    </View>
                </View>
            </DrawerContentScrollView>
            <DrawerItem
                label='Logout'
                icon={({size,color})=>(
                    <Icon
                        type="material-community"
                        name="logout-variant"
                        color={color}
                        size={size}
                    />
                )}
                onPress={()=>{signOut()}}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    avatar:{
        borderWidth:4,
        borderColor: colors.cardbackground
    },
    preferences:{
        fontSize:16,
        color:colors.grey2,
        paddingTop:10,
        paddingLeft:20
    },
    switchText:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft:20,
        paddingVertical:5,
        paddingRight:10
    },
    darkThemeText:{
        fontWeight:'bold',
        fontSize:16,
        color:colors.grey2,
        paddingTop:10,
        paddingLeft:0
    }

})