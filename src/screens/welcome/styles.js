import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import globalColors from '~/config/Colors';

const deviceWidth = (Dimensions.get('window').width);
const deviceHeight = (Dimensions.get('window').height);

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: ${deviceHeight}px;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  padding-top: ${deviceWidth > 320 ? 80 : 50}px;
`;

export const Img = styled.Image`
  align-self: center;
  width: ${deviceWidth}px;
  height: ${deviceWidth > 320 ? 240 : 180}px;
`;

export const Logo = styled.Image`
  align-self: center;
  width: ${deviceWidth * 0.65}px;
  height: ${deviceWidth > 320 ? 70 : 60}px;
`;

export const Subtitle = styled.Text`
  font-family: 'Lato-Regular';
  color: ${globalColors.grey};
  font-size: ${deviceWidth > 320 ? 17 : 14}px;
  width: ${deviceWidth * 0.8}px;
  text-align: center;
  padding: 5px;
`;
