import { View, Pressable, StyleProp, ViewStyle } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons/faArrowLeftLong';
import { style } from './style';

type Props = {
    extraStyle?: StyleProp<ViewStyle>
    onPress?: () => void,
};

const BackButton = ({ onPress = ()=>{}, extraStyle } : Props) => {
    return (
        <Pressable style={[style.container, extraStyle]} onPress={() => onPress()}>
            <View style={style.iconContainer} >
                <FontAwesomeIcon style={style.icon} icon={faArrowLeftLong} />
            </View>
        </Pressable>
    );
};

export default BackButton;