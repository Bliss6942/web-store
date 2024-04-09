import { createSlice } from '@reduxjs/toolkit'
import data from '../utils/constance'


const adminSlice = createSlice({
    name: 'Admin-slice',
    initialState:{
        data: data,
    },
    reducers:{
        addtoData: (state, actions)=>{
            const newItem = {
                title:actions.payload.title,
                description:actions.payload.description,
                image:actions.payload.image,
                price:actions.payload.price,
            }
            state.data = [...state.data, newItem]
            console.log(state.data);
        },

        
    }
})

export const {addtoData} = adminSlice.actions

export default adminSlice.reducer
