import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

/**
 * Interface defining the structure of the Categories Redux slice state.
 */
export interface CategoriesState {
  categories: string[];
}

const initialState: CategoriesState = {
  categories: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addIfNew: (state, action: PayloadAction<string | undefined>) => {
      if (action.payload) {
        const foundIndex: number = state.categories.findIndex(
          (category: string) => category === action.payload
        );

        if (foundIndex === -1) {
          state.categories.push(action.payload);
        }
      }
    },
    remove: (state, action: PayloadAction<string>) => {
      const foundIndex: number = state.categories.findIndex(
        (category: string) => category === action.payload
      );

      if (foundIndex !== -1) {
        state.categories.splice(foundIndex);
      }
    },
    set: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { addIfNew, remove, set } = categoriesSlice.actions;

export const categories = (state: RootState) => state.categories.categories;

export default categoriesSlice.reducer;
