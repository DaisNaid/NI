import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating.js";
import { useHistory } from "react-router";

export default function Product(props){
    const {product} = props;
    const qty=1;
    let history = useHistory();

    const addToCartHandler = () => {
        history.push(`/cart/${product._id}?qty=${qty}`)
    };

    return(
        <div key={product._id} className="product-box">
            <Link to={`/product/${product._id}`}/>
            <div className="product-img">
                <Link to="#" className="add-cart">
                <i className="fas fa-shopping-cart" onClick={addToCartHandler}></i>
                </Link>
                <img src={product.image} alt={product.name}/>
            </div>
            <Rating rating={product.rating}/>
            <div className="product-details">
                <Link to={`/product/${product._id}`} className="p-name">{product.name}</Link>
                <span className="p-price">£{product.price}</span>
            </div>
        </div>
    )
}