import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import globalColors from '~/config/Colors';

const deviceHeight = (Dimensions.get('window').height);
const deviceWidth = (Dimensions.get('window').width);

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  height: ${deviceHeight}px;
  flex-direction: column;
  align-items: center;
`;

export const ProfileFieldsContainer = styled.View`
  margin-top: ${deviceWidth > 320 ? 60 : 5}px;
  margin-bottom: ${deviceWidth > 320 ? 30 : 5}px;
`;

export const Avatar = styled.Image`
  width: ${deviceWidth > 320 ? 110 : 80}px;
  height: ${deviceWidth > 320 ? 110 : 80}px;
  border-radius: 100px;
`;

export const BorderedView = styled.View`
  border-radius: 100px;
  border: 3px solid ${globalColors.blue};
`;

export const EditIcon = styled(Icon).attrs({
  color: globalColors.blue,
  size: deviceWidth > 320 ? 25 : 20,
})`
  opacity: 0.7;
`;

export const ContainerIcon = styled.TouchableOpacity`
  background-color: ${globalColors.pureWhite};
  border: 1px solid ${globalColors.blue};
  border-radius: 20px;
  margin-top: 20px;
  width: ${deviceWidth * 0.25}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const IconTitle = styled.Text`
  font-size: 16px;
`;
