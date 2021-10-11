import { paymentSaga } from './payment'
import { all, fork } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'

export default function* rootSaga(): SagaIterator {
  yield all([
    fork(paymentSaga),
  ])
}
