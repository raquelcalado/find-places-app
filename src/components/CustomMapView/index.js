import React from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-native-maps';
import {
  Container, MapView,
} from './styles';

function CustomMapView({ listPlaces, latitude, longitude }) {
  const region = {
    latitude,
    longitude,
    latitudeDelta: 0.04,
    longitudeDelta: 0.04,
  };

  return (
      <Container>
          <MapView
            showsUserLocation
            loadingEnabled
            initialRegion={region}
            >
            {listPlaces.map((position) => (
                <Marker
                key={position.place_id}
                coordinate={{
                  latitude: position.geometry.location.lat,
                  longitude: position.geometry.location.lng,
                }}
                title={position.name}
                description={position.vicinity}
                />
            ))}
            </MapView>
      </Container>
  );
}

CustomMapView.propTypes = {
  listPlaces: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};

export default (CustomMapView);
