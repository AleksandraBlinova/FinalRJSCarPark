import * as React from "react";
import "./SociaMediaLinks.css";
import { Typography } from "antd";
import { Link } from "react-router-dom";

export default function SocialMediaLinks() {
  return (
    <>
      <div className="socmed_info">
        <Typography className="socmed_text">
          Официальные группы Mazda открыты в
          <Link to="https://ok.ru/mazda" className="socmed_link">
            Одноклассниках
          </Link>
          ,
          <Link to="https://vk.com/mazda" className="socmed_link">
            Вконтакте
          </Link>
          , а также на
          <Link
            to="https://www.youtube.com/user/themazdarussia/feed?filter=2"
            className="socmed_link"
          >
            Youtube
          </Link>
          . Здесь можно найти последние новости Mazda, обсуждения, конкурсы,
          голосования, фотографии, видео и многое другое. Добро пожаловать!
        </Typography>
      </div>
      <></>
    </>
  );
}
