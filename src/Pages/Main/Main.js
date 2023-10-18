import React from "react";
import "./ImageGallery.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="image-gallery">
      <div className="image-container">
        <Link to="/Page">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOnnGtMmE8zOHMz-HYfLNO46OQwi3sLPfSig&usqp=CAU" alt="Image 1" className="image" />
          <div className="text">
            Привет, я Шрек! Чем могу быть полезен?
          </div>{" "}
        </Link>
      </div>

      <div className="image-container">
        <Link to="/Page">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOnnGtMmE8zOHMz-HYfLNO46OQwi3sLPfSig&usqp=CAU" alt="Image 2" className="image" />
          <div className="text">
            Привет, я Шрек! Чем могу быть полезен?
          </div>{" "}
        </Link>
      </div>

      <div className="image-container">
        <Link to="/Page">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOnnGtMmE8zOHMz-HYfLNO46OQwi3sLPfSig&usqp=CAU" alt="Image 3" className="image" />
          <div className="text">
            Привет, я Шрек! Чем могу быть полезен?
          </div>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Main;
