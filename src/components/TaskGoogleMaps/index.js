import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Linking, Vibration } from 'react-native';
import { THEME } from '../../theme';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export const GoogleMapsTask = ({taskTitle}) => {
    let [coord, setCoord] = useState({
        latitude: null,
        longitude: null
    })

    let longitude = JSON.stringify(coord.longitude) ?? null
    let latitude = JSON.stringify(coord.latitude) ?? null

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{taskTitle}</Text>
            <View style={styles.cordContainer}>
                <Text>longitude :{JSON.stringify(longitude)}</Text>
                <Text>latitude :{JSON.stringify(latitude)}</Text>
            </View>


            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                // showsMyLocationButton={true}
                onPress={(e) => { setCoord(e.nativeEvent.coordinate) }}
            >
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    map: {
        height: 200,
        width: THEME.WIDTH_SCREEN - 20,
        // marginLeft: 10,
    },
    cordContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#000',
        textAlign: 'center',
        flexWrap: 'wrap',
        fontSize: 18,
        // margin: 10
      },
});


