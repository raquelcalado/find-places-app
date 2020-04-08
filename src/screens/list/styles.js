import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const deviceHeight = (Dimensions.get('window').height);

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: ${deviceHeight}px;
`;

export const EmptyContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: ${deviceHeight * 0.9}px;
`;

export const EmptyError = styled.Text`
  font-size: 16px;
`;

export const SafeAreaView = styled.SafeAreaView`
  margin-bottom: 60px;
`;
