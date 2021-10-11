import { combineReducers } from '@reduxjs/toolkit'
import { getInfoReducer } from '@src/redux/payment/state/getInfo/getInfoSlice'


export const stateReducer = combineReducers({
  getInfo: getInfoReducer,
})
