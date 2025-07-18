import { View, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import LogoHeader from '../../assets/components/LogoHeader/LogoHeader';
import ProfilePicture from '../../assets/components/ProfilePicture/ProfilePicture';
import LabelView from '../../assets/components/LabelView/LabelView';
import { FoodMenuTabsNavigation } from '../../assets/navigation/MainNavigation';


import globalStyle from '../../assets/style/globalStyle';
import { style } from './style';
import { Constance } from '../../assets/utils/Constance';
import { TitleType } from '../../assets/utils/EnumTypes';
import { Routes } from '../../assets/navigation/Routes';

const Home = ({ navigation }: { navigation: any }) => {
    return (
        <SafeAreaView edges={['top', 'left', 'right']} style={[globalStyle.flex, globalStyle.backgroundColor]}>
            <View style={style.headerContainer}>
                <LogoHeader width={200} />
                <Pressable 
                    style={style.profilePic} 
                    onPress={() => {navigation.navigate(Routes.Profile)}}>
                    <ProfilePicture />
                </Pressable>
            </View>
            <View style={style.bannerContainer}>
                <LabelView 
                    label={Constance.BANNER_TITLE} 
                    titleType={TitleType.H1}
                    color={'#F4CE14'} />
                <View style={style.subBannerContainer}>
                    <View style={style.subLabelContainer}>
                        <LabelView 
                            extraStyle={style.bannerSubTitle}
                            label={Constance.BANNER_SUBTITLE} 
                            titleType={TitleType.H2}
                            fontWeight={'700'}
                            color={'#FFFFFF'} />
                        <LabelView
                            label={Constance.BANNER_DESCRIPTION} 
                            titleType={TitleType.H4}
                            fontWeight={'600'}
                            color={'#FFFFFF'} />
                    </View>
                    <Image style={style.heroImage} source={require('../../assets/images/HeroImage.png')} />
                </View>
            </View>
            <View style={style.foodMenuContainer}>
                <LabelView extraStyle={style.foodMenuTitleContainer} label={Constance.ORDER_FOR_DELIVERY} color={'#060606'} titleType={TitleType.H4} />
                <FoodMenuTabsNavigation />
            </View>
        </SafeAreaView>
    );
};

export default Home;