import React, { useEffect, useState, useCallback } from 'react';
import { Alert } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import I18n from '~/config/i18n';
import { Creators as PlacesActions } from '~/redux/ducks/places';
import { Creators as ProfileActions } from '~/redux/ducks/profile';
import homeImg from '~/assets/images/home.png';
import NavBottom from '~/components/NavBottom';
import Button from '~/components/Button';

import {
  Container, Img, ContainerButtons, Subtitle, Title,
} from './styles';

function Home({ navigation, fetchPlacesRequest, user }) {
  const [position, setPosition] = useState(null);
  let loadedLocation;

  const findCoordinates = useCallback(() => {
    Geolocation.getCurrentPosition(
      (p) => {
        if (loadedLocation) {
          setPosition({
            latitude: p.coords.latitude,
            longitude: p.coords.longitude,
          });
        }
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }, []);

  useEffect(() => {
    findCoordinates();
    loadedLocation = true;
    return () => {
      loadedLocation = false;
    };
  }, []);

  useEffect(() => {
    if (position) fetchPlacesRequest(position);
  }, [position]);

  return (
    <Container>
      <Title>{`${I18n.t('home_screen.hello')}, ${user.first_name || user.name}!`}</Title>
      <Img source={homeImg} resizeMode="stretch" />
      <Subtitle>{I18n.t('home_screen.view_locations')}</Subtitle>
      <ContainerButtons>
        <Button btnStyle="primary" content={I18n.t('home_screen.map')} action={() => { navigation.navigate('Map'); }} />
        <Button btnStyle="primary" content={I18n.t('home_screen.list')} action={() => { navigation.navigate('List'); }} />
      </ContainerButtons>
      <NavBottom navigation={navigation} menuActive="Home" />
    </Container>
  );
}

Home.propTypes = {
  fetchPlacesRequest: PropTypes.func.isRequired,
  user: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.profile.user,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...ProfileActions,
  ...PlacesActions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
