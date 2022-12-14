import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useSound from "use-sound";
import playing_icon from "../../assets/icons/playing_icon.png";
import stop_icon from "../../assets/icons/stop_icon.png";
import Carousel from "../../components/carousel/carousel";
import Footer from "../../components/footer/footer";
import Snackbar from "../../components/snackbar/snackbar";
import { addToCart } from "../../redux/cart-reducer";
import { items } from "../../redux/data";
import "./about-item.css";

function AboutItem() {
  const params = useParams();
  const item = items.find((i) => i.slug == params.name);
  const [playing, setPlay] = useState(true);
  const [stoping, setStop] = useState(false);
  const [play, { stop }] = useSound(item.music, { volume: 1 });
  const dispatch = useDispatch();
  const inCart = useSelector((state) => state.cart.cart);

  React.useEffect(() => {
    document.title = `${item.type} - ${item.name}`;
  }, []);

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
  if (document.readyState !== "loading") {
    us_clickInterception();
  } else {
    document.addEventListener("DOMContentLoaded", us_clickInterception);
  }

  function us_clickInterception() {
    var links = document.querySelectorAll("a");
    Array.prototype.forEach.call(links, function (link) {
      link.addEventListener("click", function () {
        stop();
      });
    });
  }

  return (
    <>
      <div className="about_item_wrapper">
        <div className="about_item_content">
          <div className="about_left_part">
            <div className="about_item_img">
              <img src={item.about_img} alt={item.name} />
            </div>
            {!item.music || (
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
            )}
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
                      <span>?????????????? ????????: </span> <br /> {item.top_notes}
                    </p>
                  </div>
                  <div className="middle_notes">
                    <p>
                      <span>?????????????? ????????: </span> <br /> {item.middle_notes}
                    </p>
                  </div>
                  <div className="middle_notes">
                    <p>
                      <span>???????????? ????????: </span> <br /> {item.bottom_notes}
                    </p>
                  </div>
                </div>
              )}
              {!item.compound || (
                <div className="compound">
                  <p>
                    <span>????????????: </span> <br />
                    {item.compound}
                  </p>
                </div>
              )}
              {!item.compound_items || (
                <div className="compound_items">
                  <span>????????????: </span> <br />
                  {item.compound_items.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              )}
              {!item.properties || (
                <div className="properties">
                  <p>
                    <span>????????????????: </span> <br />
                    {item.properties}
                  </p>
                </div>
              )}
              {!item.mode_of_application || (
                <div className="mode_of_application">
                  <p>
                    <span>???????????? ????????????????????: </span>
                    <br />
                    {item.mode_of_application}
                  </p>
                </div>
              )}
              {!item.effect || (
                <div className="effect">
                  <p>
                    <span>???????????? ???? ???????????????????? : </span> <br />
                    {item.effect}
                  </p>
                </div>
              )}

              {!item.contraindications || (
                <div className="contraindications">
                  <p>
                    <span>???????????????? ??????????????: </span> <br />
                    {item.contraindications}
                  </p>
                </div>
              )}
            </div>
            <div className="about_item_cost">
              <p>{new Intl.NumberFormat("ru-RU").format(item.price)} ???</p>
            </div>
            <div className="about_add_to_cart">
              <button onClick={() => addToCartt(item)}>
                {inCart.some((data) => data.id === item.id)
                  ? "?? ??????????????"
                  : "?? ??????????????"}
              </button>
            </div>
          </div>
        </div>

        <div className="carousel_block">
          <div className="carousel_title">
            <h3>?????? ??????????????????</h3>
          </div>
          <Carousel />
        </div>
      </div>
      <Footer />
      {!snackbar || <Snackbar props="?????????? ???????????????? ?? ??????????????" />}
    </>
  );
}

export default AboutItem;
