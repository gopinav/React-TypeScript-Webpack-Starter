import { SagaIterator } from 'redux-saga'
import { all, fork } from 'redux-saga/effects'
import { stateSaga } from '@src/redux/payment/state/stateSaga'

export function* paymentSaga(): SagaIterator {
  yield all([fork(stateSaga)])
}
