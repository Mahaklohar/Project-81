import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from 'react-native-vector-icons/Ionicons'
import FeedScreen from '../screens/Feed';
import PostScreen from '../screens/Post'
const Tab =createBottomTabNavigator()
const BottomTab =()=>{
    return(
    <Tab.Navigator
    screenOptions = {({route})=>{
        tabBarIcon: ({focused, color, size})=>{
            var iconName

            if(route.name ==="Feed"){
                iconName = focused
                ?'book'
                :'book-outline'
            }else if(route.name ==="CreatePost"){
                iconName = focused
                ?'create': 'create-outline'
            }

            return <Ionicons name = {iconName} size = {size} color = {color}/>
        }}}
    tabBarOptions = {{
        activeTintColor: 'tomato',
        innactiveTintColor: 'gray',
    } } 

    
    >
        <Tab.Screen name = "Feed" component = {FeedScreen}/>
        <Tab.Screen name = "CreatePost" component = {PostScreen}/>
    </Tab.Navigator>

    )
}

export default BottomTab;