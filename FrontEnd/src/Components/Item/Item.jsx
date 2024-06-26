import React from "react";
import { Link } from "react-router-dom";
import './Item.css'

const Item = (props) => {
    return (
        <div className="item">
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
            <div className="item-details">
                <div>{props.name}</div>
                <div className="item-prices">
                    <div className="item-price-new">
                       ₹{props.new_price}
                    </div>
                    <div className="item-price-old">
                       ₹{props.old_price}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item