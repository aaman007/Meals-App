import React from 'react';

import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = props => {
    const categoryId = props.navigation.getParam('categoryId');
    const meals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

    return (
        <MealList
            meals={meals}
            navigation={props.navigation}
        />
    )
};

export default CategoryMealsScreen;