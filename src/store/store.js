import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoritesReduser } from "./favorites/favorites.slice";
import { userSlise } from "./user/user.slice";
import { api } from "./api/api";


const reducers = combineReducers({
    favorites: favoritesReduser,
    user: userSlise.reducer,
    [api.reducerPath]: api.reducer,
})
export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})