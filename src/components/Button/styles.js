import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import globalColors from '~/config/Colors';

const deviceWidth = (Dimensions.get('window').width);

export const Container = styled.TouchableHighlight`
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => (props.style === 'primary' ? globalColors.blue : globalColors.black)};
  border-radius: 20px;
  width: ${deviceWidth > 320 ? 160 : 120}px;
  height: ${deviceWidth > 320 ? 45 : 35}px;
  margin: 10px;
  background-color: ${(props) => (props.style === 'primary' ? globalColors.blue : globalColors.white)};
`;

export const Content = styled.Text`
  color: ${(props) => (props.style === 'primary' ? globalColors.white : globalColors.black)};
  font-family: 'Lato-Bold';
  font-size: ${deviceWidth > 320 ? 16 : 13}px;
`;
