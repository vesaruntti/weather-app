import { configureStore } from '@reduxjs/toolkit';
import coordinatesSlice from './reducers/coordinatesReducer';
import weatherSlice from './reducers/weatherReducer';

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    coordinate: coordinatesSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
