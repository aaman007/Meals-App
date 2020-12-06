import React from 'react';
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import MealsBottomTabNavigator from "./MealsBottomTabNavigator";
import FiltersStackNavigator from "./FiltersStackNavigator";
import colors from "../constants/colors";


const MainDrawerNavigator = createDrawerNavigator({
    Meals: {
        screen: MealsBottomTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: {
        screen: FiltersStackNavigator,
        navigationOptions: {
            drawerLabel: 'Filter Meals'
        }
    }
}, {
    drawerBackgroundColor: 'white',
    drawerPosition: "left",
    drawerType: "front",
    contentOptions: {
        activeTintColor: colors.primaryColor,
        labelStyle: {
            fontFamily: 'open-sans'
        }
    }
});

export default createAppContainer(MainDrawerNavigator);