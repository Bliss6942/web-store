import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../slices/counterSlice'
import  adminSlice  from '../slices/adminSlice'
import userSlice from '../slices/userSlice'


export const store = configureStore({
    reducer:{
        counterSlice,
        adminSlice,
        userSlice
    }
})