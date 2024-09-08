// redux
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
// types
import { StateSchema } from "./StateSchema";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {};

  const store = configureStore({
    reducer: rootReducers,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(),
  });

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
