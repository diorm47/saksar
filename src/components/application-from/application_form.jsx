import React from "react";
import { useForm } from "react-hook-form";
import "./application_form.css";

function ApplicationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="footer_form">
      <div className="footer_title">
        <h3>
          Если нужного товара нет в наличии, отправьте заявку на <br />
          предзаказ в этой форме
        </h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="name_input">
          <input
            placeholder="Ваше имя"
            {...register("name", { required: true })}
          />
          {errors.name && <span>Поля имя обьязятельный</span>}
        </div>
        <div className="phone_input">
          <input
            placeholder="Ваш телефон"
            {...register("phone_number", { required: true })}
          />
          {errors.phone_number && <span>Поля телефона обьязятельный</span>}
        </div>
        <div className="product_name_input">
          <input
            placeholder="Название товара"
            {...register("product_name", { required: true })}
          />
          {errors.product_name && <span>Поля товара обьязятельный</span>}
        </div>
        <div className="email_input">
          <input
            placeholder="Ваш e-mail"
            {...register("email", { required: true })}
          />
          {errors.product_name && <span>Поля e-mail обьязятельный</span>}
        </div>

        <input className="submit_btn" type="submit" value="Отправить заявку" />
      </form>
    </div>
  );
}

export default ApplicationForm;
