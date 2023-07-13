import {MdClose} from 'react-icons/md';
import imgcart from '../../../assets/products/earbuds-prod-1.webp';
import "./CartItem.scss";
import { useContext } from 'react';
import { Context } from '../../../utils/context';
import { BASE_URL } from '../../../utils/api';

const CartItem = () => {
    const {cartItems, handleCartProductQuantity, handleRemoveFromCart} = useContext(Context);
    return <div className='cart-products'>
        {cartItems?.map((item)=>(
            <div className='cart-product' key={item.id}>
            <div className='img-container'>
            <img src={BASE_URL + item?.attributes?.img?.data[0]?.attributes?.url} alt=""/>
            </div>
            <div className='produt-details'>
                <div className='name'>{item.attributes.title}</div>
                <MdClose className='close-btn' onClick = {()=>handleRemoveFromCart(item)}/>
                <div className="quantity-bbtn" >
                            <span onClick={()=>handleCartProductQuantity('dec', item)}>-</span>
                            <span>{item.attributes.quantity}</span>
                            <span onClick={()=>handleCartProductQuantity('inc', item)}>+</span>
                </div>
                <div className='text'>
                             <span>{item.attributes.quantity}</span>
                            <span>*</span>
                            <span className="heighlight">&#8377;{item.attributes.price * item.attributes.quantity}</span>

                </div>
            </div>
        </div>

        ))}
       
    </div>;
};

export default CartItem;
