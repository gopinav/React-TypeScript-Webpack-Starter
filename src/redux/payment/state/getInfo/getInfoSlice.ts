import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TInfoListState } from './getInfoTypes'
import { TInfoListReq, TInfoListRes } from '@src/api/payment/getInfo/declaration'

const INITIAL_STATE: TInfoListState = {
  loading: false,
  error: false,
  data: {
    errorCode: 0,
  },
}

const getInfoSlice = createSlice({
  name: 'getInfo',
  initialState: INITIAL_STATE,
  reducers: {
    getInfoRequest(state, _action: PayloadAction<TInfoListReq>): void {
      state.loading = true
    },
    getInfoSuccess(state, action: PayloadAction<TInfoListRes>): void {
      state.loading = false
      state.data = action.payload
    },
    getInfoError(state, action: PayloadAction<TInfoListRes>): void {
      state.loading = false
      state.error = true
      state.data = action.payload
    },
    getInfoReset(): TInfoListState {
      return INITIAL_STATE
    },
  },
})

export const { getInfoRequest, getInfoSuccess, getInfoError, getInfoReset } = getInfoSlice.actions
export const getInfoReducer = getInfoSlice.reducer
