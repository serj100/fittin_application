import React, { useState, useEffect } from 'react'
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import { THEME } from '../../theme'

export const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Тестовое задание для компании FITTIN </Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        height: THEME.HEIGHT_SCREEN / 5,
        width: THEME.WIDTH_SCREEN,
        backgroundColor: '#035AA6',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: '5%'
    },
    text: {
        color: '#ffffff',
        textAlign: 'center',
        flexWrap: 'wrap',
        fontSize: 18
    },
    textContainer: {
        width: '40%',
        height: THEME.HEIGHT_SCREEN / 6,
    }
});