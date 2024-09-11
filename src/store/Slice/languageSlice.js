import { createSlice } from "@reduxjs/toolkit";


const languageSlice = createSlice({
    name:"language",
    initialState:{language:"en-GB"},
    reducers:{
        chooseLanguage : (state, action) => {
            state.language = action.payload;
        }
    }
});

export const languageAction = languageSlice.actions;

export default languageSlice;