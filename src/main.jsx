import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux' 
import { store } from './store/store.js'
import { ChakraProvider } from '@chakra-ui/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>

    </Provider>
    </ChakraProvider>
  </React.StrictMode>
)
