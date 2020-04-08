import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import globalColors from '~/config/Colors';

const deviceWidth = (Dimensions.get('window').width);

export const Container = styled.View`
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ContainerInput = styled.View``;

export const Img = styled.Image`
  height: ${deviceWidth > 320 ? 200 : 170}px;
  width: ${deviceWidth * 0.85}px;
`;

export const Title = styled.Text`
  font-size: ${deviceWidth > 320 ? 24 : 20}px;
  font-family: 'Lato-Bold';
  margin: 10px;
`;

export const SubtitleContainer = styled.View`
  margin-top: ${deviceWidth > 320 ? 40 : 0}px;
  flex-direction: row;
`;

export const NoAccount = styled.Text`
  font-size: ${deviceWidth > 320 ? 17 : 12}px;
  color: ${globalColors.grey};
  font-family: 'Lato-Bold';
`;

export const Register = styled.Text`
  font-size: ${deviceWidth > 320 ? 17 : 12}px;
  font-family: 'Lato-Bold';
`;
