import { GET_BEER, IS_FETCHING } from "./action-types";

const initialUserState = {
  beer: {},
  isFetching: false,
};

export const reducer = (state = initialUserState, action) => {
  switch (action.type) {
    case GET_BEER:
      return {
        ...state,
        beer: action.beer,
        isFetching: true,
      };
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};
