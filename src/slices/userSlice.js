import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../firebaseConfig"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const createAccount = createAsyncThunk(
    'counter/createAccount',
    async({email,password}, {dispatch}) =>{
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials.user);
        // localStorage.setItem('user', JSON.stringify(userCredentials.user))
        dispatch(setToken(userCredentials.user.acessToken))
        dispatch(setEmail(userCredentials.user.email))
        localStorage.setItem('userToken', userCredentials.user.accessToken)
        localStorage.setItem('useEmail', userCredentials.user.email)
    }
)
export const loginAccount = createAsyncThunk(
    'counter/createAccount',
    async({email,password,nav}, {dispatch}) =>{
        const userCredentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(userCredentials.user);
        // localStorage.setItem('user', JSON.stringify(userCredentials.user))
        dispatch(setToken(userCredentials.user.acessToken))
        dispatch(setEmail(userCredentials.user.email))
        localStorage.setItem('token', userCredentials.user.accessToken)
        localStorage.setItem('email', userCredentials.user.email)
        nav('/')
    }
)

export const signOutFromAccount = createAsyncThunk(
    'user/signOutFromAccount',
    async(auth, {dispatch}) => {
        await signOut(auth)
        dispatch(setToken(null))
        dispatch(setEmail(null))
        localStorage.removeItem('token')
        localStorage.removeItem('email')
    }
)

const userSlice = createSlice({
    name: 'User-slice',
    initialState: {
        email: localStorage.getItem('email'),
        password: localStorage.getItem('token'),
    },
    reducers:{
        setToken(state, actions) {
            state.token = actions.payload
        },
        setEmail(state, actions) {
            state.email = actions.payload
        },
        
    }
   
})



export const { setToken, setEmail } = userSlice.actions

export default userSlice.reducer



