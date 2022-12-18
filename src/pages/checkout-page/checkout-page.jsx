import emailjs from "emailjs-com";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Snackbar from "../../components/snackbar/snackbar";
import "./checkout-page.css";

const CheckoutPage = () => {
  const incart = useSelector((state) => state.cart.cart);
  React.useEffect(() => {
    document.title = `Оформление заказа`;
  }, []);
  const [snackbar, setSnackbar] = useState(false);
  const [policy, setPolicy] = useState(false);
  const [snackbarText, setSnackbarText] = useState("");
  const SERVICE_ID = "service_07yzqro";
  const TEMPLATE_ID = "template_iy74582";
  const USER_ID = "DSFmx66MwidL4OS8S";

  let form = useRef();
  const policyToggle = () => {
    if (policy) {
      setPolicy(false);
    } else {
      setPolicy(true);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
      (result) => {
        setSnackbarText("Отправлен!!!");
        setSnackbar(true);
        setTimeout(() => {
          setSnackbar(false);
        }, 2000);
        form.current.reset();
      },
      (error) => {
        setSnackbarText("Ошибка! Повторите заново!");
        setSnackbar(true);
        setTimeout(() => {
          setSnackbar(false);
        }, 2000);
        form.current.reset();
      }
    );
  };
  return (
    <>
      <div className="checkout_wrapper">
        <div className="checkout_title">
          <h1>Оформление заказа</h1>
        </div>
        <div className="checkout_page">
          <div className="chechout_items">
            {incart.map((item) => (
              <div className="checkout_item" key={item.id}>
                <img src={item.cart_img} alt={item.cart_img} />
                <div className="checkout_item_descrip">
                  <h3 className="ch_item_name">
                    {item.type} - {item.name}
                  </h3>

                  <p className="ch_count">Количество - {item.count} штук</p>

                  <h4 className="ch_total_price">
                    Цена за этот товар - {item.count * item.price} ₽
                  </h4>
                </div>
              </div>
            ))}
          </div>
          <div className="checkout_form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="name_input">
                <input
                  placeholder="Ваше имя"
                  required
                  name="name"
                  type="text"
                />
              </div>
              <div className="phone_input">
                <input name="phone_number" required placeholder="Ваш телефон" />
              </div>
              <div className="email_input">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Ваш e-mail"
                />
              </div>
              <div className="product_name_input">
                <textarea
                  placeholder="Название товара"
                  required
                  name="product_name"
                  defaultValue={incart.map(
                    (el) => `${"  "} ${el.type} - ${el.name} ${el.count} штук`
                  )}
                />
              </div>

              <div className="adress_input">
                <textarea
                  type="text"
                  name="adress"
                  required
                  placeholder="Ваш адресс"
                />
              </div>
              <div className="contacts_policy_area">
                <input
                  type="checkbox"
                  name="policy"
                  id="policy"
                  onClick={policyToggle}
                />
                <p>
                  Даю согласия на обработку моих данных в рамках
                  <NavLink to="/policy"> политики конфиденциальности</NavLink>
                </p>
              </div>

              <input
                className="submit_btn"
                type="submit"
                value="Оформить заказ"
                disabled={!policy}
              />
            </form>
          </div>
        </div>
      </div>
      {!snackbar || <Snackbar props={snackbarText} />}
      <Footer />
    </>
  );
};

export default CheckoutPage;
