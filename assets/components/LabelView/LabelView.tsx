import { View, Text, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { style } from './style';
import { TitleType } from '../../utils/EnumTypes';

type props = {
    extraStyle?: StyleProp<ViewStyle>;
    label: string;
    color?: string;
    titleType?: TitleType;
    fontWeight?: TextStyle['fontWeight'];
    numberOfLines?: number;
};

const LabelView = ({extraStyle, 
                    label: title, 
                    color = '#324551', 
                    titleType = TitleType.H2,
                    fontWeight = (titleType !== TitleType.H2 ? '700' : '500'),
                    numberOfLines = Infinity,
                   } : props) => {
    return (
        <View style={[style.container, extraStyle]}>
            <Text style={[
                    style.titleText, 
                    {color: color, 
                    fontSize: titleType, 
                    fontWeight: fontWeight}]}
                    numberOfLines={numberOfLines}
            >{title}</Text>
        </View>
    );
};

export default LabelView;