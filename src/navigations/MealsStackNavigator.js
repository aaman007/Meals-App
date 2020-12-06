import React from 'react';
import { createStackNavigator } from "react-navigation-stack";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import colors from "../constants/colors";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import HeaderButton from '../components/HeaderButton';

export const headerLeftMenu = (navigationData) => {
    return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title={'Menu'}
                iconName={'ios-menu'}
                color={'white'}
                onPress={() => {
                    navigationData.navigation.toggleDrawer();
                }}
            />
        </HeaderButtons>
    )
};

const MealsStackNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: navigationData => ({
            headerTitle: 'Meal Categories',
            headerLeft: headerLeftMenu.bind(this, navigationData)
        })
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
        navigationOptions: navigationData => {
            const categoryId = navigationData.navigation.getParam('categoryId');
            const selectedCategory = CATEGORIES.find(category => category.id === categoryId);
            return {
                headerTitle: selectedCategory.title
            }
        }
    },
    MealDetail: {
        screen: MealDetailScreen,
        navigationOptions: (navigationData) => {
            const mealId = navigationData.navigation.getParam('mealId');
            const selectedMeal = MEALS.find(meal => meal.id === mealId);
            return {
                headerTitle: selectedMeal.title,
                headerRight: () => (
                    <HeaderButtons HeaderButtonComponent={HeaderButton}>
                        <Item
                            title={'Favorite'}
                            iconName={'ios-star'}
                            onPress={() => {
                                console.log("Marked")
                            }}
                        />
                    </HeaderButtons>
                )
            }
        }
    }
}, {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: colors.primaryColor
        },
        headerTintColor: 'white',
        headerTitle: 'Meal App'
    }
});

export default MealsStackNavigator;