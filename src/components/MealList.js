import React from 'react';
import { FlatList, StyleSheet, View } from "react-native";

import MealItem from "./MealItem";

const MealList = props => {
    const renderMealItem = itemData => {
        return (
            <MealItem
                meal={itemData.item}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail',
                        params: {
                            mealId: itemData.item.id
                        }
                    })
                }}
            />
        )
    };

    return (
        <View style={styles.list}>
            <FlatList
                data={props.meals}
                renderItem={renderMealItem}
                style={styles.mealList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },

    mealList: {
        width: '100%'
    }
});

export default MealList;