import React from 'react';

import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = props => {
    const meals = MEALS.filter(meal => ['m1', 'm2'].indexOf(meal.id) >= 0);

    return (
        <MealList
            meals={meals}
            navigation={props.navigation}
        />
    )
};

export default FavoritesScreen;