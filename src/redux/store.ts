import { configureStore } from "@reduxjs/toolkit";
import baseApiSlice from "./baseApi/baseApiSlice";
import { imagebbApiSlice } from "./features/uploadImgbb/imagebbApiSlice";

export const store = configureStore({
  reducer: {
    [baseApiSlice.reducerPath]: baseApiSlice.reducer,
    [imagebbApiSlice.reducerPath]: imagebbApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      baseApiSlice.middleware,
      imagebbApiSlice.middleware
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
