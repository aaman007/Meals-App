import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    StyleSheet,
    ImageBackground,
    Platform
} from "react-native";

import WhiteText from "./WhiteText";
import colors from "../constants/colors";

const MealItem = props => {
    let TouchableComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.mealItem}>
            <TouchableComponent onPress={props.onSelect}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{uri: props.meal.imageUrl}} style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                                <Text numberOfLines={2} style={styles.title}> {props.meal.title} </Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <WhiteText> {props.meal.duration} mins </WhiteText>
                        <WhiteText> {props.meal.complexity.toUpperCase()} </WhiteText>
                        <WhiteText> {props.meal.affordability.toUpperCase()} </WhiteText>
                    </View>
                </View>
            </TouchableComponent>
        </View>
    )
};

const styles = StyleSheet.create({
    mealItem: {
        flex: 1,
        height: 200,
        width: '100%',
        backgroundColor: colors.primaryColor,
        marginVertical: 10,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 20,
        elevation: 3
    },

    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },

    mealRow: {
        flexDirection: 'row'
    },

    mealHeader: {
        height: '85%'
    },

    mealDetail: {
        paddingHorizontal: 10,
        height: '15%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    titleContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        paddingHorizontal: 8,
        paddingVertical: 5
    },

    title: {
        color: 'white',
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        textAlign: 'center'
    }
});

export default MealItem;