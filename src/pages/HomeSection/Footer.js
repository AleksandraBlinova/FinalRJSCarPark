import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer=()=> {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>ПОЛЕЗНЫЕ ССЫЛКИ</h2>
            <a href='https://www.mazda.ru/forms/keep-me-informed/'>Обратная связь</a>
            <a href='https://www.mazda.ru/mazda_world/become-a-dealer/'>Стать дилером</a>
            <Link to='/contacts'>Контакты</Link>
            <a href='https://www.mazda.ru/privacy-policy/'>Правовая информация</a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
        
          <div className='footer-link-items'>
            <h2>СЛЕДИТЕ ЗА НАМИ</h2>
            <div>
            <a href='https://www.instagram.com/mazda_russia/'>Instagram </a>
            <FaInstagram  className="fa-insta" size="18px" />
            </div>
           <div>
             <a href='https://www.facebook.com/MazdaRussia'>Facebook </a>
             <FaFacebook className="fa-face" size="18px" />
           </div>
          <div>
          <a href='https://www.youtube.com/user/themazdarussia/feed?filter=2'>Youtube </a>
          <FaYoutube className="fa-you" size="18px"  />
          </div>
           
          </div>


        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <small className='website-rights'>MAZDAHOME © 2021 ALL RIGHTS RESERVED</small>
        </div>
       
      </section>
    </div>
  );
}

export default Footer;