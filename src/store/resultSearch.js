import { createSlice } from "@reduxjs/toolkit";


const resultSearch = createSlice(
    {
        name: "allQuantitiResult",
        initialState: {
            listProducts: [''],
        },
        reducers: {
            addInListProductsSearchResult(state, action) {
                state.listProducts = [action.payload];
            },
        }
    }
);

export default resultSearch.reducer;
export const {addInListProductsSearchResult} = resultSearch.actions;