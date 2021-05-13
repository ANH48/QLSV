import React,{useEffect} from "react";
import {
    Button,
  } from "reactstrap";
export default function RenderCard({users}) {
    const handleDetail = (id) => {
        console.log(id);
    }
    const handleDelete = (id) => {
        console.log(id);
    }
   
    if(users.length === 0 ) return <div></div>
    return users.map((user, index) => {
      return (
        <div key={user.id} className="card text-left mb-1">
          <div className="card-body">
            <h4 className="card-title">{user.username}</h4>
            <p className="card-text">Chức Vụ: {user.scope}</p>
            <Button
              onClick={() => handleDetail(user.id)}
              color="btn btn-success mr-4"
            >
              Chi Tiết
            </Button>
            <Button
              onClick={() => handleDelete(user.id)}
              color="btn btn-danger"
            >
              Xoá
            </Button>
          </div>
        </div>
      );
    });
 
}
