import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, getUserById,changeIsOpen,updateUserById } from "../../../actions/users";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import UserForm from "./UserForm";

export default function Home() {
  const dispatch = useDispatch();

  //   const { id } = useParams();
  const { users, selectedUser,isOpen,isLoading, error } = useSelector(
    (state) => state.users
  );

  //   const i = 0;
  useEffect(() => {
    // dispatch action api lấy dskh
    dispatch(getUsers());
    console.log("renderr useer")
  }, []);
  // dispatch(getSinhviens());
  const handleDetail = (id) => {
    dispatch(getUserById(id));
  };

 
//   const renderpopup = (user) => {
//     return (
     
//     );
//   };
const handeToggleModal = () => {
  dispatch(changeIsOpen(isOpen))
  // console.log("dispatch", isOpen);
}

const handleUpdateUser = (user) => {
  dispatch(updateUserById(user))
}
  const renderUsers = () => {
    // return sinhviens;
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
            <Button color="btn btn-danger">Xoá</Button>
          </div>
        </div>
      );
    });
  };
 
  return (
    <div>
      <h1>Đây là trang home của quản lí sinh viên</h1>
      <div className="container">
          {renderUsers()}
          <UserForm 
             user = {selectedUser}
             isOpen = {isOpen}
             onToggle = {() => handeToggleModal(isOpen)}
             onUpdateUser = {handleUpdateUser}
          />
        </div>
      

      
    </div>
  );
}
