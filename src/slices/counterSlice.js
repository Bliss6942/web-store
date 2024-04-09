import { createSlice } from '@reduxjs/toolkit'
import data from '../utils/constance'

const counterSlice = createSlice({
    name: 'Counter-slice',
    initialState: {
        data: data,
        basketValue: [],
    },
    reducers:{
        addProduct (state, actions){
            state.basketValue = [...state.basketValue, actions.payload]
            console.log(state.basketValue);
        }   
    }
   
})


export const {addProduct} = counterSlice.actions

export default counterSlice.reducer