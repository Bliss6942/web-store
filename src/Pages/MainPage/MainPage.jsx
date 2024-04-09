import s from './MainPage.module.css';
import { addProduct } from '../../slices/counterSlice';
import { useDispatch, useSelector } from 'react-redux'
import Admin from '../AdminPage/Admin';



const MainPage = () => {
    const admin = false

    const store = useSelector((store) => store.counterSlice)

    const dispatch = useDispatch()

    const add = (item) => {
        dispatch(addProduct(item))
    }

    

    if(admin){
        return <Admin/>
    }else{
        
        return(
            <>
            <div className={s.title}>
                <h1>Каталог товаров</h1>
            </div>
    
            <div className={s.width}>
                <div className={s.grid}> 
                {store.data.map((item, index) => 
                    <div className={s.grid_item} key={index}>
                        <div style={{width: 'auto', height: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><img  src={item.image} alt="Error" /></div>
                        <h2 >{item.title}</h2>
                        <p>Цена: {item.price}</p>
                        <button style={{padding: '10px 100px'}} onClick={() => add(item)} >В корзину</button>
                    </div>
                )}
                </div>
            </div>
            </>
        )
    }



}

export default MainPage;