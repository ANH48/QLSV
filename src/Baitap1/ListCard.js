import React from "react";
import ItemCard from "./ItemCard";

export default function ListCard() {
  return (
    <div className="container">
      <div className="row">
      <div className="col-md-4 mb-5">
       <ItemCard/>
      </div>
      <div className="col-md-4 mb-5">
       <ItemCard/>
      </div>
      <div className="col-md-4 mb-5">
       <ItemCard/>
      </div>
      </div>
    </div>
  );
}
