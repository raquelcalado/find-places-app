import { call, put } from 'redux-saga/effects';
import placesApi from '~/services/googleplaces-api';
import { Creators as PlacesActions } from '../ducks/places';
import { apiKey } from '~/config/Constants';

export function* fetchPlaces({ payload: params }) {
  try {
    const { latitude, longitude } = params;
    const response = yield call(placesApi.get, `json?key=${apiKey}&radius=400&location=${latitude},${longitude}`);

    const data = {
      currentPlace: { latitude, longitude },
      places: response.results,
    };

    yield put(PlacesActions.fetchPlacesSuccess(data));
  } catch (err) {
    yield put(PlacesActions.fetchPlacesFailure(err));
  }
}
