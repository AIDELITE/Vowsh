import { StyleSheet, Text, View, ImageBackground, Animated } from 'react-native'
import React,{useState,useEffect} from 'react'
import { colors } from '../global/styles'
import { productData } from '../global/Data'
import { Icon } from 'react-native-elements'

export default function ShopsHeader({navigation,id}) {
    const index2 = 10;
    const currentValue = new Animated.Value(1);
    const [liked,setLiked] = useState(false);
    const [counter, setCounter] = useState(-2);
    const [visible, setVisible] = useState(false);

    const likeHandler =()=>{
        if(liked==false){
            setVisible(true)
        }

        setLiked(!liked)
        setCounter(index2)
    }

    useEffect(()=>{
        if(liked==true){
            Animated.spring(currentValue,{
                toValue:3,
                friction:2,
                useNativeDriver:true
            }).start(()=>{
                Animated.spring(currentValue,{
                    toValue:1,
                    friction:2,
                    useNativeDriver:true
                }).start(()=>{
                    setVisible(false)
                })
            })
        }
    },[liked])
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.container}
                source={productData[id].images}
                imageStyle={styles.image}
            >

            <View style={styles.view1}>
                <View style={styles.view2}>
                    <Icon
                        name='arrow-left'
                        type='material-community'
                        color={colors.grey1}
                        size={25}
                        onPress={()=>{navigation.goBack()}}
                    />
                </View>

                <View style={styles.view3}>
                    <Icon
                        name={liked && (index2==counter)? 'favorite':'favorite-border'}
                        type='material'
                        color={colors.buttons}
                        size={30}
                        onPress={likeHandler}
                    />
                </View>
            </View>
            <View style={styles.view4}>
                { visible && (index2==counter) &&
                    <Animated.View style={{transform:[{scale:currentValue}]}}>
                        <Icon
                            name='favorite'
                            size={40}
                            type='material'
                            color={colors.buttons}
                        />
                    </Animated.View>
                }
            </View>

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:170,
    },
    image:{
        borderTopLeftRadius:5,
        borderTopRightRadius:5
    },
    view1:{
        flexDirection:'row',
        alignItems:'baseline',
        justifyContent:'space-between'
    },
    view2:{
        margin:10,
        width:40,
        height:40,
        backgroundColor:colors.cardbackground,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20
    },
    view3:{
        marginTop:0,
        margin:10,
        width:40,
        height:40,
        backgroundColor:colors.cardbackground,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20
    },
    view4:{
        marginTop:0,
        alignItems:'center',
        justifyContent:'center'
    }
})