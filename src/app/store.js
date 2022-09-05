// npm i @reduxjs/toolkit

import { configureStore } from "@reduxjs/toolkit";
// const { configureStore } = require("@reduxjs/toolkit");
import cakeReducer from '../features/cake/cakeSlice'
// const cakeReducer = require('../features/cake/cakeSlice')
import icecreamReducer from '../features/icecream/icecreamSlice'
// const icecreamReducer = require('../features/icecream/icecreamSlice')
import userReducer from '../features/user/userSlice'


// For applying logger middleware
// const reduxLogger = require("redux-logger")

// const logger = reduxLogger.createLogger();

// In toolkit we use configure instead of createStore
// Takes an object as in which we can define all the 
// reducers we want to use
// This reducer key takes an object as value
// in which we can give key-value pair , reducer
// from cake slice as value
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer
    },
    // To apply middleware
    // middleware: (getDefaultMiddleware) =>  getDefaultMiddleware().concat(logger)
})

// Export the store
// module.exports = store 
export default store