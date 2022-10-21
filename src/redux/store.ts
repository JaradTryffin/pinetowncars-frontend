import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./features/apiSlice";
import makeReducer from "../redux/features/counterSlice";

export const store = configureStore({
  reducer: {
    make: makeReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
