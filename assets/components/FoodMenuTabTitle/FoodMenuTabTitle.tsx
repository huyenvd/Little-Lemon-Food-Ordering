import LabelView from '../LabelView/LabelView';
import { TitleType } from '../../utils/EnumTypes';
import { View } from 'react-native';
import { style } from './style';

type Props = {
    title: string;
    isFocused: Boolean;
};

const FoodMenuTabTitle = ({title, isFocused} : Props) => {
    return (
        <View style={[style.container, style.containerFocused, !isFocused && style.containerNotFocused]}>
            <LabelView label={title} titleType={TitleType.H5} color={isFocused ? '#FFFFFF' : '#4B5F59'} />
        </View>
    );
};

export default FoodMenuTabTitle;