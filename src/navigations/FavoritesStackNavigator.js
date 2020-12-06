import { createStackNavigator } from "react-navigation-stack";

import FavoritesScreen from "../screens/FavoritesScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { headerLeftMenu } from "./MealsStackNavigator";
import colors from "../constants/colors";
import { MEALS } from "../data/dummy-data";

const FavoritesStackNavigator = createStackNavigator({
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: navigationData => ({
            headerTitle: 'My Favorites',
            headerLeft: headerLeftMenu.bind(this, navigationData)
        })
    },
    MealDetail: {
        screen: MealDetailScreen,
        navigationOptions: navigationData => {
            const mealId = navigationData.navigation.getParam('mealId');
            const selectedMeal = MEALS.find(meal => meal.id === mealId);
            return {
                headerTitle: selectedMeal.title
            }
        }
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

export default FavoritesStackNavigator;