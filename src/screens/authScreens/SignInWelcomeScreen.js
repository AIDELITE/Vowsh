import React,{useState,useRef} from "react";
import { View, Text, StyleSheet, Dimensions, Image} from "react-native";
import { colors, parameters,title} from '../../global/styles';
import { Icon,Button,SocialIcon } from "react-native-elements";
import Swiper from "react-native-swiper";

export default function SignInWelcomeScreen({navigation}){
    return(
        <View style={{flex:1}}>
            <View style={{flex:3, justifyContent:'flex-start',alignItems:'center', paddingTop:20}}>
                <Text style={{fontSize:26,color: colors.buttons, fontWeight:'bold'}}>WELCOME TO </Text>
                <Text style={{fontSize:26,color: colors.buttons, fontWeight:'bold'}}>VOWSH</Text>
            </View>

            <View style={{flex:4, justifyContent:'center'}}>
                <Swiper autoplay={true}>
                    <View style={styles.slider1}>
                        <Image
                            source={{uri:'https://post.greatist.com/wp-content/uploads/sites/2/2021/08/390391-The-Best-Skin-Care-Routine-for-Combination-Skin-According-to-Dermatologists-732x549-Feature-732x549.jpg'}}
                            style={{height:'100%',width:'100%'}}
                        />
                    </View>

                    <View style={styles.slider2}>
                        <Image
                            source={{uri:'https://reviewed-com-res.cloudinary.com/image/fetch/s--QCPymrUB--/b_white,c_fill,cs_srgb,f_auto,fl_progressive.strip_profile,g_auto,h_729,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1612406521993/TheOrdinary.jpg'}}
                            style={{height:'100%',width:'100%'}}
                        />
                    </View>

                    <View style={styles.slider3}>
                        <Image
                            source={{uri:'https://cdn.cliqueinc.com/posts/304628/new-skincare-2023-304628-1681041148575-main.700x0c.jpg'}}
                            style={{height:'100%',width:'100%'}}
                        />
                    </View>

                    <View style={styles.slider3}>
                        <Image
                            source={{uri:'https://www.byrdie.com/thmb/ps34o6nwpd1CaaDGlePyUj0j7f8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/BYRDIE-v2-12-best-benzoyl-peroxide-products-4584565-primary-269836152b3e4f00874d77a7949de085.jpg'}}
                            style={{height:'100%',width:'100%'}}
                        />
                    </View>
                </Swiper>
            </View>

            <View style={{flex:4, justifyContent:'flex-end',marginBottom:20}}>
                <View style={{marginHorizontal:20, marginTop:30}}>
                    <Button
                        title="SIGN IN"
                        buttonStyle={parameters.styledButton}
                        titleStyle={parameters.buttonTitle}
                        onPress={()=>{
                            navigation.navigate("SignInScreen");
                        }}
                    />
                </View>

                <View style={{marginHorizontal:20, marginTop:10}}>
                    <Button
                        title="Create an account"
                        buttonStyle={styles.createButton}
                        titleStyle={styles.createButtonTitle}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    slider1:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#9DD6EB'
    },
    slider2:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#97CAE5'
    },
    slider3:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#92BBD9'
    },

    createButton:{
        backgroundColor:'white',
        alignContent:'center',
        justifyContent:'center',
        borderRadius:12,
        borderWidth:1,
        borderColor:'#df078e',
        height:50,
        paddingHorizontal:20
    },

    createButtonTitle:{
        color: '#df078e',
        fontSize:17,
        fontWeight:'bold',
        alignItems:'center',
        justifyContent:'center',
        marginTop:-3
    }
})