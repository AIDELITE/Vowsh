import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React,{ useState } from 'react';
import { menu } from '../global/Data';
import { Route1,Route2,Route3,Route4,Route5,Route6,Route7,Route8 } from './MenuTabs';
import { colors } from '../global/styles';
import { TabBar,TabView } from 'react-native-tab-view';
import { Icon } from 'react-native-elements';
const SCREEN_WIDTH = Dimensions.get('window').width;


const MenuProductScreen = ({navigation,route}) => {
    const initialLayout = SCREEN_WIDTH;
    const [routes] = useState(menu)
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

  const renderScene =({route})=>{
    switch(route.key){
        case 1:
            return <Route1 name={navigation}/>
        case 2:
            return <Route2 name={navigation}/>
        case 3:
            return <Route3 name={navigation}/>
        case 4:
            return <Route4 name={navigation}/>
        case 5:
            return <Route5 name={navigation}/>
        case 6:
            return <Route6 name={navigation}/>
        case 7:
            return <Route7 name={navigation}/>
        case 8:
            return <Route8 name={navigation}/>
        default:
            return null
    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.view1}>
            <Icon
                name='arrow-left'
                type='material-community'
                color={colors.black}
                size={28}
                onPress={()=>{navigation.goBack()}}
            />
            <Text style={styles.text1}>Menu</Text>
        </View>
        <TabView
            navigationState={{index,routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
            tabBarPosition='top'
            navigation = {navigation}
            route = {route}
        />
    </View>
  )
}

export default MenuProductScreen

const styles = StyleSheet.create({
    scene:{
      flex:1
    },
    container:{
      flex:1,
      top:0,
      right:0,
      left:0
    },
    view1:{
      flexDirection:'row',
      alignItems:'center',
      padding:10,
      backgroundColor:colors.buttons,
      padding:25,
      top:0,
      right:0,
      left:0
    },
    text1:{
      fontWeight:'800',
      marginLeft:40,
      color:colors.black,
      fontSize:18
    },
    view2:{
      marginTop:5,
      paddingBottom:20
    },
    tab:{
      paddingTop:0,
      backgroundColor:colors.buttons,
      justifyContent:'space-between'
    },
    tabContainer:{
      alignItems:'center',
      alignContent:'center',
      justifyContent:'center'
    },
    tabLabel:{
      fontWeight:'800',
      color:colors.cardbackground
    },
    tabStyle:{
      width: SCREEN_WIDTH/4,
      maxHeight:45
    },
    scene2:{
      backgroundColor:colors.buttons
    }

})