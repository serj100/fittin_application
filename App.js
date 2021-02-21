
import React, { useState } from 'react';
import {
  StatusBar,
  Vibration,
  View, StyleSheet
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from './src/components/Header'

import { Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Task } from './src/components/Task';
import { calendarOpen } from './src/utils/calendarOpen';
import { THEME } from './src/theme';
import { GoogleMapsTask } from './src/components/TaskGoogleMaps';
import { BatteryPercent } from './src/components/BatteryTask';
export default function App() {


  return (
    <>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <Header />
        <Task 
        taskTitle={"Задание №1"} 
        title1={'Вызвать календарь'} 
        onPress1={()=>{calendarOpen()}}
        title2={'Событие (вибрация)'} 
        onPress2={()=>{Vibration.vibrate(1000)}}
        />
        <GoogleMapsTask taskTitle={"Задание №2"} />
        <BatteryPercent taskTitle={"Задание №3"} />
      </SafeAreaProvider>
    </>
  )
}

