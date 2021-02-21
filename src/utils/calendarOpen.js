import {Linking} from 'react-native';

export const calendarOpen = () => {
    if (Platform.OS === 'ios') {
        Linking.openURL('calshow:');
    } else if (Platform.OS === 'android') {
        Linking.openURL('content://com.android.calendar/time/');
    }
};
