import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for(let index =0; index < all_product.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}



const ShopContextProvider = (props) =>{

    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (itemId)=>{
        // console.log(itemId)
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}));
        // console.log(cartItems)
    }
    const removeFromCart= (itemId)=>{
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            console.log(item)
            if(cartItems[item] > 0){
                let itemInfo = all_product.find((product)=>{
                    return product.id === Number(item)
                })
                console.log(itemInfo)
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = ()=>{
        let totalItems = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalItems += 1;
            }
        }
        return totalItems;
    }
    
    const contextValue = {addToCart,removeFromCart,cartItems,all_product,getTotalCartAmount,getTotalCartItems}
    
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider