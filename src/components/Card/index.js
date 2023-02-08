import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ id, to, src, title, preview, date }) => {
  return (
    <>
      <NavLink
        id={id}
        to={to}
        className="card-container"
      >
        <div className="press-img">
          <img src={src} alt="cardImg" />
        </div>
        <div className="press-info">
          <h2 className="press-title">{title}</h2>
          <div className="press-preview">{preview}</div>
          <div className="press-date">{date}</div>
        </div>
      </NavLink>
    </>
  )
}
export default Card;