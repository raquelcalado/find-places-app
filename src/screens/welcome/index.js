import React from 'react';
import I18n from '~/config/i18n';
import welcomeImg from '~/assets/images/welcome.png';
import findPlaces from '~/assets/images/find_places.png';
import Button from '~/components/Button';

import {
  Container, Img, Logo, Subtitle, ContainerButtons,
} from './styles';

export default function Welcome({ navigation }) {
  return (
    <Container>
      <Img source={welcomeImg} resizeMode="stretch" />
      <Logo source={findPlaces} resizeMode="stretch" />
      <Subtitle>{I18n.t('welcome_screen.app_info')}</Subtitle>
      <ContainerButtons>
        <Button
          btnStyle="primary"
          content={I18n.t('login')}
          action={() => { navigation.navigate('Login'); }}
        />
        <Button
          btnStyle="secondary"
          content={I18n.t('sign_up')}
          action={() => { navigation.navigate('Register'); }}
        />
      </ContainerButtons>
    </Container>
  );
}
