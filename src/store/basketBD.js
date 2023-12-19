import { createSlice } from "@reduxjs/toolkit";


const basketBD = createSlice({
    name: "basketBD",
    initialState: {
        productsBasket: [],
        resultBasketElems: [],
    },
    reducers: {
        addBasketElement(state, action) {
            state.resultBasketElems.concat(state.productsBasket);
            state.resultBasketElems.push(action.payload);
            if (state.productsBasket.find(el => el.id == action.payload.id)) return;
            else {
                state.productsBasket.push(action.payload);
            }
        },

        addCounterBasketElems(state, action) {
            if (!state.resultBasketElems.length) {
                state.resultBasketElems = state.resultBasketElems.concat(state.productsBasket);
            }
            state.resultBasketElems.push(action.payload);
        },

        removeCounterBasketElemsPop(state, action) {
            if (state.resultBasketElems.length > 1) {
                let indexEl;
                for (let i = state.resultBasketElems.length-1; i > 0; i--) {
                    if (state.resultBasketElems[i].id == action.payload.id) {
                        indexEl = i;
                        break;
                    }
                }
                state.resultBasketElems.splice(indexEl, 1);
            }
        },
        deleteSimilarElem(state, action) {
            state.resultBasketElems = state.resultBasketElems.filter(el => el.id != action.payload.id);
            state.productsBasket = state.productsBasket.filter(el => el.id != action.payload.id);
        }
    },
});

export default basketBD.reducer;
export const {addBasketElement, addCounterBasketElems, removeCounterBasketElemsPop, deleteSimilarElem} = basketBD.actions;