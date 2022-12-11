import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Snackbar from "../snackbar/snackbar";
import "./application_form.css";

function ApplicationForm() {
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
        form.current.reset();
      }
    );
  };

  return (
    <>
      <div className="footer_form">
        <div className="footer_title">
          <h3>
            Если нужного товара нет в наличии, отправьте заявку на <br />
            предзаказ в этой форме
          </h3>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className="name_input">
            <input placeholder="Ваше имя" required name="name" type="text" />
          </div>
          <div className="phone_input">
            <input name="phone_number" required placeholder="Ваш телефон" />
          </div>
          <div className="product_name_input">
            <input placeholder="Название товара" required name="product_name" />
          </div>
          <div className="email_input">
            <input
              type="email"
              name="email"
              required
              placeholder="Ваш e-mail"
            />
          </div>

          <input
            className="submit_btn"
            type="submit"
            value="Отправить заявку"
          />
        </form>
      </div>
      {!snackbar || <Snackbar props={snackbarText} />}
    </>
  );
}

export default ApplicationForm;
