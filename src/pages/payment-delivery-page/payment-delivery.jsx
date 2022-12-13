import React from "react";
import "./payment-delivery.css";
import Footer from "../../components/footer/footer";

function PaymentDelivery() {
  React.useEffect(() => {
    document.title = `Оплата и доставка`;
  }, []);
  return (
    <>
      <div className="payment_delivery">
        <div className="payment_delivery_wrapper">
          <div className="payment_delivery_title">
            <h1>Доставка и оплата</h1>
          </div>
          <div className="payment_section">
            <div className="payment_section_title">
              <h2>Оплата</h2>
            </div>
            <div className="paymetn_descriptions">
              <h3>БАНКОВСКОЙ КАРТОЙ</h3>
              <p>
                Собрав заказ, выбрав город доставки и пункт выдачи, вы можете
                перейти к оплате онлайн.
              </p>
              <p>
                Для этого мы пользуемся услугами сервиса "Робокасса". А это
                значит Вы можете оплатить покупку с помощью любой карты или
                гаджета (MasterCard, VISA, МИР, Apple Pay, Google Pay).
              </p>
              <h3>НАЛОЖЕННЫМ ПЛАТЕЖОМ</h3>
              <p>
                Данная опция возможна только при заказе доставки с помощью СДЭК.
                В комментарии к заказу необходимо указать оплату наличными при
                получении в удобном Вам пункте выдачи данной транспортной
                компании.
              </p>
            </div>
          </div>
          <div className="delivery_section">
            <div className="delivery_section_title">
              <h2>Доставка</h2>
            </div>
            <div className="delivery_descriptions">
              <h3>Для физических лиц</h3>
              <p>
                Я осуществляю доставке по Москве, Московской области и России.
                Удобный вариант доставки выбирается при оформлении заказа.
              </p>
              <h3>САМОВЫВОЗ</h3>
              <p>
                Пункт самовывоза находится по адресу: 125167 Россия, Москва,
                Ленинградский проспект д.47 стр.3, подъезд №3 БЦ «Авион» (метро
                Аэропорт) Выдача производится на следующий день после оформления
                заказа ПН-ПТ с 09-00 до 17-00, СБ-ВС выходной
              </p>
              <h3>Доставка курьерской службой:</h3>
              <p>
                Курьерская доставка по Москве в пределах МКАД в течении 2-х дней
                с момента оплаты. Стоимость 400 рублей. <br />
                <br />
                СДЭК, Boxberry и Почта России по тарифам компании. Срок доставки
                от 3 до 12 дней, в зависимости от региональной удаленности.
                Тарифы и стоимость рассчитываются при оформлении заказа.
              </p>
              <h3>Для юридических лиц:</h3>
              <p>
                Я работаю как с физическими, так и с юридическими лицами. Если
                необходимо выставить счет на юр.лицо, необходимо указать это в
                комментариях к заказу и прислать реквизиты на электронную почту
                <span> saksar_aroma@mail.ru</span>. Отгрузка оптовых и
                корпоративных заказов осуществляется только после поступления
                оплаты на расчетный счет.
              </p>
              <h3>Возврат:</h3>
              <p>
                Согласно Постановлению Правительства РФ № 55 от 19.01.1998,
                парфюмерно-косметические товары надлежащего качества не подлежат
                обмену или возврату.
              </p>
            </div>
          </div>
          <div className="company_information">
            <p>
              ИП Какорина Венера Салаватовна <br />
              ИНН: 027501564500 <br />
              ОГРНИП: 322508100341551 <br />
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PaymentDelivery;
