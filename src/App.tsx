import React, { useEffect } from 'react'
import { Counter } from './Counter'
import { useDispatch } from 'react-redux'
import { getInfoRequest } from '../src/redux/payment/state/getInfo/getInfoSlice'
import { selectInfoList } from '../src/redux/payment/state/getInfo/getInfoSelectors'

export const App = () => {
  const dispatch = useDispatch()

  useEffect(function dispatchDate() {
    dispatch(getInfoRequest({orgId: 32434}))
  }, [dispatch])

  useEffect(function dispatchDate() {
    if (selectInfoList) {
      console.log('selectInfoList', selectInfoList)
    }
  }, [dispatch])

  return (
    <>
      <h1>React TypeScript Webpack Starter Template</h1>
      <Counter />
    </>
  )
}
