// Redux toolkit
import { configureStore } from "@reduxjs/toolkit";

// Api
import { sportalApi } from "./apiSlice";

export const store = configureStore({
  reducer: {
    [sportalApi.reducerPath]: sportalApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sportalApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof store>
