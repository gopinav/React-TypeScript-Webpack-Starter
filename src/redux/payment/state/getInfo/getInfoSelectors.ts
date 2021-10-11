import { createSelector } from '@reduxjs/toolkit'
import { TInfoListState } from '@src/redux/payment/state/getInfo/getInfoTypes'
import { TRootState } from '@src/redux/rootReducer'

const getInfoState = (state: TRootState): TInfoListState => state.payment.state.getInfo

export const selectInfoList = createSelector(getInfoState, (getInfoState) => getInfoState.data.info)
