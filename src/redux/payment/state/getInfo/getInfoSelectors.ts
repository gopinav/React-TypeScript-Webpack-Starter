import { createSelector } from '@reduxjs/toolkit'
import { TRootState } from '../../../rootReducer'
import { TInfoListState } from '../../state/getInfo/getInfoTypes'

const getInfoState = (state: TRootState): TInfoListState => state.payment.state.getInfo

export const selectInfoList = createSelector(getInfoState, (getInfoState) => getInfoState.data.info)
