import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { jsonServerApi } from './request'
import adminListReducer from "./store/adminListSlice";
import moduleNameSlice from './store/moduleNameSlice';

export const store = configureStore({
  reducer: {
    moduleName: moduleNameSlice,
    adminList: adminListReducer,
    [jsonServerApi.reducerPath]: jsonServerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonServerApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
