import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import globalColors from '~/config/Colors';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const NavContainer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const CenteredColumn = styled.View`
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 14px;
    color: ${globalColors.blue};
    opacity: ${(props) => (props.isActive ? 1 : 0.4)};
    font-family: 'Lato-Bold';
`;

export const MenuIcon = styled(Icon).attrs({
  size: 24,
  color: globalColors.blue,
})`
    opacity: ${(props) => (props.isActive ? 1 : 0.4)};
`;
