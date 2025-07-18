import { Alert, AlertButton } from 'react-native';

export const showAlert = (
    title: string,
    message?: string,
    buttons?: AlertButton[],
    options?: { cancelable?: boolean }
) => {
    Alert.alert(title, message, buttons, options);
};