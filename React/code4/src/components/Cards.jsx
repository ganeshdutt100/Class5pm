import React from "react";

const Cards = (props) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.imgPics} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
