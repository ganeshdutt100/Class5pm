import React from "react";

export const Hero = ({ headingName, heading2 }) => {
  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-center my-3">Lorem ipsum dolor sit amet.</h1>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col">
            <img
              src="https://img.freepik.com/premium-vector/big-data-flow-processing-concept-cloud-database_122058-448.jpg?ga=GA1.1.1872758581.1724841441&semt=ais_hybrid"
              alt=""
              className="img-fluid rounded-4"
            />
          </div>

          <div className="col">
            <h1>{headingName}</h1>
            <h2>{heading2}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              saepe quae, id explicabo, eligendi consequuntur expedita inventore
              rem, quam doloremque quisquam. Excepturi dignissimos quis
              blanditiis rerum, praesentium porro sapiente eum!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              saepe quae, id explicabo, eligendi consequuntur expedita inventore
              rem, quam doloremque quisquam. Excepturi dignissimos quis
              blanditiis rerum, praesentium porro sapiente eum!
            </p>
            <button className="btn btn-dark">Click me </button>
          </div>
        </div>
      </div>
    </div>
  );
};
