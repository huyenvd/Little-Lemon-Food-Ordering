import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import LogoHeader from '../../assets/components/LogoHeader/LogoHeader';
import TextInputField from '../../assets/components/TextInputField/TextInputField';
import ActionButton from '../../assets/components/ActionButton/ActionButton';
import ProfilePicture from '../../assets/components/ProfilePicture/ProfilePicture';
import BackButton from '../../assets/components/BackButton/BackButton';
import LabelView from '../../assets/components/LabelView/LabelView';
import CheckBoxView from '../../assets/components/CheckBoxView/CheckBoxView';

import globalStyle from '../../assets/style/globalStyle';
import { style } from './style';
import { Constance } from '../../assets/utils/Constance';
import { TitleType, FontWeight } from '../../assets/utils/EnumTypes';
import { useProfile } from '../../assets/customHooks/useProfile';

const Profile = ({navigation}: { navigation: any}) => {
    const {
        firstName,
        lastName,
        email,
        phoneNumber,
        orderStatuses,
        passwordChanges,
        specialOffers,
        newsletter,
        setFirstName,
        setLastName,
        setEmail,
        setPhoneNumber,
        setOrderStatuses,
        setPasswordChanges,
        setSpecialOffers,
        setNewsletter,
        discardChanges,
        saveChanges,
        logOutUser,
    } = useProfile();

    return (<SafeAreaView style={[globalStyle.flex, globalStyle.backgroundColor]} edges={['top', 'left', 'right']} >
                <View style={style.header}>
                    <BackButton 
                        extraStyle={style.backButton}
                        onPress={() => {
                        navigation.goBack();
                        }} />
                    <LogoHeader width={200} />
                    <ProfilePicture extraStyle={style.profilePic} />
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={style.bodyContainer}>
                        <View style={style.personalInfoContainer}>
                            <View style={style.titleContainer}>
                                <LabelView label={Constance.PERSONAL_INFORMATION} titleType={TitleType.H3} />
                            </View>
                            <View style={style.avatarContainer}>
                                <LabelView label={Constance.AVATAR} titleType={TitleType.H6} />
                                <View style={style.avatarSubContainer}>
                                    <ProfilePicture size={70} />
                                    <View style={style.avatarButton}>
                                        <ActionButton
                                        title={Constance.CHANGE} 
                                        color={'#FFFFFF'}
                                        backgroundColor={'#495E57'}
                                        borderRadius={8}
                                        fontSize={13}
                                        fontWeight={FontWeight.bold}
                                        width = {90}
                                        height = {40}
                                        onClick={() => {}} />
                                    </View>
                                        
                                    <View style={style.avatarButton}>
                                        <ActionButton
                                        title={Constance.REMOVE} 
                                        color={'#495E57'}
                                        borderWidth={1}
                                        borderColor={'#495E57'}
                                        fontSize={13}
                                        fontWeight={FontWeight.bold}
                                        width = {90}
                                        height = {40}
                                        onClick={() => {}} />
                                    </View>
                                </View>
                            </View>
                            <View>
                                <View style={style.input}>
                                    <TextInputField title={Constance.FIRST_NAME} 
                                                    text={firstName} 
                                                    placeholder={'Tilly'} 
                                                    onChangeText={setFirstName} />
                                </View>
                                <View style={style.input}>
                                    <TextInputField title={Constance.LAST_NAME} 
                                                    text={lastName} 
                                                    placeholder={'Doe'} 
                                                    onChangeText={setLastName} />
                                </View>
                                <View style={style.input}>
                                    <TextInputField title={Constance.EMAIL} 
                                                    keyboardType={'email-address'} 
                                                    text={email} 
                                                    placeholder={'tillydoe@example.com'} 
                                                    onChangeText={setEmail} />
                                </View>
                                <View style={style.input}>
                                    <TextInputField title={Constance.PHONE_NUMBER} 
                                                    keyboardType={'phone-pad'} 
                                                    text={phoneNumber} 
                                                    placeholder={'(217) 555-0113'} 
                                                    onChangeText={setPhoneNumber} />
                                </View>
                            </View>
                        </View>
                        <View style={style.emailInfoContainer}>
                            <View style={style.titleContainer}>
                                <LabelView label={Constance.EMAIL_NOTIFICATIONS} titleType={TitleType.H4} />
                            </View>
                            <View style={style.checkBoxContainer}>
                                <CheckBoxView 
                                    extraStyle={style.checkBox}
                                    label={Constance.ORDER_STATUSES} 
                                    value={orderStatuses} 
                                    onValueChange={(val) => {setOrderStatuses(val)}} />
                                <CheckBoxView  
                                    extraStyle={style.checkBox}
                                    label={Constance.PASSWORD_CHANGES} 
                                    value={passwordChanges} 
                                    onValueChange={(val) => {setPasswordChanges(val)}} />
                                <CheckBoxView  
                                    extraStyle={style.checkBox}
                                    label={Constance.SPECIAL_OFFERS} 
                                    value={specialOffers} 
                                    onValueChange={(val) => {setSpecialOffers(val)}} />
                                <CheckBoxView  
                                    extraStyle={style.checkBox}
                                    label={Constance.NEWSLETTER} 
                                    value={newsletter} 
                                    onValueChange={(val) => {setNewsletter(val)}} />
                            </View>
                        </View>
                    </View>
                    <View style={style.buttonContainer}>
                        <ActionButton 
                            title={Constance.LOG_OUT}
                            color={'#181402'}
                            backgroundColor={'#F4CE14'}
                            borderWidth={1}
                            borderColor={'#DCAD54'}
                            borderRadius={5}
                            fontSize={14}
                            fontWeight={FontWeight.bold}
                            height = {40}
                            onClick={logOutUser}
                        />
                        <View style={style.saveButtonContainer}>
                            <ActionButton 
                                title={Constance.DISCARD_CHANGES}
                                color={'#495E57'}
                                borderWidth={1}
                                borderColor={'#495E57'}
                                borderRadius={5}
                                fontSize={14}
                                fontWeight={FontWeight.bold}
                                height = {40}
                                paddingLeft={16}
                                paddingRight={16}
                                onClick={discardChanges} />

                            <ActionButton 
                                title={Constance.SAVE_CHANGES}
                                color={'#FFFFFF'}
                                backgroundColor={'#495E57'}
                                borderWidth={1}
                                borderColor={'#495E57'}
                                borderRadius={5}
                                fontSize={14}
                                fontWeight={FontWeight.bold}
                                height = {40}
                                paddingLeft={16}
                                paddingRight={16}
                                onClick={saveChanges} />
                        </View>
                    </View>
                </ScrollView>
    </SafeAreaView>);
};

export default Profile;