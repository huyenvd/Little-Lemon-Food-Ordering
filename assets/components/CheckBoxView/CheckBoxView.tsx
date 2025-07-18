import { Text, StyleProp, ViewStyle, Pressable } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import { style } from './style';

type Props = {
    extraStyle?: StyleProp<ViewStyle>,
    label: string,
    value: boolean;
    onValueChange: (value: boolean)=>void;
};

const CheckBoxView = ({extraStyle, label, value = false, onValueChange}: Props) => {
    const handleTap = (val: boolean) => {
        onValueChange(val);
    };

    return (
        <Pressable style={[style.container, extraStyle]} onPress={() => handleTap(!value)}>
            <CheckBox
                    style={style.checkBox}
                    value={value}
                    onValueChange={handleTap}
                    boxType={'square'}
                    onFillColor={'#40564F'}
                    onTintColor={'#40564F'}
                    onCheckColor={'#FFFFFF'}
                    lineWidth={2}
                />
            <Text style={style.label}>{label}</Text>
        </Pressable>
    );
};

export default CheckBoxView;