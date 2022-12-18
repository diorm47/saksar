import React from "react";
import "./footer.css";

import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer_wrapper">
        <div className="footer_nav">
          <NavLink to="/">
            <div className="footer_logo">
              <h1>saksar</h1>
            </div>
          </NavLink>
          <div className="footer_nav_list">
            <NavLink to="/butter">
              <div className="footer_nav_menu_item">
                <p>Баттер</p>
              </div>
            </NavLink>
            <div className="vertical_line">
              <span>|</span>
            </div>
            <NavLink to="/scrubs">
              <div className="footer_nav_menu_item">
                <p>Скрабы</p>
              </div>
            </NavLink>
            <div className="vertical_line">
              <span>|</span>
            </div>
            <NavLink to="/spa-sets">
              <div className="footer_nav_menu_item">
                <p>SPA - наборы</p>
              </div>
            </NavLink>
            <div className="vertical_line">
              <span>|</span>
            </div>
            <NavLink to="/diffusers">
              <div className="footer_nav_menu_item">
                <p>Диффузоры</p>
              </div>
            </NavLink>
          </div>
        </div>
        <div className="footer_links">
          <div className="footer_link_items">
            <a
              className="contact_item"
              href="mailto:saksar_aroma@mail.ru"
              target="_blank"
              rel="noreferrer"
            >
              <div className="footer_email">
                <p>saksar_aroma@mail.ru</p>
              </div>
            </a>
            <div className="vertical_line">
              <span>|</span>
            </div>
            <a href="tel:+79099772280">
              <div className="footer_phone_number">
                <p>+79099772280</p>
              </div>
            </a>
          </div>
          <div className="policy_link">
            <NavLink to="/policy">
              <p>Политика конфиденциальности</p>
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
