import { all, takeLatest } from 'redux-saga/effects';

import { Types as ProfileTypes } from '../ducks/profile';
import { Types as PlacesTypes } from '../ducks/places';

import {
  login, createAccount, updateProfile, fetchUser,
} from './profile';

import {
  fetchPlaces,
} from './places';

export default function* rootSaga() {
  yield all([
    takeLatest(ProfileTypes.LOGIN_REQUEST, login),
    takeLatest(ProfileTypes.CREATE_ACCOUNT_REQUEST, createAccount),
    takeLatest(ProfileTypes.UPDATE_PROFILE_REQUEST, updateProfile),
    takeLatest(ProfileTypes.FETCH_USER_REQUEST, fetchUser),

    takeLatest(PlacesTypes.FETCH_PLACES_REQUEST, fetchPlaces),
  ]);
}
