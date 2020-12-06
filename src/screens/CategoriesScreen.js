import React from 'react';
import {
    StyleSheet,
    FlatList,
} from 'react-native';

import { CATEGORIES } from "../data/dummy-data";
import GridItemTile from "../components/GridItemTile";


const CategoriesScreen = props => {
    const renderGridItem = itemData => {
        return (
            <GridItemTile
                color={itemData.item.color}
                title={itemData.item.title}
                onSelect={() => props.navigation.navigate({
                    routeName: 'CategoryMeals',
                    params: {
                        categoryId: itemData.item.id
                    }
                })}
            />
        )
    }

    return (
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderGridItem}
        />
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;