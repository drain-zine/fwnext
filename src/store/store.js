import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { createWrapper } from "next-redux-wrapper"
import rootReducer from "../reducers/root"
import { fetchCMSMiddlewares } from "../middlewares/fetchCMS"
import { parseCMS } from "../middlewares/parseCMS/parseCMS"
import { fetchPagesForNav } from "../middlewares/fetchPages"

const middleware = [thunk]

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const middlewares = [...fetchCMSMiddlewares, parseCMS, fetchPagesForNav];

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const makeStore = () => createStore(rootReducer, enhancer)

export const wrapper = createWrapper(makeStore)