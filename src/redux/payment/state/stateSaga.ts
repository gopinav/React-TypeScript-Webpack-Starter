import { SagaIterator } from 'redux-saga'
import { all, fork } from 'redux-saga/effects'
import { getInfoWatcher } from '@src/redux/payment/state/getInfo/getInfoSaga'


export function* stateSaga(): SagaIterator {
  yield all([fork(getInfoWatcher)])
}
