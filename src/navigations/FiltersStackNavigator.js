import { createStackNavigator } from "react-navigation-stack";

import FilterScreen from "../screens/FiltersScreen";
import { headerLeftMenu } from "./MealsStackNavigator";
import colors from "../constants/colors";

const FiltersStackNavigator = createStackNavigator({
    Filters: {
        screen: FilterScreen,
        navigationOptions: navigationData => ({
            headerTitle: 'Filter Meals',
            headerLeft: headerLeftMenu.bind(this, navigationData)
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