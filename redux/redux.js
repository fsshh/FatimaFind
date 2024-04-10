import { createSlice } from "@reduxjs/toolkit";
import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";

// TOGGLE ACTION

const initialStateValueofAbout = {
    isAboutToggled: false
}
const initialStateValueofHelp = {
    isHelpToggled: false
}
const initialStateValueofFind = {
    isFindToggled: false
}
const initialStateValueofMap = {
    isMapToggled: true
}

// TOGGLE REDUCER
const toggleSlice = createSlice({
    name: 'Toggle',
    initialState: {
        initialStateValueofAbout,
        initialStateValueofHelp,
        initialStateValueofFind,
        initialStateValueofMap,
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
        toggleFindSwitch: (state = initialStateValueofFind) =>{
            state.isFindToggled = !state.isFindToggled;
        },
        // Map Toggle Switch
        toggleMapOn: (state = initialStateValueofMap) =>{
            state.isMapToggled = true
        },
        toggleMapOff: (state = initialStateValueofMap) =>{
            state.isMapToggled = false
        },
    }
});

export const {
    toggleAboutOn, toggleAboutOff, 
    toggleHelpOn, toggleHelpOff, 
    toggleFindOn, toggleFindOff, toggleFindSwitch,
    toggleMapOn, toggleMapOff} = toggleSlice.actions;

// MARKERS ACTION
const initialMarkerData = {
    markerData: 'none'
}

// MARKERS REDUCER
const markerSlice = createSlice({
    name: 'Markers',
    initialState: initialMarkerData,
    reducers:{
        changeMarkerData: (state = initialMarkerData, action) =>{
            state.markerData = action.payload;
        }
    }
});

export const {changeMarkerData} = markerSlice.actions;

const rootReducer = combineReducers({
    toggled: toggleSlice.reducer,
    markers: markerSlice.reducer

})

const store = createStore(rootReducer);


export default store;