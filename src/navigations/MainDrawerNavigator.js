import React from 'react';
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import MealsBottomTabNavigator from "./MealsBottomTabNavigator";
import FiltersStackNavigator from "./FiltersStackNavigator";


const MainDrawerNavigator = createDrawerNavigator({
    Meals: {
        screen: MealsBottomTabNavigator,
        navigationOptions: {
            headerTitle: 'Meals'
        }
    },
    Filters: {
        screen: FiltersStackNavigator,
        navigationOptions: {
            headerTitle: 'Filter'
        }
    }
});

export default createAppContainer(MainDrawerNavigator);