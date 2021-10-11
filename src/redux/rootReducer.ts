import { combineReducers } from '@reduxjs/toolkit'
import { paymentReducer } from './payment'

const rootReducer = combineReducers({
  payment: paymentReducer,
})

export type TRootState = ReturnType<typeof rootReducer>
export default rootReducer
