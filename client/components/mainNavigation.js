import React, { Component } from 'react'
import { TabBar } from "react-native-animated-nav-tab-bar"
import Icon from 'react-native-vector-icons/Feather'
import Home from './home'
import Profile from './profile'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'

export default createAppContainer(
    createBottomTabNavigator(
        {
            Home: Home,
            Profie: Profile,
        }, {
        tabBarIcon:
            { focused: true, horizontal: true, tintColor: "hello" },
        tabBarOptions: {
            activeTintColor: "#2B7C85",
            inactiveTintColor: "#222222",
        },

        tabBarComponent: props =>
            <TabBar
                activeColors={['#e6b580', '#8e87d6', '#c095c9']} // or 
                activeTabBackgrounds={['#ede7e6', '#eae3f6', '#eae4f6']} // or 
                {...props}
            />,
        },
    ),
    Home.navigationOptions = {
        tabBarIcon: ({ focused, tintColor }) =>
            <Icon
                size={24}
                color={"#e6b580"}
                focused={focused}
                tintColor={tintColor}
                name="home"
            />,
    },
    Profile.navigationOptions = {
        tabBarIcon: ({ focused, tintColor }) =>
            <Icon
                size={24}
                color={"#8e87d6"}
                focused={focused}
                tintColor={tintColor}
                name="user"
            />,
    }
)
