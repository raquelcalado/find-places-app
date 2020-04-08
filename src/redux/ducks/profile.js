export const Types = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',

  CREATE_ACCOUNT_REQUEST: 'CREATE_ACCOUNT_REQUEST',
  CREATE_ACCOUNT_SUCCESS: 'CREATE_ACCOUNT_SUCCESS',
  CREATE_ACCOUNT_FAILURE: 'CREATE_ACCOUNT_FAILURE',

  UPDATE_PROFILE_REQUEST: 'UPDATE_PROFILE_REQUEST',
  UPDATE_PROFILE_SUCCESS: 'UPDATE_PROFILE_SUCCESS',
  UPDATE_PROFILE_FAILURE: 'UPDATE_PROFILE_FAILURE',

  FETCH_USER_REQUEST: 'FETCH_USER_REQUEST',
  FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
  FETCH_USER_FAILURE: 'FETCH_USER_FAILURE',

  LOGOUT: 'LOGOUT',
  CLEAR: 'CLEAR',
};

const INITIAL_STATE = {
  user: {},
  accountCreated: false,
  logging_in: false,
  logged: false,
  error: null,
};

export default function Places(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return { ...state, logging_in: true };
    case Types.LOGIN_SUCCESS:
      return {
        ...state, user: action.payload, logging_in: false, logged: true, error: null,
      };
    case Types.LOGIN_FAILURE:
      return { ...state, logging_in: false, error: action.payload };
    case Types.CREATE_ACCOUNT_REQUEST:
      return { ...state };
    case Types.CREATE_ACCOUNT_SUCCESS:
      return { ...state, accountCreated: true };
    case Types.CREATE_ACCOUNT_FAILURE:
      return { ...state, error: action.payload };
    case Types.UPDATE_PROFILE_REQUEST:
      return { ...state };
    case Types.UPDATE_PROFILE_SUCCESS:
      return { ...state, user: action.payload, error: null };
    case Types.UPDATE_PROFILE_FAILURE:
      return { ...state, error: action.payload };
    case Types.FETCH_USER_REQUEST:
      return { ...state };
    case Types.FETCH_USER_SUCCESS:
      return { ...state, user: action.payload, error: null };
    case Types.FETCH_USER_FAILURE:
      return { ...state, error: action.payload };
    case Types.LOGOUT:
      return {
        ...state, user: {}, logged: false, error: null,
      };
    case Types.CLEAR:
      return { ...state, error: null };
    default:
      return state;
  }
}

export const Creators = {
  loginRequest: (payload) => ({
    type: Types.LOGIN_REQUEST,
    payload,
  }),

  loginSuccess: (payload) => ({
    type: Types.LOGIN_SUCCESS,
    payload,
  }),

  loginFailure: (reason) => ({
    type: Types.LOGIN_FAILURE,
    payload: reason,
  }),

  createAccountRequest: (payload) => ({
    type: Types.CREATE_ACCOUNT_REQUEST,
    payload,
  }),

  createAccountSuccess: (payload) => ({
    type: Types.CREATE_ACCOUNT_SUCCESS,
    payload,
  }),

  createAccountFailure: (reason) => ({
    type: Types.CREATE_ACCOUNT_FAILURE,
    payload: reason,
  }),

  updateProfileRequest: (payload) => ({
    type: Types.UPDATE_PROFILE_REQUEST,
    payload,
  }),

  updateProfileSuccess: (payload) => ({
    type: Types.UPDATE_PROFILE_SUCCESS,
    payload,
  }),

  updateProfileFailure: (reason) => ({
    type: Types.UPDATE_PROFILE_FAILURE,
    payload: reason,
  }),

  fetchUserRequest: (payload) => ({
    type: Types.FETCH_USER_REQUEST,
    payload,
  }),

  fetchUserSuccess: (payload) => ({
    type: Types.FETCH_USER_SUCCESS,
    payload,
  }),

  fetchUserFailure: (reason) => ({
    type: Types.FETCH_USER_FAILURE,
    payload: reason,
  }),

  logout: (payload) => ({
    type: Types.LOGOUT,
    payload,
  }),

  clear: (payload) => ({
    type: Types.CLEAR,
    payload,
  }),

};
