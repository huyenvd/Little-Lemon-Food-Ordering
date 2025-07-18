import { View, Image } from 'react-native';
import { TitleType } from '../../utils/EnumTypes';

import LabelView from '../LabelView/LabelView';

import { style } from './style';

type Props = {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    category: string;
};

const FoodMenuTabCell = ( {name, price, description, imageUrl} : Props) => {
    return (
        <View style={style.container}>
            <View style={style.labelContainer}>
                <LabelView 
                    extraStyle={style.label}
                    label={name} 
                    titleType={TitleType.H5}
                    numberOfLines={2} />
                <LabelView  
                    extraStyle={style.label}
                    label={description} 
                    titleType={TitleType.H6} 
                    fontWeight={'200'}
                    numberOfLines={2} />
                <LabelView
                    label={'$' + price} 
                    titleType={TitleType.H5} 
                    color={'#5A6D67'}
                    fontWeight={'500'}
                    numberOfLines={2} />
            </View>
            <Image 
                style={style.photo} 
                source={{uri: imageUrl}} />
        </View>
    );
};

export default FoodMenuTabCell;