/* eslint-disable  */
import { call, put } from 'redux-saga/effects';
import reqresApi from '~/services/reqres-api';
import { Creators as ProfileActions } from '../ducks/profile';

export function* login({ payload: params }) {
  try {
    const { email, password } = params;
    const response = yield call(reqresApi.post, 'login', { email, password });

    const data = ({ id: 4, ...response });
    yield put(ProfileActions.loginSuccess(data));
  } catch (err) {
    yield put(ProfileActions.loginFailure(err));
  }
}

export function* createAccount({ payload: params }) {
  try {
    const { email, password } = params;
    const response = yield call(reqresApi.post, 'register', { email, password });

    yield put(ProfileActions.createAccountSuccess(response));
  } catch (err) {
    yield put(ProfileActions.createAccountFailure(err));
  }
}

export function* updateProfile({ payload: params }) {
  try {
    const response = yield call(reqresApi.post, `users/${params.id}`, params);

    yield put(ProfileActions.updateProfileSuccess(response));
  } catch (err) {
    yield put(ProfileActions.updateProfileFailure(err));
  }
}

export function* fetchUser({ payload: params }) {
  try {
    const response = yield call(reqresApi.get, `users/${params.userID}`);

    yield put(ProfileActions.fetchUserSuccess(response.data));
  } catch (err) {
    yield put(ProfileActions.fetchUserFailure(err));
  }
}
