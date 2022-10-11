import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from '../core/reducers/rootReducer';
import rootSaga from "../core/sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

const configureStore = () => {
    sagaMiddleware.run(rootSaga);
    return store;
};

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default configureStore;
