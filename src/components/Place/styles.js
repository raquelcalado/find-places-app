import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import globalColors from '~/config/Colors';

const deviceWidth = (Dimensions.get('window').width);

export const Container = styled.View`
  background-color:${globalColors.pureWhite};
  width: ${deviceWidth * 0.9}px;
  justify-content: flex-start;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
  margin: 12px;
`;

export const ContainerImg = styled.View`
  background-color:${globalColors.pureWhite};
  justify-content: center;
  align-items: center;
  width: ${deviceWidth * 0.2}px;
  margin-right: 25px;
`;

export const ContainerContent = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: ${deviceWidth * 0.65}px;
  height: ${deviceWidth > 320 ? 145 : 100}px;
  background-color:${globalColors.pureWhite};
  margin-left: 10px;
`;

export const Content = styled.Text`
  font-family: 'Lato-Regular';
  font-size: ${deviceWidth > 320 ? 16 : 13}px;
  margin-top: 5px;
`;

export const Img = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 3px;
  margin-left: 35px;
`;
