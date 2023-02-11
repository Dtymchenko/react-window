import React from "react";
import "./Image.css";

const Image = ({ el }) => {
  return (
    <div className="item">
      <div>
        <span>{el.id}. </span>
        <span>{el.title}</span>
      </div>
      <div>
        <img src={el.thumbnailUrl} alt="img"></img>
      </div>
    </div>
  );
};

export default Image;
