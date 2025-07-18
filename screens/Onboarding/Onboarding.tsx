import { ScrollView, View } from 'react-native';

import LogoHeader from '../../assets/components/LogoHeader/LogoHeader';
import TextInputField from '../../assets/components/TextInputField/TextInputField';
import LabelView from '../../assets/components/LabelView/LabelView';
import ActionButton from '../../assets/components/ActionButton/ActionButton';
import { useOnboarding } from '../../assets/customHooks/useOnboarding';

import globalStyle from '../../assets/style/globalStyle';
import { style } from './style';
import { FontWeight } from '../../assets/utils/EnumTypes';
import { Constance } from '../../assets/utils/Constance';
import { TitleType } from '../../assets/utils/EnumTypes';

const Onboarding = ({ navigation }: { navigation: any }) => {

    const {
        setFirstName,
        setEmail,
        handleSubmit,
    } = useOnboarding({ navigation });

    return (
        <View style={[{backgroundColor: '#DEE3E9'}, globalStyle.flex]}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[globalStyle.backgroundColor, globalStyle.flex]}>
                <LogoHeader backgroundColor={'#DEE3E9'} />
                <View style={style.contentContainer}>
                    <LabelView label={Constance.LET_US_GET_TO_KNOW_YOU} />
                    <View>
                        <View style={style.input}>
                            <TextInputField 
                            title={Constance.FIRST_NAME} 
                            inputLength={20}
                            fontSize={20}
                            titleType={TitleType.H3}
                            borderWidth={2}
                            height={50}
                            onChangeText={setFirstName}
                            />
                        </View>
                        <View style={style.input}>
                            <TextInputField 
                            title={Constance.EMAIL}
                            inputLength={20}
                            keyboardType='email-address' 
                            fontSize={20}
                            titleType={TitleType.H3}
                            borderWidth={2}
                            height={50}
                            onChangeText={setEmail}
                            />
                        </View>
                    </View>
                </View>
                <View style={style.buttonContainer}>
                    <ActionButton 
                        title = {Constance.NEXT}
                        color = '#465A69'
                        backgroundColor = '#CBD2D9'
                        borderColor = '#83918C'
                        borderRadius = {10}
                        fontSize = {28}
                        fontWeight = {FontWeight.bold}
                        height = {70}
                        onClick={handleSubmit} />
                </View>
            </ScrollView>
        </View>
    );
};

export default Onboarding;