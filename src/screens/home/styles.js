import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import NavBottom from '~/components/NavBottom';
import globalColors from '~/config/Colors';

const deviceWidth = (Dimensions.get('window').width);

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContainerButtons = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${deviceWidth > 320 ? 70 : 40}px;
  margin-bottom: ${deviceWidth > 320 ? 100 : 50}px;
  flex-direction: row;
`;

export const Img = styled.Image`
  align-self: center;
  width: ${deviceWidth * 0.85}px;
  height: ${deviceWidth > 320 ? 200 : 170}px;
  margin: ${deviceWidth > 320 ? 20 : 5}px;
`;

export const Navbar = styled(NavBottom)``;

export const Title = styled.Text`
  font-size: ${deviceWidth > 320 ? 24 : 19}px;
  width: ${deviceWidth * 0.7}px;
  color: ${globalColors.black};
  align-self: center;
  text-align: center;
`;

export const Subtitle = styled.Text`
  font-size: ${deviceWidth > 320 ? 14 : 12}px;
  width: ${deviceWidth * 0.7}px;
  color: ${globalColors.grey};
  align-self: center;
  text-align: center;
`;
