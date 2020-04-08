import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import globalColors from '~/config/Colors';

const deviceWidth = (Dimensions.get('window').width);

export const Container = styled.View`
    flex-direction: column;
    margin-top: 10px;
`;

export const Error = styled.Text`
    color: ${globalColors.red};
    margin-left: 5px;
    font-size: ${deviceWidth > 320 ? 14 : 11}px;
`;

export const InputContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1.5px solid ${(props) => (props.hasError ? globalColors.red : globalColors.blue)}; ;
    border-radius: 5px;
    width: ${deviceWidth * 0.7}px;
    height: ${deviceWidth > 320 ? 45 : 35}px;
    margin: ${deviceWidth > 320 ? 5 : 0}px;
`;

export const Input = styled.TextInput`
    width: ${deviceWidth * 0.5}px;
    height: ${deviceWidth > 320 ? 45 : 35}px;
`;

export const Space = styled.View`
    margin: 10px;
`;

export const IconInput = styled(Icon).attrs({
  color: globalColors.blue,
  size: deviceWidth > 320 ? 25 : 20,
})`
    opacity: 0.7;
`;

export const Label = styled.Text`
    font-family: 'Lato-Light';
    font-size: 14px;
    align-self: flex-start;
    margin-top: 5px;
    margin-left: ${deviceWidth > 320 ? 5 : 0}px;
`;
