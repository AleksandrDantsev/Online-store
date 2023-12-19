import {configureStore} from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import personInfo from "./personInfo";
import favoriteProd from "./favoriteProd";
import basketBD from "./basketBD";
import resultSearch from "./resultSearch";
import recentlyProdLooked from "./recentlyProdLooked";

const reducers = combineReducers({
    personInfo,
    favoriteProd,
    basketBD,
    resultSearch,
    recentlyProdLooked,
});

export const store = configureStore({
    reducer: reducers,
});