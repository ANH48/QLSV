import React from "react";

export default function ItemCard() {
  return (
      <div className="card h-100">
        <img className="card-img-top" src="https://placehold.it/300x200" />
        <div className="card-body">
          <h4 className="card-title">Card title</h4>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            esse necessitatibus neque sequi doloribus.
          </p>
        </div>
        <div className="card-footer">
          <a href="#" className="btn btn-primary">
            Find Out More!
          </a>
        </div>
      </div>
  );
}
