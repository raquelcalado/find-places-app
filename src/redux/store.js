import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { routerMiddleware } from 'connected-react-router';
import Reactotron from 'reactotron-react-native';

import createRootReducer from './ducks';
import sagas from './sagas';

const dev = process.env.NODE_ENV === 'dev';
const rootReducer = createRootReducer();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const sagaMonitor = dev ? Reactotron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [routerMiddleware(), sagaMiddleware];

const config = dev
  ? compose(
    applyMiddleware(...middlewares),
    Reactotron.createEnhancer(),
  )
  : applyMiddleware(...middlewares);

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, config);
export const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export default store;
