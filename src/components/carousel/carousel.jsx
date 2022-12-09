import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../components/card/card.css";
import "./carousel.css";

import { useState } from "react";

import plusIcon from "../../assets/icons/add_to_cart_icon.png";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cart-reducer";
import { items } from "../../redux/data";
import Snackbar from "../snackbar/snackbar";

function Carousel() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inCart = useSelector((state) => state.cart.cart);
  const [snackbar, setSnackbar] = useState(false);

  const addToCartt = (data) => {
    const isItemInCart = inCart.some((item) => item.id === data.id);
    if (!isItemInCart) {
      dispatch(addToCart(data));
      setSnackbar(true);
      setTimeout(() => {
        setSnackbar(false);
      }, 2000);
    }
  };
  const aboutItem = (item) => {
    if (!localStorage.getItem("currentItem")) {
      localStorage.setItem("currentItem", JSON.stringify(item));
    } else localStorage.setItem("currentItem", JSON.stringify(item));

    navigate(`/about-item/${item.name}`);
    window.location.reload();
  };
  const settings = {
    dots: false,

    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {items.map((item) => (
          <div className="card_item" key={item.id}>
            <div className="cart_image">
              <img src={item.cart_img} alt={item.cart_img} />
            </div>
            <div className="cart_description">
              <p>{item.type}</p>
            </div>
            <div className="cart_product_name" onClick={() => aboutItem(item)}>
              <p>{item.name}</p>
            </div>
            <div className="cart_product_price">
              <p>{item.price} Р</p>
            </div>
            <div
              className={
                inCart.some((data) => data.id === item.id)
                  ? "add_del_btn added_to_cart"
                  : "add_del_btn"
              }
              onClick={() => addToCartt(item)}
            >
              <img src={plusIcon} alt="plus icon" />
            </div>
          </div>
        ))}
      </Slider>
      {!snackbar || <Snackbar props="Товар добавлен в корзину" />}
    </>
  );
}

export default Carousel;
