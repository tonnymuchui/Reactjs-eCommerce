import React from "react";
import "../menu-item/menu-item.styles.scss";
import { useNavigate } from "react-router-dom";

function MenuItem({ title, imageUrl, size, linkUrl }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(linkUrl);
  }

  return (
    <div className={`${size} menu-item`} onClick={handleClick}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <div className="title">{title}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
