import { Pressable, Text } from "react-native";
import { style } from './style';
import { FontWeight } from '../../utils/EnumTypes';

type props = {
    title: string,
    color?: string,
    backgroundColor?: string,
    borderColor?: string,
    borderWidth?: number,
    borderRadius?: number,
    fontSize?: number,
    fontWeight?: FontWeight,
    width?: number,
    height?: number,
    marginLeft?: number,
    marginTop?: number,
    marginRight?: number,
    marginBottom?: number,
    paddingLeft?: number,
    paddingTop?: number,
    paddingRight?: number,
    paddingBottom?: number,
    onClick: () => void,
};

const ActionButton = ({title, 
                       color = '#83918C', 
                       backgroundColor = '#RRGGBBAA',
                       borderWidth = 0,
                       borderColor = '#83918C',
                       borderRadius = 0,
                       fontSize = 28,
                       fontWeight = FontWeight.regular,
                       width = Infinity,
                       height = Infinity,
                       marginLeft = 0,
                       marginTop = 0,
                       marginRight = 0,
                       marginBottom = 0,
                       paddingLeft = 0,
                       paddingTop = 0,
                       paddingRight = 0,
                       paddingBottom = 0,
                       onClick} : props) => {
    return (
        <Pressable style={[style.container, { backgroundColor: backgroundColor, 
                                              borderColor: borderColor,
                                              borderWidth: borderWidth,
                                              borderRadius: borderRadius,
                                              width: width,
                                              height: height,
                                              marginLeft: marginLeft,
                                              marginTop: marginTop,
                                              marginRight: marginRight,
                                              marginBottom: marginBottom,
                                              paddingLeft: paddingLeft,
                                              paddingTop: paddingTop,
                                              paddingRight: paddingRight,
                                              paddingBottom: paddingBottom,}]} 
                                              onPress={onClick}>
            <Text style={[style.font, { color: color,
                                        fontWeight: fontWeight, 
                                        fontSize: fontSize,
                                        width: width,
                                      }]}>{title}</Text>
        </Pressable>
    );
};

export default ActionButton;