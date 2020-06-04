import { GET_BEER, IS_FETCHING, GET_BEER_SAGA, IS_FETCHING_SAGA } from "./action-types";

export const getBeer = (payload) => {
  return {
    type: GET_BEER,
    beer: payload,
  };
};

export const getBeerSaga = () => {
  return {
    type: GET_BEER_SAGA,
  };
};

export const isFetching = (isFetching) => {
  return {
    type: IS_FETCHING,
    isFetching: isFetching,
  };
};

export const isFetchingSaga = (isFetching) => {
  return {
    type: IS_FETCHING_SAGA,
    isFetching: isFetching,
  };
};