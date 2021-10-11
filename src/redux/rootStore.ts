import { applyMiddleware, createStore } from '@reduxjs/toolkit'
import rootSaga from '@src/redux/rootSaga'
import rootReducer from '@src/redux/rootReducer'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
  trace: true,
})

const rootStore = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))

sagaMiddleware.run(rootSaga)

export default rootStore
