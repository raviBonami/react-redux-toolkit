
// import { createSlice } from "@reduxjs/toolkit";

// const { cakeActions, createAsyncThunk } = require('../cake/cakeSlice')

// const createSlice = require('@reduxjs/toolkit').createSlice
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import {ordered as cakeOrdered} from '../cake/cakeSlice'

const initialState = { 
    numOfIcecreams: 68
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState: initialState,
    reducers: {
        buyIcecream: (state,action) => {
            state.numOfIcecreams -= action.payload
        },

        restockIcecream: (state, action) => {
            state.numOfIcecreams += action.payload
        },
        
    },
    // extraReducers : {
    //     ["cake/ordered"] : (state, action) => {
    //         state.numOfIcecreams--
    //     }
    // }

    extraReducers : (builder) => {
        builder.addCase(cakeOrdered, (state,action) => {
            state.numOfIcecreams--
        })
    }
})

// module.exports = icecreamSlice.reducer
export default icecreamSlice.reducer
// module.exports.icecreamActions = icecreamSlice.actions
export const {buyIcecream,restockIcecream} = icecreamSlice.actions
