import React from "react";
import "./Page.css";
import { Link, useHistory } from "react-router-dom";

const Page = () => {
  console.log("111");

  return (
    <div className="page">
      <div className="background-image">
        <Link to="/">
          <img src="./shrex.jpeg" alt="Background" />
        </Link>
      </div>
      <div className="content">
        <div className="text-box">
          <p>
            Я очень сильно люблю Шрека. У меня есть все его фильмы. Я молюсь
            перед сном на шрека. -Шрек это любовь. Говорю я -Шрек это жизнь.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
