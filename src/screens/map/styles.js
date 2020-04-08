import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import mapView from 'react-native-maps';

const deviceHeight = (Dimensions.get('window').height);
const deviceWidth = (Dimensions.get('window').width);

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  height: ${deviceHeight}px;
  flex-direction: column;
  align-items: center;
`;

export const MapView = styled(mapView)`
  width: ${deviceWidth}px;
  height: ${deviceHeight * 0.85}px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
