// npm i @reduxjs/toolkit
// const createSlice = require('@reduxjs/toolkit').createSlice 
import { createSlice , createAsyncThunk} from "@reduxjs/toolkit"

const initialState = {
    numOfCakes : 10
}
 

// createSlice is a special method that handles everything
// in itself to prevent the lengthy boilerplate code
// that was present normally
const cakeSlice = createSlice({
    name: 'cake',
    initialState: initialState,
    reducers: {
        ordered: (state, action) => {
            state.numOfCakes--
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        }
    }
}) 

// Here, we can see that it takes the name which 
// is the container
// initial state and the reducer function in one place
// itself
// The reducer here is a key whose value is a function
// which takes state and action as arguments
// And in this, there is no need to return a new object
// We can simply change the property we want to change and
// it will be updated. New state is returned but not
// explicitly and createSlice handles this under the hood

// Also, we see we don't need action creators since 
// createSlice creates action creators under the hood by
// the same name as the reducer functions (ordered, 
// restocked in our example)


// Exporting reducer function
// module.exports = cakeSlice.reducer
export default cakeSlice.reducer

// Exporting actions as named export
// module.exports.cakeActions = cakeSlice.actions
export const {ordered,restocked} = cakeSlice.actions






