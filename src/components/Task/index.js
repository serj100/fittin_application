import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { THEME } from '../../theme';
import { Button } from 'react-native-elements';


export const Task = ({ taskTitle, onPress1 = null, title1 = null, onPress2 = null, title2 = null }) => {

  return (
    <View style={style.container}>
      <Text style={style.text}>{taskTitle}</Text>
      <View style={style.textContainer}>

      </View>
      <View style={{ marginTop: 5 }}>
        <Button
          title={title1}
          onPress={onPress1}
        />
      </View>
      <View style={{ marginTop: 5 }}>
        <Button
          title={title2}
          onPress={onPress2}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 5
  },
  text: {
    color: '#000',
    textAlign: 'center',
    flexWrap: 'wrap',
    fontSize: 18
  },
  textContainer: {
    width: THEME.WIDTH_SCREEN - 20,
  }
});
