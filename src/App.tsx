import React, { useEffect } from 'react'
import { Counter } from './Counter'
import { useDispatch, useSelector } from 'react-redux'
import { getInfoRequest } from '@src/redux/payment/state/getInfo/getInfoSlice'
import { selectInfoList } from '@src/redux/payment/state/getInfo/getInfoSelectors'

export const App = () => {
  const dispatch = useDispatch()
  const infoList = useSelector(selectInfoList)

  useEffect(function dispatchDate() {
    dispatch(getInfoRequest({orgId: 32434}))
  }, [dispatch])

  useEffect(function showDate() {
    if (infoList) {
      console.log('infoList', infoList)
    }
  }, [dispatch])

  return (
    <>
      <h1>React TypeScript Webpack Starter Template</h1>
      <Counter />
    </>
  )
}
