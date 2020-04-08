import React, { useCallback } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as PlacesActions } from '~/redux/ducks/places';
import NavBottom from '~/components/NavBottom';
import CustomMapView from '~/components/CustomMapView';

import {
  Container,
} from './styles';

function Maps({ navigation, listPlaces }) {
  const { currentPlace, places } = listPlaces;

  const renderCustomMapView = useCallback(() => {
    if (!currentPlace) return null;
    return (
    <CustomMapView
        listPlaces={places}
        latitude={currentPlace.latitude}
        longitude={currentPlace.longitude}
      />
    );
  }, [currentPlace]);


  return (
    <Container>
      {renderCustomMapView()}
      <NavBottom navigation={navigation} menuActive="Map" />
    </Container>
  );
}

Maps.propTypes = {
  listPlaces: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

const mapStateToProps = (state) => ({
  listPlaces: state.places.data,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  PlacesActions,
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Maps);
