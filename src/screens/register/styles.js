import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const deviceWidth = (Dimensions.get('window').width);

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Img = styled.Image`
  align-self: center;
  width: ${deviceWidth * 0.6}px;
  height: ${deviceWidth > 320 ? 240 : 180}px;
  margin: ${deviceWidth > 320 ? 20 : 5}px;
`;

export const Title = styled.Text`
  font-family: 'Lato-Bold';
  font-size: ${deviceWidth > 320 ? 24 : 20}px;
  margin-top: ${deviceWidth > 320 ? 0 : 10}px;
`;

export const ContainerInput = styled.View``;
