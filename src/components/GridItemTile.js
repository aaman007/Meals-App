import React from 'react';
import {
    TouchableOpacity,
    TouchableNativeFeedback,
    View,
    Text,
    StyleSheet,
    Platform
} from "react-native";

const GridItemTile = props => {
    let TouchableComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItem}>
            <TouchableComponent style={styles.gridItemTouchable} onPress={props.onSelect}>
                <View style={{...styles.container, backgroundColor: props.color}}>
                    <Text style={styles.title} numberOfLines={2}> {props.title} </Text>
                </View>
            </TouchableComponent>
        </View>
    )
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
        elevation: 3
    },

    gridItemTouchable: {
        flex: 1
    },

    container: {
        flex: 1,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 20
    },


    title: {
        fontFamily: 'open-sans-bold',
        color: 'white',
        fontSize: 22,
        textAlign: 'right'
    },
});

export default GridItemTile;