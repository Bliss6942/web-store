import './App.css'
import {Route, Routes} from 'react-router-dom' 
import Header from './Components/Header/Header.jsx'
import MainPage from './Pages/MainPage/MainPage.jsx'
import Basket from './Pages/Basket/Basket.jsx'
import RegisterPage from './Pages/RegisterPage/RegisterPage.jsx'
import LoginPage from './Pages/LoginPage/LoginPage.jsx'


function App() {
  


  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    
    </>
  )
}

export default App;