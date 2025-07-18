import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        paddingVertical: 16,
        marginHorizontal: 15,
        flexDirection: 'row',
        borderBottomColor: '#F7F8F8',
        borderBottomWidth: 1,
    },
    labelContainer: {
        alignItems: 'flex-start',
        width: '75%',
        marginRight: 8,
    },
    label: {
        marginBottom: 8,
    },
    photo: {
        width: '22%',
        height: '100%',
    },
});