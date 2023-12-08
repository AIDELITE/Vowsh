import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../global/styles";
import { Avatar,Icon } from "react-native-elements";

export default function MyAccountScreen(){
    return(
        <View style={styles.container}>
            <View style={styles.view1}>
                <View style={styles.editButton}>
                    <Icon
                        name='pencil-outline'
                        type='material-community'
                        color={colors.buttons}
                        size={30}
                    />
                </View>
                <View style={styles.view3}>
                    <Avatar
                        rounded
                        size={200}
                        avatarStyle={styles.avatar}
                        source = {require('../assets/profilePic/user2.png')}
                    />
                </View>
                <View style={styles.view4}>
                    <Text style={styles.text1}>VOWSH ADMIN</Text>
                </View>
            </View>
            <View style={styles.view2}>
                <View>
                    <View style={styles.view5}>
                        <View style={styles.view6}>
                            <Icon
                                type="material-community"
                                name="email-outline"
                                color={colors.buttons}
                                size={28}
                            />
                        </View>
                        <View style={styles.view7}>
                            <Text style={styles.text2}>Email:</Text>
                            <Text style={styles.text3}>vowshAdmin@vowsh.com</Text>
                        </View>
                    </View>
                    <View style={styles.underline}></View>
                </View>

                <View>
                    <View style={styles.view5}>
                        <View style={styles.view6}>
                            <Icon
                                type="material-community"
                                name="phone-outline"
                                color={colors.buttons}
                                size={28}
                            />
                        </View>
                        <View style={styles.view7}>
                            <Text style={styles.text2}>Phone Number:</Text>
                            <Text style={styles.text3}>+256 708 225 777</Text>
                        </View>
                    </View>
                    <View style={styles.underline}></View>
                </View>

                <View>
                    <View style={styles.view5}>
                        <View style={styles.view6}>
                            <Icon
                                type="material-community"
                                name="map-marker-outline"
                                color={colors.buttons}
                                size={28}
                            />
                        </View>
                        <View style={styles.view7}>
                            <Text style={styles.text2}>Personal Address:</Text>
                            <Text style={styles.text3}>Cape Town</Text>
                        </View>
                    </View>
                    <View style={styles.underline}></View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },

    view1:{
        flex:3,
        backgroundColor:colors.buttons,
        alignItems:'center',
        justifyContent:'center'
    },
    view2:{
        flex:3,
        backgroundColor:colors.cardbackground,
        paddingBottom:20,
        paddingHorizontal:20
    },
    avatar:{
        borderWidth:4,
        borderColor: colors.cardbackground
    },
    view3:{
        paddingBottom: 30

    },
    view4:{
        marginBottom:-30
    },
    text1:{
        fontSize:18,
        fontWeight:'800',
        color:colors.cardbackground
    },
    editButton:{
        position:'absolute',
        top:8,
        right:25,
        elevation:10,
        width:40,
        height:40,
        borderRadius:20,
        alignItems:'center',
        marginTop:0,
        backgroundColor:colors.cardbackground,
        justifyContent:'center',
    },
    view5:{
        flexDirection:'row',
        paddingTop:25,
    },
    view6:{
        borderWidth:2,
        width:50,
        height:50,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        borderColor:colors.buttons,
        backgroundColor:colors.cardbackground
    },
    view7:{
        paddingLeft:20,
        flexDirection:'column',
    },
    text2:{
        fontSize:14,
        fontWeight:'600',
        color:colors.buttons
    },
    text3:{
        fontSize:16,
        fontWeight:'600',
        paddingTop:5
    },
    underline:{
        paddingTop:8,
        borderBottomWidth:1,
        borderBottomColor:colors.buttons,
        width:'77%',
        marginLeft:80
    }
})