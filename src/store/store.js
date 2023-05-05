import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoritesReduser } from "./favorites/favorites.slice";
import { userSlise } from "./user/user.slice";


const reducers = combineReducers({
    favorites: favoritesReduser,
    user: userSlise.reducer
})
export const store = configureStore({
    reducer: reducers
})