import React from 'react';
import { Text, StyleSheet } from 'react-native';

const WhiteText = ({ children }) => {
    return <Text style={styles.textContainer}> {children} </Text>;
};

const styles = StyleSheet.create({
    textContainer: {
        color: 'white'
    }
})

export default WhiteText;