import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../components/card/card.css";
import Modal from "../modal/modal";
import "./carousel.css";

import { useState } from "react";
import { ReactComponent as LeftArrow } from "../../assets/icons/left_arrow.svg";
import { ReactComponent as RightArrow } from "../../assets/icons/right_arrow.svg";

import plusIcon from "../../assets/icons/add_to_cart_icon.png";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cart-reducer";
import { items } from "../../redux/data";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <RightArrow />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <LeftArrow />
    </div>
  );
}

function Carousel() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inCart = useSelector((state) => state.cart.cart);
  const [modal, setModal] = useState(false);
  const [modalItem, setModalItem] = useState({});

  const addToCartt = (data) => {
    const isItemInCart = inCart.some((item) => item.id === data.id);
    if (!isItemInCart) {
      dispatch(addToCart(data));
      setModal(true);
      setModalItem(data);
    }
  };
  const aboutItem = (item) => {
    navigate(`/about-item/${item.slug}`);
    window.location.reload();
  };
  const settings = {
    dots: false,

    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
      {!modal || <Modal setModal={setModal} item={modalItem} />}
      <Slider {...settings}>
        {items.map((item) => (
          <div className="card_item" key={item.id}>
            <div className="cart_image" onClick={() => aboutItem(item)}>
              <img src={item.cart_img} alt={item.cart_img} />
            </div>
            <div className="cart_description" onClick={() => aboutItem(item)}>
              <p>{item.type}</p>
            </div>
            <div className="cart_product_name" onClick={() => aboutItem(item)}>
              <p>{item.name}</p>
            </div>
            <div className="cart_product_price" onClick={() => aboutItem(item)}>
              <p>{new Intl.NumberFormat("ru-RU").format(item.price)} ₽</p>
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
    </>
  );
}

export default Carousel;
