import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const BatteryPercent = ({ taskTitle }) => {

  const [percent, setPercent] = useState(null)

  DeviceInfo.getBatteryLevel().then((batteryLevel) => {
    setPercent(`Уровень заряда батареи ${Math.round(batteryLevel * 100)}%`)
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{taskTitle}</Text>
      <Text style={styles.text}>{percent}</Text>
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
  text: {
    color: '#000',
    textAlign: 'center',
    flexWrap: 'wrap',
    fontSize: 18,
    // margin: 10
  }
});
