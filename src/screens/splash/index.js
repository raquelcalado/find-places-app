import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { StackActions, NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Creators as ProfileActions } from '~/redux/ducks/profile';
import findPlaces from '~/assets/images/find_places.png';

import {
  Container, Logo,
} from './styles';

function Splash({ navigation, logged }) {
  const resetNavigator = (screen) => {
    navigation.dispatch(StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: screen })],
    }));
  };

  useEffect(() => {
    if (logged) {
      resetNavigator('Home');
    } else {
      resetNavigator('Welcome');
    }
  });

  return (
    <Container>
      <Logo source={findPlaces} resizeMode="stretch" />
    </Container>
  );
}

Splash.propTypes = {
  logged: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  logged: state.profile.logged,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...ProfileActions,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
