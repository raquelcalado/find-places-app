import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import mapView from 'react-native-maps';

const deviceHeight = (Dimensions.get('window').height);
const deviceWidth = (Dimensions.get('window').width);

export const Container = styled.View`
  width: ${deviceWidth}px;
  height: ${deviceHeight}px;
  align-items: center;
`;

export const MapView = styled(mapView)`
  width: ${deviceWidth}px;
  height: ${deviceHeight * 0.93}px;
`;
