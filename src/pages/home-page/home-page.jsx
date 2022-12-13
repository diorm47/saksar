import React from "react";
import "./home-page.css";
import header_left_img from "../../assets/images/header-left-img.png";
import header_right_img from "../../assets/images/header-right-img.png";
import founder_img from "../../assets/images/founder-img.jpg";
import authograph from "../../assets/images/authograph.png";
import HomeProducts from "../../components/home_products_links/home-products";
import ApplicationForm from "../../components/application-from/application_form";
import Footer from "../../components/footer/footer";

function HomePage() {
  React.useEffect(() => {
    document.title = `Saksar`;
  }, []);
  return (
    <>
      <header>
        <div className="header_wrapper">
          <div className="header_left_blog">
            <img src={header_left_img} alt="header_left_img" />
          </div>
          <div className="header_right_block">
            <div className="header_text">
              <div className="before_text_line"></div>
              <h1>Выбери свой аромат для дома</h1>
            </div>
            <img src={header_right_img} alt="header_right_img" />
          </div>
        </div>
      </header>
      <section className="history_brand">
        <div className="history_brand_wrapper">
          <div className="founder_img">
            <img src={founder_img} alt="founder_img" />
          </div>
          <div className="history_brand_text">
            <i>
              <h1>ИСТОРИЯ БРЕНДА</h1>
            </i>

            <i>
              <p>
                Здравствуй! <br /> Я, Венера Какорина, основатель бренда SAKSAR
                AROMA HOME COLLECTION.
              </p>
              <p>
                Мой путь был тернист и долог, изучая множество рецептов, свойств
                масел, смешивая различные экологичные аромамасла, я вывела
                собственные формулы и создала потрясающую коллекцию ухода за
                телом и ароматизаторов для дома.
              </p>
              <p>
                В своих продуктах я использую только натуральные ингредиенты,
                которые будут заботиться о твоем теле и домашнем пространстве.
                Каждая баночка делается мной вручную с большой любовью к людям,
                природе и своему ремеслу. Не сомневайся, что найдёшь здесь по
                истине экологичный продукт.
              </p>
            </i>
            <div className="founder_authograph">
              <img src={authograph} alt="authograph" />
            </div>
          </div>
        </div>
      </section>
      <section className="home_products">
        <div className="home_products_wrapper">
          <div className="home_products_title">
            <h3>Продукты</h3>
          </div>
          <div className="home_product_items">
            <HomeProducts />
          </div>
        </div>
      </section>
      <section className="reviews">
        <div className="reviewer_name">
          <h3>Алина Олеговна</h3>
        </div>
        <div className="reviewer_review">
          <p>
            Прекрасные вкус и качество продукта. Буду брать у нее <br />{" "}
            постоянно, так как мне все понравилось.
          </p>
          <div className="about_review">
            <p>Отзыв о диффузоре</p>
          </div>
        </div>
      </section>
      <section>
        <ApplicationForm />
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
