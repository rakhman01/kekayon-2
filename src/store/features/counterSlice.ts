// store/features/counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
  language: string;
}

const initialState: CounterState = {
  value: 0,
  language: 'en'
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
        state.language = action.payload;
      },
  
  },

  
});

export const { increment, decrement, incrementByAmount,setLanguage } = counterSlice.actions;
export default counterSlice.reducer;
