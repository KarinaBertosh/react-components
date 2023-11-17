import { combineReducers, configureStore } from '@reduxjs/toolkit';
import photoReducer from './reducers/PhotoSlice';
import userReducer from './reducers/UserAuth';

const rootReducer = combineReducers({
  photoReducer,
  userReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
