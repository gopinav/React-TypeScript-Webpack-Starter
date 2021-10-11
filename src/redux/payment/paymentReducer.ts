import { combineReducers } from '@reduxjs/toolkit'
import { stateReducer } from '@src/redux/payment/state/stateReducer'

export const paymentReducer = combineReducers({
  state: stateReducer,
})
