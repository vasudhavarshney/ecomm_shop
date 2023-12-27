// Import necessary styles for your component
import { React,useState} from 'react'
import './cart.css'; // Create a separate CSS file
import IconCart from './shopping-cart-icon-29083.png'

const Cart = () => {
  // const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(1);

  // const addItemToCart = (item) => {
  //   const updatedCart = [...cartItems, item];
  //   setCartItems(updatedCart);
  //   setItemCount(itemCount + 1);
  // };

  // const removeItemFromCart = (itemIndex) => {
  //   const updatedCart = [...cartItems];
  //   updatedCart.splice(itemIndex, 1);
  //   setCartItems(updatedCart);
  //   setItemCount(itemCount - 1);
  // };

  return (
    <div className="shopping-cart-container">
      <div className='iconContainer'>
        <img src={IconCart}  alt="image not found"/>
        <p className={`item-count ${itemCount > 0 ? 'show' : 'hide'}`}>{itemCount}</p>
      </div>
    </div>
  );
};

export default Cart;
