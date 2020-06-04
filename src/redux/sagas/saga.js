import { call, put, takeLatest } from "redux-saga/effects";
import { GET_BEER_SAGA} from "../action-types";
import { getBeer } from "../action";
import { beerFetch } from "../../fetches/beerFetch";

function* fetchSagaGetBeer(payload) {
  try {
    const beer = yield call(beerFetch);
    yield put(getBeer(beer));
  } catch (e) {
    console.log(e);
  }
}

export default function* actionWatcher() {
  yield takeLatest(GET_BEER_SAGA, fetchSagaGetBeer)
};