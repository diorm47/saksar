import emailjs from "emailjs-com";
import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import vk_icon from "../../assets/icons/vk_icon.png";
import Footer from "../../components/footer/footer";
import Snackbar from "../../components/snackbar/snackbar";
import "./contacts-page.css";

function ContactsPage() {
  React.useEffect(() => {
    document.title = `Наши контакты`;
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
        console.log(result.text);
        setSnackbarText("Отправлен!!!");
        setSnackbar(true);
        setTimeout(() => {
          setSnackbar(false);
        }, 2000);
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        setSnackbarText("Ошибка! Повторите заново!");
        setSnackbar(true);
        setTimeout(() => {
          setSnackbar(false);
        }, 2000);
      }
    );
  };

  return (
    <div className="contacts_page">
      <div className="contacts_title">
        <h1>Контакты</h1>
      </div>
      <div className="contacts_form_wrapper">
        <h1>Оставьте заявку</h1>
        <p>Заполните поля формы, и мы свяжемся с вами</p>
        <div className="contacts_form">
          <form ref={form} onSubmit={sendEmail}>
            <div className="contacts_email_input">
              <input placeholder="e-mail" type="email" name="email" required />
            </div>
            <div className="contacts_name_input">
              <input placeholder="имя" required name="name" type="text" />
            </div>
            <div className="contacts_phone_input">
              <input placeholder="телефон" name="phone_number" required />
            </div>
            <div className="contacts_comment_input">
              <input placeholder="комментарии" name="comments" required />
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
                <NavLink to="/policy"> политики понфиденциальности</NavLink>
              </p>
            </div>

            <div className="contacts_submit_btn">
              <input
                className="submit_btn"
                type="submit"
                value="Отправить заявку"
                disabled={!policy}
              />
            </div>
          </form>
          <div className="personal_inf">
            <p>
              Нажимая на кнопку, вы даете согласие на обработку персональных
              данных и соглашаетесь c политикой конфиденциальности
            </p>
          </div>
        </div>
      </div>
      <div className="contacts_cart">
        <div className="contacts_block">
          <div className="contacts_block_title">
            <h1>Контакты</h1>
          </div>
          <p>
            <a href="tel:+79099772280">+7 909 977 22 80 </a> <br />
            <a
              className="contact_item"
              href="mailto:saksar_aroma@mail.ru"
              target="_blank"
              rel="noreferrer"
            >
              saksar_aroma@mail.ru
            </a>
            <br />
            Россия, Москва, Ленинградский проспект д.47 <br /> стр.3, подъезд №3
            БЦ «Авион» (метро Аэропорт)
          </p>
          <div className="contacts_icons">
            <img src={vk_icon} alt="vk_icon" />
          </div>
        </div>
      </div>
      <div className="company_documents">
        <p>
          ИП Какорина Венера Салаватовна <br />
          ИНН: 027501564500 <br />
          ОГРНИП: 322508100341551
        </p>
      </div>
      <Footer />
      {!snackbar || <Snackbar props={snackbarText} />}
    </div>
  );
}

export default ContactsPage;
