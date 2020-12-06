import React from 'react';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';

import WhiteText from "../components/WhiteText";
import { MEALS } from "../data/dummy-data";
import colors from "../constants/colors";

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    const renderItems = items => {
        return items.map((item, index) => (
            <View key={index} style={styles.listItem}>
                <Text style={styles.listText}> {item} </Text>
            </View>
        ));
    }

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
            <View style={styles.details}>
                <WhiteText> {selectedMeal.duration} mins </WhiteText>
                <WhiteText> {selectedMeal.complexity.toUpperCase()} </WhiteText>
                <WhiteText> {selectedMeal.affordability.toUpperCase()} </WhiteText>
            </View>
            <Text style={styles.title}> Ingredients </Text>
            {renderItems(selectedMeal.ingredients)}
            <Text style={styles.title}> Steps </Text>
            {renderItems(selectedMeal.steps)}
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    title: {
        paddingVertical: 10,
        textAlign: 'center',
        fontSize: 22,
        fontFamily: 'open-sans-bold'
    },

    image: {
        width: '100%',
        height: 200
    },

    details: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 8,
        justifyContent: 'space-around',
        backgroundColor: colors.drawerColor
    },

    listItem: {
        borderColor: 'black',
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
        marginHorizontal: 10
    },

    listText: {
        textAlign: 'center'
    }
});

export default MealDetailScreen;