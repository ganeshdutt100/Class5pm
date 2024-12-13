import React from "react";

const Navbar = () => {
  return (
    <div>
      <div
        className="main"
        style={{
          width: "300px",
          background: "yellow",
          color: "black",
          padding: "10px",
          borderRadius: "20px",
          marginTop: "30px",
        }}
      >
        <h1>Lorem ipsum dolor</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat aut,
          cumque doloremque voluptatum atque veritatis ducimus consequuntur
          eveniet, magni ipsa beatae deleniti distinctio, provident excepturi
          perferendis quam dolore optio quis?
        </p>
        <button>Click me </button>
      </div>
    </div>
  );
};

export default Navbar;
