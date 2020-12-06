import React from 'react';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import MealsStackNavigator from "./MealsStackNavigator";
import FavoritesStackNavigator from "./FavoritesStackNavigator";
import colors from "../constants/colors";

const tabScreenConfig = {
    Meals: {
        screen: MealsStackNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons name={"ios-restaurant"} size={24} color={tabInfo.tintColor} />
            },
            tabBarColor: colors.secondaryColor
        }
    },
    Favorites: {
        screen: FavoritesStackNavigator,
        navigationOptions: {
            tabBarLabel: 'My Favorites',
            tabBarIcon: tabInfo => {
                return <Ionicons name={"ios-star"} size={24} color={tabInfo.tintColor} />
            },
            tabBarColor: colors.defaultColor
        }
    }
};

const MealsBottomTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        shifting: true,
        barStyleLight: {
            backgroundColor: colors.secondaryColor
        }
    })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: colors.secondaryColor
        }
    });

export default MealsBottomTabNavigator;