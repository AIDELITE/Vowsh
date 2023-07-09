import { StyleSheet, Text, View, Dimensions,ScrollView } from 'react-native'
import React,{useState} from 'react'
import ShopsHeader from '../components/ShopsHeader'
import { colors,fonts } from '../global/styles';
import { productData } from '../global/Data';
import { Icon } from 'react-native-elements';
import { TabView, TabBar } from 'react-native-tab-view';
const SCREEN_WIDTH = Dimensions.get('window').width;
const ShopsHomeScreen = ({navigation,route}) => {

    const initialLayout = SCREEN_WIDTH;
    const {id,shop} = route.params;
    const [routes] = useState([
        {key:'first',title:'MENU'},
        {key:'second',title:'INFO'},
        {key:'third',title:'REVIEWS'},
        {key:'fourth',title:'GALLERY'},
    ])
    const [index,setIndex] = useState(0);
    const renderTabBar = props =>(
        <TabBar
            {...props}
            indicatorStyle={{backgroundColor:colors.cardbackground}}
            tabStyle = {styles.tabStyle}
            scrollEnabled={true}
            style={styles.tab}
            labelStyle={styles.tabLabel}
            contentContainerStyle={styles.tabContainer}
        />
    );
    const UpdateRoute1 =()=>{
        return(
            <View>

            </View>
        )
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <ShopsHeader id={id} navigation={navigation}/>
                    { productData[id].discount &&
                        <View style={styles.view1}>
                            <Text style={styles.text1}> GET {productData[id].discount}% OFF ON OUR PRODUCTS</Text>
                        </View>
                    }
                    <View style={styles.view2}>
                        <View style={styles.view3}>
                            <Text style={styles.text2}> {productData[id].businessName}</Text>
                            <Text style={styles.text3}> {productData[id].itemType}</Text>
                            <View style={styles.view4}>
                                <Icon
                                    name='star'
                                    type='material-community'
                                    color={colors.grey3}
                                    size={15}
                                />
                                <Text style={styles.text4}>{productData[id].averageReview}</Text>
                                <Text style={styles.text5}>({productData[id].numberOfReview}+)</Text>
                                <Icon
                                    name='map-marker'
                                    type='material-community'
                                    color={colors.grey3}
                                    size={15}
                                />
                                <Text style={styles.text6}>{productData[id].farAway} Mi Away</Text>
                            </View>
                        </View>
                        <View style={styles.view5}>
                            <Text style={styles.text7}>Collect</Text>
                            <View style={styles.view7}>
                                <Text style={styles.text7}>{productData[id].collectTime}</Text>
                                <Text style={styles.text8}>mins</Text>
                            </View>
                        </View>
                        <View style={styles.view8}>
                            <Text style={styles.text7}>Delivery</Text>
                            <View style={styles.view9}>
                                <Text style={styles.text9}>{productData[id].deliveryTime}</Text>
                                <Text style={styles.text11}>mins</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.view10}>
                    <TabView
                        navigationState={{index,routes}}
                        renderScene={UpdateRoute1}
                        onIndexChange={setIndex}
                        initialLayout={initialLayout}
                        renderTabBar={renderTabBar}
                        tabBarPosition='top'
                    />
                </View>
            </ScrollView>
        </View>
    )
}


export default ShopsHomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:1
    },
    view1:{
        width:'100%',
        padding:3,
        alignItems:'center',
        justifyContent:'center'
    },
    text1:{
        color:colors.buttons,
        fontSize:14,
        fontWeight:'bold'
    },
    view2:{
        flexDirection:'row',
        flex:1,
        marginBottom:5,
        marginHorizontal:10,
        justifyContent:'space-between',
    },
    view3:{
        flex:8,
    },
    text2:{
        fontSize:20,
        fontWeight:'bold',
        color:colors.grey1
    },
    text3:{
        fontSize:15,
        color:colors.grey3
    },
    view4:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:5
    },
    text4:{
        fontFamily:fonts.android.bold,
        fontSize:13,
        color:colors.grey3,
        marginLeft:2
    },
    text5:{
        fontFamily:fonts.android.bold,
        fontSize:13,
        color:colors.grey3,
        marginLeft:2,
        marginRight:5
    },
    text6:{
        fontFamily:fonts.android.bold,
        fontSize:13,
        color:colors.grey3,
        marginLeft:0
    },
    view5:{
        flex:3,
        alignItems:'center'
    },
    view6:{
        fontSize:15,
        fontWeight:'bold',
        color:colors.grey1
    },
    view7:{
        width:40,
        height:40,
        alignItems:'center',
        borderRadius:20,
        justifyContent:'space-around'
    },
    text7:{
        fontSize:16,
        fontWeight:'bold',
        color:'black',
        marginTop:5
    },
    text8:{
        fontSize:13,
        color:'black',
        marginBottom:5
    },
    view8:{
        flex:3,
        alignItems:'center'
    },
    text9:{
        fontSize:15,
        fontWeight:'bold',
        color:colors.cardbackground
    },
    view9:{
        width:40,
        height:40,
        justifyContent:'space-around',
        backgroundColor:colors.buttons,
        alignItems:'center',
        borderRadius:20
    },
    text10:{
        fontSize:16,
        fontWeight:'bold',
        color:colors.cardbackground,
        marginTop:5
    },
    text11:{
        fontSize:12,
        color:colors.cardbackground,
        marginBottom:5
    },
    view10:{
        elevation:10,
        backgroundColor:colors.cardbackground
    },
    view11:{
        backgroundColor:colors.buttons,
        height:50,
        alignContent:'center',
        marginBottom:0
    },
    view12:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    text12:{
        padding:10,
        fontWeight:'bold',
        fontSize:18,
        color:colors.cardbackground
    },
    view13:{
        borderWidth:1,
        marginRight:10,
        borderColor:colors.cardbackground,
        borderRadius:6,
        paddingBottom:2
    },
    text13:{
        paddingHorizontal:3,
        fontSize:18,
        fontWeight:'bold',
        color:colors.CardComment
    },
    tab:{
        paddingTop:0,
        backgroundColor:colors.buttons,
        justifyContent:'space-between',
        alignItems:'center'
    },
    tabContainer:{
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center'
    },
    tabLabel:{
        fontWeight:'bold',
        color:colors.cardbackground
    },
    tabStyle:{
        width:SCREEN_WIDTH/4,
        maxHeight:45
    }
})