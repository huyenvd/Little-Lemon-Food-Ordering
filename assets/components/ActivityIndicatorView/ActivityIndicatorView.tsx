import { View, ActivityIndicator } from 'react-native';
import { style } from './style';

const ActivityIndicatorView = () => {
    return(
        <View style={style.container}>
            <ActivityIndicator size="large" />
        </View>
    );
};

export default ActivityIndicatorView;