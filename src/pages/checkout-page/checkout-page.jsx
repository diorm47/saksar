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
  const [snackbarText, setSnackbarText] = useState("");
  const SERVICE_ID = "service_07yzqro";
  const TEMPLATE_ID = "template_iy74582";
  const USER_ID = "DSFmx66MwidL4OS8S";

  let form = useRef();

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
                    {item.type} {item.name}
                  </h3>

                  <p className="ch_count">Количество {item.count} штук</p>

                  <h4 className="ch_total_price">
                   Итого - {" "}
                    {new Intl.NumberFormat("ru-RU").format(
                      item.count * item.price
                    )}{" "}
                    ₽
                  </h4>
                </div>
              </div>
            ))}
          </div>
          <div className="checkout_form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="name_input">
                <input placeholder="ФИО" required name="name" type="text" />
              </div>
              <div className="phone_input">
                <input name="phone_number" required placeholder="ТЕЛЕФОН" />
              </div>
              <div className="email_input">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="E-MAIL"
                />
              </div>
              <div className="product_name_input">
                <textarea
                  placeholder="Название товара"
                  required
                  name="product_name"
                  defaultValue={incart.map(
                    (el) => `${"  "} ${el.type} ${el.name} ${el.count} штук`
                  )}
                />
              </div>
              <div className="del_method_check">
                <p>предпочитаемый способ доставки</p>
                <select name="delivery_method" id="delivery_method">
                  <option value="pickup">самовывоз</option>
                  <option value="courier">курьер</option>
                  <option value="boxberry">boxberry</option>
                  <option value="sdek">сдэк</option>
                  <option value="russian_post">почта россии</option>
                </select>
              </div>

              <div className="adress_input">
                <textarea
                  type="text"
                  name="adress"
                  required
                  placeholder="АДРЕС ДОСТАВКИ"
                />
              </div>
              <div className="contacts_comment_input">
                <textarea
                  placeholder="КОММЕНТАРИЙ К ЗАКАЗУ"
                  name="comments"
                  required
                />
              </div>
              <div className="polices_check">
                <p>
                  Отправляя форму, вы даете свое согласие на обработку
                  <NavLink to="/policy"> персональных данных</NavLink>
                </p>
              </div>

              <input
                className="submit_btn"
                type="submit"
                value="Оформить заказ"
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
