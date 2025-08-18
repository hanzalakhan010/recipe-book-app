import { configureStore } from "@reduxjs/toolkit";
import RecipeReducer from '../features/Recipe'

export const store = configureStore({
    reducer: {
        recipes: RecipeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>


export type AppDispatch = typeof store.dispatch