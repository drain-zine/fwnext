import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { createWrapper } from "next-redux-wrapper"
import rootReducer from "../reducers/root"
import { fetchCMS } from "../middlewares/fetchCMS"

const middleware = [thunk]

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(fetchCMS));

const makeStore = () => createStore(rootReducer, enhancer)

export const wrapper = createWrapper(makeStore)