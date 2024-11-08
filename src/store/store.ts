// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import counterReducer from './features/counterSlice';


const store = configureStore({
  reducer: {
    counter: counterReducer,

  },
});

// Type definitions for the Redux store
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// Custom hook for dispatch with the AppDispatch type
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
