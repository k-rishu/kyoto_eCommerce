import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

function CartItems() {
    const {all_product, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext)
  return (
    <div className="cartitems">
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((i)=>{
            if(cartItems[i.id] > 0){
               return <div>
                    <div className="cartitems-format cartitems-format-main">
                        <img src={i.image} alt="" className="carticon-product-icon" />
                        <p>{i.name}</p>
                        <p>${i.new_price}</p>
                        <button className="cartitems-quantity">{cartItems[i.id]}</button>
                        <p>{i.new_price*cartItems[i.id]}</p>
                        <img className='carticons-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(i.id)}} alt="" />
                    </div>
                </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Charge</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>Proceed To Checkout</button>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a promocode Apply Here!</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='Promo Code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems