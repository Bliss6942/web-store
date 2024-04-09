import s from './Header.module.css';
import {NavLink, Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setToken, signOutFromAccount } from '../../slices/userSlice';

const Header = () => {

    const { token } = useSelector(state => state.userSlice)
    const dispatch = useDispatch()
    const onHandleOut = () =>{
        dispatch(signOutFromAccount())
        setToken(null)
    }
    
    
    return (
        <>
        
        <header>
            <div className={s.header__title}>
                <h1>IT-Academy</h1>
            </div>
            <div className={s.header_nav}>
                <div className={s.button}><NavLink style={{color: 'white'}} to={'/basket'}>Корзина</NavLink></div>
                {/* {token && <NavLink className={s.link} to='/korthina'>Корзина</NavLink>}
                {!token ? <NavLink className={s.link_vhod} to='/login'>Войти</NavLink> : <Link to='/' onClick={onHandleOut} className={s.link_out}>Выйти</Link>}                 */}
                <div className={s.button}><NavLink style={{color: 'white'}} to={'/'}>Главная</NavLink></div>
                {!token ? <div className={s.button}><NavLink style={{color: 'white'}} to={'/login'}>Войти</NavLink></div> : <div className={s.out_button}><NavLink style={{color: 'white'}} to={'/'} onClick={onHandleOut}>Выйти</NavLink></div>}
                
            </div>
        </header>
    
        </>
)}

export default Header;