import { Image, ImageStyle, StyleProp } from 'react-native';
import { style } from './style';

type Props = {
    extraStyle?: StyleProp<ImageStyle>;
    size?: number;
};

const ProfilePicture = ({size = 50, extraStyle} : Props) => {
    return (<Image 
        style={[style.picture, {width: size, height: size, borderRadius: size,}, extraStyle]} 
        source={require('../../images/Profile.png')} />);
};

export default ProfilePicture;