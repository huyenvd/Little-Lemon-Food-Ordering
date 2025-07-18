import React from 'react';
import { SafeAreaView, Image } from 'react-native';
import { style } from './style';

type Props = {
    backgroundColor?: string,
    width?: number,
};

const LogoHeader = ({ backgroundColor = '#RRGGBBAA', width = Infinity } : Props) => {
    return (
        <SafeAreaView style={[style.logoContainer, {backgroundColor: backgroundColor, width: width}]}>
            <Image 
                source={require('../../images/Logo.png')} 
                style={style.logo}
                resizeMode='contain'
            />
        </SafeAreaView>
    );
};

export default LogoHeader;