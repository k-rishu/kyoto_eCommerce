import React, { useState } from "react";
import './Navbar.css';
import cart_icon from '../Assets/cart_icon.png';
import logo_icon from '../Assets/logo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menu, setMenu] = useState("shop");

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo_icon} alt="Logo"/>
                <p>Kyoto</p>
            </div>
            <ul className="nav-menu">
                <li key="shop" onClick={() => { setMenu("shop") }}>
                    <Link to='/'>Shop</Link>
                    {menu === "shop" && <hr/>}
                </li>
                <li key="kurtis" onClick={() => { setMenu("kurtis") }}>
                    <Link to='/products'>Kurtis</Link>
                    {menu === "kurtis" && <hr/>}
                </li>
                <li key="saris" onClick={() => { setMenu("saris") }}>
                    <Link to='/products'>Saris</Link>
                    {menu === "saris" && <hr/>}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="Cart Icon"/></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar;
