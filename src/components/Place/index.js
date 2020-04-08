import React from 'react';
import PropTypes from 'prop-types';
import I18n from '~/config/i18n';
import { apiKey, imageNotFound } from '~/config/Constants';

import {
  Container, ContainerImg, ContainerContent, Content, Img,
} from './styles';

function Place({ item }) {
  const photoRef = (item.photos && item.photos[0] && item.photos[0].photo_reference)
    ? item.photos[0].photo_reference
    : null;

  const uri = photoRef
    ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference=${photoRef}&key=${apiKey}`
    : imageNotFound;

  return (
      <Container>
          <ContainerImg>
            <Img source={{ uri }} resizeMode="stretch" />
          </ContainerImg>
          <ContainerContent>
            <Content>{`${I18n.t('place_component.vicinity')}: ${item.vicinity}`}</Content>
            <Content>{`${I18n.t('place_component.latitude')}: ${item.geometry.location.lat}`}</Content>
            <Content>{`${I18n.t('place_component.longitude')}: ${item.geometry.location.lng}`}</Content>
          </ContainerContent>
      </Container>
  );
}

Place.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

export default (Place);
