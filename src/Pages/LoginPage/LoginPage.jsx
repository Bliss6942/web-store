import s from './LoginPage.module.css'
import { useDispatch } from 'react-redux'
import { loginAccount } from '../../slices/userSlice'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"



const LoginPage = () => {

    const dispatch = useDispatch()
    const [error, setError] = useState(false)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const nav = useNavigate()

    const onHandleLogin = () => {
        if(email == '' || password == ''){
          setError(true)
        }else{
          const user = {email,password,nav}
          dispatch(loginAccount(user))
          setError(false)
        }
      }


  return (
    <>
        <div className={s.main}>
            <div className={s.login_wrapper}>
                <div className={s.title}>
                    <h1>Вход в аккаунт</h1>
                </div>
                <div className={s.menu_wrapper}>
                  <div>
                    <h2>Почта</h2>
                    <input type="text"  placeholder='Введите почту' onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                  <div>
                    <h2>Введите пароль</h2>
                    <input type="password" placeholder='Введите пароль' onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                </div>
                
                <div className={s.button_wrapper}>
                    <Link onClick={onHandleLogin}>Войти</Link>
                    <p className={s.error}>{error ? 'Заполните все бланки' : false}</p>
                </div>
                <Link to={'/register'}>Если нет аккаунта - регистрация</Link>
            </div>
        </div>
    </>
  )
}

export default LoginPage