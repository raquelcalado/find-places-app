import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const deviceWidth = (Dimensions.get('window').width);
const deviceHeight = (Dimensions.get('window').height);

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: ${deviceHeight}px;
`;

export const Logo = styled.Image`
  align-self: center;
  width: ${deviceWidth * 0.65}px;
  height: ${deviceWidth > 320 ? 70 : 60}px;
`;
