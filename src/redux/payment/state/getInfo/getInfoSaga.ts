import { put, takeEvery } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'

import { getInfoRequest, getInfoSuccess } from './getInfoSlice'
import { INFO_RES_MOCK } from '@src/redux/payment/state/getInfo/__mocks__'
import { TInfoListRes } from '@src/api/payment/getInfo/declaration'

export function* getInfoWorker(): SagaIterator {
  try {
    // получаем данные
    const data: TInfoListRes = INFO_RES_MOCK

    yield put(getInfoSuccess(data))
  } catch (error) {
    // const apiErrorMessage = get(error.response.data, 'errorMessage', undefined)
    // const errorObj: GetOfdListRes = apiErrorMessage
    //   ? error
    //   : {
    //       errorMessage: errorMessages.unexpected,
    //     }
    // yield put(getInfoError(errorObj))
  }
}

export function* getInfoWatcher(): SagaIterator {
  yield takeEvery(getInfoRequest.type, getInfoWorker)
}
