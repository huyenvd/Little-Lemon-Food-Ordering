import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        height: 70,
        marginHorizontal: 18,
    },
    profilePic: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    bannerContainer: {
        alignItems: 'flex-start',
        paddingHorizontal: 18,
        paddingTop: 18,
        paddingBottom: 35,
        backgroundColor: '#495E57',
    },
    subBannerContainer: {
        flexDirection: 'row',
    },
    subLabelContainer: {
        alignItems: 'flex-start',
        width: '60%',
        paddingRight: 10,
    },
    bannerSubTitle: {
        marginBottom: 15,
    },
    heroImage: {
        width: '40%',
        height: '100%',
        borderRadius: 10,
        paddingTop: 5,
    },
    foodMenuContainer: {
        flex: 1,
        marginTop: 30,
    },
    foodMenuTitleContainer: {
        alignItems: 'flex-start',
        marginHorizontal: 13,
        marginBottom: 5,
    },
});