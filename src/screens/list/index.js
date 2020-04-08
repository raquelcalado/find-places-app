import React, { useCallback } from 'react';
import {
  ScrollView,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import I18n from '~/config/i18n';
import { Creators as PlacesActions } from '~/redux/ducks/places';
import NavBottom from '~/components/NavBottom';
import Place from '~/components/Place';
import Button from '~/components/Button';

import {
  Container, SafeAreaView, EmptyContainer, EmptyError,
} from './styles';

function List({ navigation, fetchPlacesRequest, listPlaces }) {
  const { currentPlace, places } = listPlaces;

  const renderListPlaces = useCallback(() => (
    places.length ? (
      places.map((item) => (
          <Place key={item.place_id} item={item} />
      ))
    )
      : <EmptyContainer>
          <EmptyError>{I18n.t('list_screen.no_places')}</EmptyError>
          <Button btnStyle="primary" content={I18n.t('list_screen.reload')} action={() => { fetchPlacesRequest(currentPlace); }} />
        </EmptyContainer>

  ), [listPlaces]);

  return (
    <Container>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
        {renderListPlaces()}
        </ScrollView>
      </SafeAreaView>
      <NavBottom navigation={navigation} menuActive="List" />
    </Container>
  );
}

List.propTypes = {
  fetchPlacesRequest: PropTypes.func.isRequired,
  listPlaces: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
};

List.defaultProps = {
  listPlaces: null,
};

const mapStateToProps = (state) => ({
  listPlaces: state.places.data,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  PlacesActions,
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(List);
