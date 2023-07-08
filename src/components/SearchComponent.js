import React,{useState, useRef} from "react";
import { View, Text,StyleSheet,TouchableWithoutFeedback,Modal,TextInput,FlatList, TouchableOpacity, Keyboard } from "react-native";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";
import { colors } from "../global/styles";
import { Icon } from "react-native-elements";
import { filterData2 } from "../global/Data";
import filter from 'lodash/filter';

export default function SearchComponent(){
    const navigation = useNavigation();
    const [data, setData ] = useState([...filterData2]);
    const [modalVisible, SetModalVisible] = useState(false);
    const [textInputFocussed, setTextInputFocussed] = useState(true);
    const textInput = useRef(0);
    const contains = ({name},query)=>{
        if(name.includes(query))
        {
            return true;
        }
        return false;
    }
    const handleSearch = text =>{
        const dataS = filter(filterData2,userSearch=>{
            return contains(userSearch,text)
        })

        setData([...dataS])
    }
    return(
        <View style={{alignItems:'center', marginBottom:5}}>
            <TouchableWithoutFeedback
                onPress={()=>{SetModalVisible(true)}}
            >
                <View style={styles.searchArea}>
                    <Icon
                        type="material"
                        name="search"
                        style={styles.SearchIcon}
                        iconStyle={{marginLeft:5}}
                        size={32}
                    />
                    <Text style={{fontSize:15}}>What are you looking for?</Text>
                </View>
            </TouchableWithoutFeedback>
            <Modal
                animationType="fade"
                transparent={false}
                visible = {modalVisible}
            >
                <View style={styles.modal}>
                    <View style={styles.view1}>
                        <View style={styles.TextInput}>
                            <Animatable.View
                                animation={textInputFocussed? 'fadeInRight': 'fadeInLeft'}
                                duration={400}
                            >
                                <Icon
                                    name={textInputFocussed? 'arrow-back' : 'search'}
                                    type="material"
                                    style={styles.icon2}
                                    iconStyle={{marginRight:5}}
                                    onPress={()=>{
                                        if(textInputFocussed)
                                            SetModalVisible(false);
                                            setTextInputFocussed(true);
                                    }}
                                />
                            </Animatable.View>
                            <TextInput
                                style={{width:'90%'}}
                                placeholder=""
                                autoFocus={false}
                                ref={textInput}
                                onFocus={()=>{
                                    setTextInputFocussed(true)
                                }}
                                onBlur={()=>{
                                    setTextInputFocussed(false)
                                }}
                                onChangeText={handleSearch}
                            />
                            <Animatable.View
                                animation={textInputFocussed? 'fadeInLeft': 'fadeInRight'}
                                duration={400}
                            >
                                <Icon
                                    name={textInputFocussed? 'cancel': null}
                                    iconStyle={{color:colors.grey3}}
                                    type="material"
                                    style={{marginRight:-10}}
                                    onPress={()=>{
                                        textInput.current.clear();
                                        //handleSearch();
                                    }}
                                />
                            </Animatable.View>
                        </View>

                    </View>

                    <FlatList
                        data={data}
                        keyExtractor={item=>item.id}
                        renderItem={({item})=>(
                            <TouchableOpacity
                                onPress={()=>{
                                    Keyboard.dismiss
                                    navigation.navigate("SearchResultsScreen",{item: item.name})
                                    SetModalVisible(false)
                                    setTextInputFocussed(true)
                                }} >
                                <View style={styles.view2}>
                                    <Text style={{color:colors.grey2, fontSize:15}}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    text1:{
        color:colors.grey3,
        fontSize:16
    },
    TextInput:{
        borderWidth:1,
        borderRadius:12,
        marginHorizontal:0,
        borderColor:colors.buttons,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignContent:'center',
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10
    },
    searchArea:{
        marginTop:10,
        width:'94%',
        height:50,
        backgroundColor:colors.grey5,
        borderRadius:12,
        borderWidth:1,
        borderColor:colors.grey4,
        flexDirection:'row',
        alignItems:'center'
    },
    SearchIcon:{
        fontSize:24,
        padding:5,
        color:colors.grey2
    },
    view1:{
        justifyContent:'center',
        paddingHorizontal:10,
        marginTop:5
    },
    view2:{
        flexDirection:'row',
        padding:15,
        alignItems:'center'
    },
    icon2:{
        padding:5,
        color:colors.grey2
    },
    modal:{
        flex:1
    }
})