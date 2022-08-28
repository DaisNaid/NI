import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProduct } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Rating from "../components/Rating";

export default function ProductScreen(props){
    const dispatch = useDispatch();
    const productID = props.match.params.id;
    const [qty, setQty] = useState([]);
    const productDetails = useSelector(state => state.productDetails);
    const {loading, error, product} = productDetails;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e){
        if (Number(e.target.value) > product.countInStock) {
            setErrorMessage('Exceeds amount of product available!\nReloading Page...');
            setTimeout(() => {
                window.location.reload(true)
            }, 2500);
        }
        else{
            setQty(Number(e.target.value))
        }
    }

    useEffect(() => {
        dispatch(detailsProduct(productID));
    }, [dispatch, productID]);
    const addToCartHandler = () => {
        props.history.push(`/cart/${productID}?qty=${qty}`); 
    };
    return(
        <div>
        {loading? (<LoadingBox/>
        ) :error? (
        <MessageBox variant="danger">{error}</MessageBox>
        ) : (
            <div>
            <Link to="/">Back to Products</Link>
            <div className="row top">
                <div className="col-2">
                    <img className="large" src={product.image} alt={product.name}/>
                </div>
                <div className="col-1">
                    <ul>
                        <li><h1>{product.name}</h1></li>
                        <li><Rating rating= {product.rating}/></li>
                        <li>Price: £{product.price}</li>
                        <li>Description:<p>{product.description}</p></li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price:</div>
                                    <div className="price">£{product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status:</div>
                                    <div>
                                        {product.countInStock>0? (<span className="success">In Stock</span>):(<span className="danger">Unavailable at the moment</span>)}
                                    </div>
                                </div>
                            </li>
                            {product.countInStock >= 1 && (
                                    <>
                                        <li>
                                            <div className="row">
                                                <div>Qty</div>
                                                <div className="amount">
                                                    <input name="qty" placeholder="Amount" onChange={handleChange}/>                                                  
                                                </div>
                                            </div>
                                            <div>
                                                {errorMessage && (<p className="error" style={{color: "red"}}>{errorMessage}</p>)}
                                            </div>
                                        </li>
                                        <li>
                                            <button onClick={addToCartHandler} className="primary block">Add to Cart</button>
                                        </li>
                                    </>   
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )}
        </div>
    )
}