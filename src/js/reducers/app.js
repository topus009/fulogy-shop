import constants from '../constants/App';

const { GETSMTH } = constants;

export const initialState = {
  users: [],
};

export default function app(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case GETSMTH:
      return {
        ...state,
        smth: payload,
        loading: false,
      };
    default:
      return state;
  }
}
