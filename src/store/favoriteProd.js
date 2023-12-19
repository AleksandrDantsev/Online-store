import {createSlice} from "@reduxjs/toolkit";

const favoriteProd = createSlice({
    name: "favoriteProducts",
    initialState: {
        allFavAdded: [],
    },
    reducers: {
        addedFavor(state, action) {
            if (state.allFavAdded.length >= 0) {
                if (state.allFavAdded.find(el => el.id == action.payload.id)) return;
                else {
                    state.allFavAdded.push(action.payload);
                }
            }
        },
        removeFavor(state, action) {
                state.allFavAdded = state.allFavAdded.filter(el => el.id != action.payload.id);
            },
        growerSort(state) {
            state.allFavAdded = state.allFavAdded.sort((a, b) => +a.cost - +b.cost);
        },
    
        lowerSort(state) {
            state.allFavAdded = state.allFavAdded.sort((a, b) => +b.cost - +a.cost);
        }
        },
    }
)

export default favoriteProd.reducer;
export const {addedFavor, removeFavor, growerSort, lowerSort} = favoriteProd.actions;