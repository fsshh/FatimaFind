import { createSlice } from "@reduxjs/toolkit";
import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";

// ACTION

const initialStateValueofAbout = {
    isAboutToggled: false
}
const initialStateValueofHelp = {
    isHelpToggled: false
}
const initialStateValueofFind = {
    isFindToggled: false
}
// REDUCER
const toggleSlice = createSlice({
    name: 'Toggle',
    initialState: {
        initialStateValueofAbout,
        initialStateValueofHelp,
        initialStateValueofFind,
    },
    reducers:{
        // About Toggle Switch
        toggleAboutOn: (state = initialStateValueofAbout) =>{
            state.isAboutToggled = true
        },
        toggleAboutOff: (state = initialStateValueofAbout) =>{
            state.isAboutToggled = false
        },
        // Help Toggle Switch
        toggleHelpOn: (state = initialStateValueofHelp) =>{
            state.isHelpToggled = true
        },
        toggleHelpOff: (state = initialStateValueofHelp) =>{
            state.isHelpToggled = false
        },
        // Find Toggle Switch       
        toggleFindOn: (state = initialStateValueofFind) =>{
            state.isFindToggled = true
        },
        toggleFindOff: (state = initialStateValueofFind) =>{
            state.isFindToggled = false
        },
    }
});

export const {
    toggleAboutOn, toggleAboutOff, 
    toggleHelpOn, toggleHelpOff, 
    toggleFindOn, toggleFindOff} = toggleSlice.actions;

const rootReducer = combineReducers({
    toggled: toggleSlice.reducer

})

const store = createStore(rootReducer);


export default store;