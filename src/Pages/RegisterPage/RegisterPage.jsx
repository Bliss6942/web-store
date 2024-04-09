import { useState } from 'react'
import s from './RegisterPage.module.css'
import { createAccount } from '../../slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom"

const RegisterPage = () => {
  const dispatch = useDispatch()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [secpassword, setSecPassword] = useState('')
  const [errPassword, setErrPassword] = useState(false)
  const [error, setError] = useState(false)
  const { token } = useSelector(state => state.userSlice)
  const nav = useNavigate()


  const onHandleRegister = () => {
    if(email == '' || password == '' || secpassword == ''){
      setError(true)
    }else{
      if(password !== secpassword){
        setErrPassword(true)
      }else{
        setError(false)
        setErrPassword(false)

        const user = {email, password}
        dispatch(createAccount(user))
        token && nav('/basket')
      }

    }
  }
  

  return (
    <>
        <div className={s.main}>
            <div className={s.login_wrapper}>
                <div className={s.title}>
                    <h1>Регистрация аккаунта</h1>
                </div>
                <div className={s.menu_wrapper}>
                  <div>
                    <h2>Почта</h2>
                    <input type="text"  placeholder='Введите почту' onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                  <div>
                    <h2>Введите пароль</h2>
                    <input type="password" placeholder='Введите ваш будущий пароль' onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                  <div>
                    <h2>Повторите пароль</h2>
                    <input type="password" placeholder='Введите пароль еще раз' onChange={(e) => setSecPassword(e.target.value)}/>
                    <p className={s.error}>{errPassword ? 'Пароли должны совпадать' : false}</p>
                  </div>
                </div>
                <div className={s.button_wrapper}>
                    <button onClick={onHandleRegister}>Зарегистрироваться</button>
                    <p className={s.error}>{error ? 'Заполните все бланки' : false}</p>
                </div>
                <div>
                  <Link to={'/login'}>Уже есть аккаунт? Ввойти</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default RegisterPage