import { useSelector } from 'react-redux';
import s from './Basket.module.css';


const Basket = () => {

    const {basketValue} = useSelector(state => state.counterSlice) 
    const user = useSelector(state => state.userSlice) 
    
    
    if(!user){
      return <div>Вы не ввошли в аккаунт</div>
    }

  return (
    <div className={s.width}>
      <div className={s.basket}>
          {basketValue.map((item, index) => 
              <div key={index} className={s.item}>
                <div className={s.item_image}>
                  <img src={item.image} alt="Not Found" />
                </div>

                <div className={s.item_info}>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <h2>{item.price} Сом</h2>
                  <button className={s.order_button}>Заказать</button>
                </div>

              </div>
          )}
        </div>
    </div>
  )
}

export default Basket;
