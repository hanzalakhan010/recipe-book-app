// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import RecipeReducer from '../features/Recipe'
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['recipes']

// }
// export const store = configureStore({
//     reducer: {
//         recipes: RecipeReducer
//     }
// })
// export const persisstor = persistStore(store)
// export type RootState = ReturnType<typeof store.getState>


// export type AppDispatch = typeof store.dispatch


import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import RecipeReducer from "../features/Recipe"

const persistConfig = {
  key: "recipes",
  storage,
}

const persistedRecipeReducer = persistReducer(persistConfig, RecipeReducer)

export const store = configureStore({
  reducer: {
    recipes: persistedRecipeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // needed for redux-persist
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
