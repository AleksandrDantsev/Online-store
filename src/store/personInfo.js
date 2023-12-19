import { createSlice } from "@reduxjs/toolkit";


const personInfo = createSlice(
    {
        name: "aboutPerson",
        initialState: {
           aboutPerson: {
                login: '',
                password: '',
                isActiveAccount: false,
            },
        },
        reducers: {
            createPassword(state, action) {
                state.aboutPerson.password = action.payload;
            },
            createLogin(state, action) {
                state.aboutPerson.login = action.payload;
            },
            isSingInTrue(state) {
                state.aboutPerson.isActiveAccount = true;
            },
        }
    }
    );

export default personInfo.reducer;
export const {createPassword, createLogin, isSingInTrue} = personInfo.actions;