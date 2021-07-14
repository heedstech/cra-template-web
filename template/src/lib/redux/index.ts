// Libraries
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga'
import IStore, { IAction } from './models'

// Custom
import appReducer from './reducers'
import sagas from './sagas'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const sagaMiddleware: SagaMiddleware = createSagaMiddleware()

const composeEnhancers: typeof compose =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore<IStore, IAction, unknown, unknown>(
  appReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(sagas)

export default store
