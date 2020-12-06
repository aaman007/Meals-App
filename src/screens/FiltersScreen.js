import React, { useState, useEffect, useCallback } from 'react';
import { View, Switch, Text, StyleSheet, Platform } from 'react-native';

import colors from "../constants/colors";

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text> {props.label} </Text>
            <Switch
                trackColor={{true: colors.primaryColor, false: 'grey'}}
                thumbColor={Platform.OS === 'android' ? colors.secondaryColor : 'white'}
                value={props.value}
                onValueChange={props.onChange}
            />
        </View>
    )
}

const FilterScreen = props => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const saveFilters = useCallback(() => {
        const savedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        };
        console.log(savedFilters);
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

    useEffect(() => {
        props.navigation.setParams({ 'save': saveFilters });
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}> Available Filters </Text>
            <FilterSwitch
                label={'Gluten-free'}
                value={isGlutenFree}
                onChange={newValue => setIsGlutenFree(newValue)}
            />
            <FilterSwitch
                label={'Lactose-free'}
                value={isLactoseFree}
                onChange={newValue => setIsLactoseFree(newValue)}
            />
            <FilterSwitch
                label={'Is Vegan'}
                value={isVegan}
                onChange={newValue => setIsVegan(newValue)}
            />
            <FilterSwitch
                label={'Is Vegetarian'}
                value={isVegetarian}
                onChange={newValue => setIsVegetarian(newValue)}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },

    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center',
        margin: 20
    },

    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 15,
        marginVertical: 8,
        padding: 8
    }
});

export default FilterScreen;