import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, []);
  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <AliceCarousel
            className="full-box"
            autoPlay="true"
            autoPlayStrategy="none"
            autoPlayInterval="2500"
            infinite="true"
          >
            <img
              src="images/Slider_02.jpg"
              className="sliderimg"
              alt="Slider_Image"
            />
            <div
              class="full-slider-box f-slide-1"
              style={{ backgroundImage: `url("../images/Slider_01.jpg")` }}
            >
              <div class="slider-text-container">
                <div class="f-slider-text">
                  <span>Limited Offer</span>
                  <strong>
                    30% OFF
                    <br /> with <font>Promo Code</font>
                  </strong>
                  <a
                    href="/product/613fdc0f6a0a13f93dcb6d60"
                    class="f-slider-btn"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <img
              src="images/Slider_03.jpg"
              className="sliderimg"
              alt="Slider_Image"
            />
          </AliceCarousel>

          <div className="feature-heading">
            <h2>Begin your Fashion journey!</h2>
          </div>

          <ul id="autoWidth" className="cs-hidden">
            <li className="item">
              <div className="feature-box">
                <a href="#">
                  <img src="images/feature_1.jpg" alt="" />
                </a>
              </div>
              <span>###</span>
            </li>

            <li className="item">
              <div className="feature-box">
                <a href="#">
                  <img src="images/feature_2.jpg" alt="" />
                </a>
              </div>
              <span>###</span>
            </li>

            <li className="item">
              <div className="feature-box">
                <a href="#">
                  <img src="images/feature_3.jpg" alt="" />
                </a>
              </div>
              <span>###</span>
            </li>

            <li className="item">
              <div className="feature-box">
                <a href="#">
                  <img src="images/feature_4.jpg" alt="" />
                </a>
              </div>
              <span>###</span>
            </li>

            <li className="item">
              <div className="feature-box">
                <a href="#">
                  <img src="images/feature_5.jpg" alt="" />
                </a>
              </div>
              <span>###</span>
            </li>
          </ul>

          <section className="new-arrival" id="new-jump">
            <div className="arrival-heading">
              <strong>New Arrival</strong>
              <p>Defining Beauty, Defining You</p>
            </div>
            <div className="product-container">
              {products.map((product) => (
                <Product key={product._id} product={product}></Product>
              ))}
            </div>
          </section>
          <section className="sale">
            <div className="sale-box">
              <img src="images/sale-1.jpg" />
              <a href="#">
                <div className="sale-text">
                  <strong>###</strong>
                  <span>Sale OFF 20%</span>
                </div>
              </a>
            </div>
            <div className="sale-box">
              <img src="images/sale-2.jpg" />
              <a href="#">
                <div className="sale-text">
                  <strong>###</strong>
                  <span>Sale OFF 20%</span>
                </div>
              </a>
            </div>
            <div className="sale-box">
              <img src="images/sale-3.jpg" />
              <a href="#">
                <div className="sale-text">
                  <strong>###</strong>
                  <span>Sale OFF 20%</span>
                </div>
              </a>
            </div>
          </section>

          <section className="review">
            <div className="review-1">
              <h2>
                <a name="review-jump">Shop with Trust</a>
              </h2>
              <p>
                I don't usually review stuff on here but it's been about a week
                of using @niskin products and they made a huge difference in my
                skin. I was a bit skeptical at first but wow I was wrong.
                <div className="rate">
                  <input id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </p>
            </div>
            <div className="review-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
                <div className="rate">
                  <input id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </p>
            </div>
            <div className="review-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
                <div className="rate">
                  <input id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </p>
            </div>
            <div className="review-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
                <div className="rate">
                  <input id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </p>
            </div>
            <div className="review-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
                <div className="rate">
                  <input id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </p>
            </div>
            <div className="review-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
                <div className="rate">
                  <input id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </p>
            </div>
            <div className="review-7">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
                <div className="rate">
                  <input id="star4" name="rate" value="4" />
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <input id="star3" name="rate" value="3" />
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <input id="star2" name="rate" value="2" />
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <input id="star1" name="rate" value="1" />
                  <label for="star1" title="text">
                    1 star
                  </label>
                </div>
              </p>
            </div>
          </section>

          <div
            className="banner-box"
            style={{ backgroundImage: `url("../images/Slider_04.jpg")` }}
          >
            <div className="banner-text-container">
              <div className="banner-text">
                <span>Limited Offer</span>
                <strong>
                  30% OFF
                  <br /> with <font>Promo Code</font>
                </strong>
                <a href="/product/4" className="banner-btn">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
