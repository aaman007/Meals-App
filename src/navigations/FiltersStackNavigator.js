import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import FilterScreen from "../screens/FiltersScreen";
import { headerLeftMenu } from "./MealsStackNavigator";
import colors from "../constants/colors";
import HeaderButton from "../components/HeaderButton";

const FiltersStackNavigator = createStackNavigator({
    Filters: {
        screen: FilterScreen,
        navigationOptions: navigationData => ({
            headerTitle: 'Filter Meals',
            headerLeft: headerLeftMenu.bind(this, navigationData),
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title={'Save'}
                        iconName={'ios-save'}
                        color={'white'}
                        onPress={navigationData.navigation.getParam('save')}
                    />
                </HeaderButtons>
            )
        })
    }
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: colors.primaryColor
        },
        headerTintColor: 'white',
        headerTitle: 'Meal App'
    }
});

export default FiltersStackNavigator;