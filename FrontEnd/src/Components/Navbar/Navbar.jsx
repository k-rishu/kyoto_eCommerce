import React, { useContext, useRef, useState } from "react";
import './Navbar.css';
import cart_icon from '../Assets/cart_icon.png';
import logo_icon from '../Assets/logo.png';
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import dropdown_icon from "../Assets/dropdown_icon.png";
const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext)
    const menuRef = useRef();

    const dropdown_togle = (e)=>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open')
    }

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo_icon} alt="Logo"/>
                <p >Kyoto</p>
            </div>
            <img className="nav-dropdown" onClick={dropdown_togle} src={dropdown_icon} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li key="shop" onClick={() => { setMenu("shop") }}>
                    <Link to='/shop'style={{textDecoration:'none'}}>Shop</Link>
                    {menu === "shop" && <hr/>}
                </li>
                <li key="kurtis" onClick={() => { setMenu("kurtis") }}>
                    <Link to='/products' style={{textDecoration:'none'}}>Kurtis</Link>
                    {menu === "kurtis" && <hr/>}
                </li>
                <li key="saris" onClick={() => { setMenu("saris") }}>
                    <Link to='/products'style={{textDecoration:'none'}}>Saris</Link>
                    {menu === "saris" && <hr/>}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="Cart Icon"/></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar;
