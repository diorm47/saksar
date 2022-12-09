import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSound from "use-sound";
import playing_icon from "../../assets/icons/playing_icon.png";
import stop_icon from "../../assets/icons/stop_icon.png";
import Carousel from "../../components/carousel/carousel";
import Footer from "../../components/footer/footer";
import Snackbar from "../../components/snackbar/snackbar";
import { addToCart } from "../../redux/cart-reducer";
import "./about-item.css";

function AboutItem() {
  const item = JSON.parse(localStorage.getItem("currentItem"));
  const [playing, setPlay] = useState(true);
  const [stoping, setStop] = useState(false);
  const [play, { stop }] = useSound(item.music, { volume: 1 });

  React.useEffect(() => {
    document.title = `${item.type} - ${item.name}`;
  }, []);
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
  React.useEffect(() => {
    stop();
  }, [stop]);
  React.useEffect(() => {
    play();
  }, [play]);
  const stopMusic = () => {
    setPlay(false);
    setStop(true);
    stop();
  };

  const playMusic = () => {
    setPlay(true);
    setStop(false);
    play();
  };

  return (
    <>
      <div className="about_item_wrapper">
        <div className="about_item_title">
          <h1>
            {item.type} - {item.name}
          </h1>
        </div>
        <div className="about_item_content">
          <div className="about_left_part">
            <div className="about_item_img">
              <img src={item.about_img} alt={item.name} />
            </div>
            <div className="music_play_stop">
              {!playing || (
                <div className="play_music" onClick={stopMusic}>
                  <img src={playing_icon} alt="playing_icon" />
                </div>
              )}
              {!stoping || (
                <div className="stop_music" onClick={playMusic}>
                  <img src={stop_icon} alt="stop_icon" />
                </div>
              )}
            </div>
          </div>
          <div className="about_right_block">
            <div className="about_item_type">
              <p>{item.type}</p>
            </div>
            <div className="about_item_name">
              <h2>{item.name}</h2>
            </div>
            <div className="about_item_description">
              {!item.top_notes || (
                <div className="diffuzor_notes">
                  <div className="top_note">
                    <p>
                      <span>Верхние ноты: </span> <br /> {item.top_notes}
                    </p>
                  </div>
                  <div className="middle_notes">
                    <p>
                      <span>Средние ноты: </span> <br /> {item.middle_notes}
                    </p>
                  </div>
                  <div className="middle_notes">
                    <p>
                      <span>Нижние ноты: </span> <br /> {item.bottom_notes}
                    </p>
                  </div>
                </div>
              )}
              {!item.compound || (
                <div className="compound">
                  <p>
                    <span>Состав: </span> <br />
                    {item.compound}
                  </p>
                </div>
              )}
              {!item.mode_of_application || (
                <div className="mode_of_application">
                  <p>
                    <span>Способ применения: </span>
                    <br />
                    {item.mode_of_application}
                  </p>
                </div>
              )}

              {!item.contraindications || (
                <div className="contraindications">
                  <p>
                    <span>Побочные эффекты: </span> <br />
                    {item.contraindications}
                  </p>
                </div>
              )}
            </div>
            <div className="about_item_cost">
              <p>{item.price} Р</p>
            </div>
            <div className="about_add_to_cart">
              <button onClick={() => addToCartt(item)}>
                {inCart.some((data) => data.id === item.id)
                  ? "В корзине"
                  : "В корзину"}
              </button>
            </div>
          </div>
        </div>
        <div className="about_item_inf">
          {!item.top_notes || (
            <div className="about_diffusors">
              <p>
                Я создавала такие аромадиффузоры, чтобы в твоем пространстве
                были слышны ненавязчивые и приятные ароматы. Каждый диффузор
                уникален и ноты раскрываются так интересно, что трудно будет
                уловить определенный состав. Как же выбрать свой номер аромата?
                Я предлагаю тебе в первый свой заказ доверится интуиции и
                выбрать свое счастливое число от 1 до 9.
              </p>
            </div>
          )}
        </div>
        <div className="carousel_block">
          <div className="carousel_title">
            <h3>Вся продукция</h3>
          </div>
          <Carousel />
        </div>
      </div>
      <Footer />
      {!snackbar || <Snackbar props="Товар добавлен в корзину" />}
    </>
  );
}

export default AboutItem;
