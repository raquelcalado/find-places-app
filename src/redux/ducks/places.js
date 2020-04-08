export const Types = {
  FETCH_PLACES_REQUEST: 'FETCH_PLACES_REQUEST',
  FETCH_PLACES_SUCCESS: 'FETCH_PLACES_SUCCESS',
  FETCH_PLACES_FAILURE: 'FETCH_PLACES_FAILURE',
};

const INITIAL_STATE = {
  data: {},
  loading: false,
};

export default function Places(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.FETCH_PLACES_REQUEST:
      return { ...state, loading: true };
    case Types.FETCH_PLACES_SUCCESS:
      return { ...state, data: action.payload };
    case Types.FETCH_PLACES_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export const Creators = {
  fetchPlacesRequest: (payload) => ({
    type: Types.FETCH_PLACES_REQUEST,
    payload,
  }),

  fetchPlacesSuccess: (payload) => ({
    type: Types.FETCH_PLACES_SUCCESS,
    payload,
  }),

  fetchPlacesFailure: (reason) => ({
    type: Types.FETCH_PLACES_FAILURE,
    payload: reason,
  }),
};
