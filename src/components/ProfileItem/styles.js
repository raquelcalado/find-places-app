import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import globalColors from '~/config/Colors';

const deviceWidth = (Dimensions.get('window').width);

export const Container = styled.View`
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    align-self: center;
`;

export const ContainerItems = styled.View`
    margin-top: 30px;
`;

export const Title = styled.Text`
    font-size: 20px;
    text-align: center;
    align-self: center;
`;

export const Label = styled.Text`
    font-family: 'Lato-Light';
    font-size: 14px;
    align-self: center;
    text-align: center;
`;
