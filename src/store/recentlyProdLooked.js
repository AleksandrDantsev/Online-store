import { createSlice } from "@reduxjs/toolkit";

let count = 0;

const recentlyProdLooked = createSlice({
    name: "recentlyProdLooked",
    initialState: {
        products: [],
    },
    reducers: {
        addProdRecently(state, action) {
            if (!state.products.find(el => el.id == action.payload.id)) {
                if (state.products.length < 6 && count < 6) {
                        state.products.push(action.payload);
                }     
                else {
                    state.products[count] = action.payload;
                    count < 6 ? count++ : count = 0;
                }
            }
        }
    },
});


export default recentlyProdLooked.reducer;
export const {addProdRecently} = recentlyProdLooked.actions;