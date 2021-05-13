import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsers,
  getUserById,
  changeIsOpen,
  updateUserById,
  deleteUser,
} from "../../../actions/users";
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
  const { users, selectedUser, isOpen, result, isLoading, error } = useSelector(
    (state) => state.users
  );
  
  //   const i = 0;
  useEffect(() => {
    // dispatch action api lấy dskh
    dispatch(getUsers());
    if (result.length != 0) {
      let method = (result.config.method === "delete")? "Xoá" : "Cập Nhật";
      if (result.status === 200) {
        alert(method+" thành công");
      } else {
        alert(method+ " thất bại");
      }
    }
  }, [result]);
  // dispatch(getSinhviens());
  const handleDelete = (id) => {
    dispatch(deleteUser(id));
    // console.log();
  };

  const handleDetail = (id) => {
    dispatch(getUserById(id));

  };

  //   const renderpopup = (user) => {
  //     return (

  //     );
  //   };
  const handeToggleModal = () => {
    dispatch(changeIsOpen(isOpen));
    // console.log("dispatch", isOpen);
  };

  const handleUpdateUser = (user, id) => {
    dispatch(updateUserById(user, id));
   
  };
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
  };

  return (
    <div>
      <h1>Đây là trang home của quản lí sinh viên</h1>
      <div className="container">
        {renderUsers()}
        <UserForm
          user={selectedUser}
          isOpen={isOpen}
          onToggle={() => handeToggleModal(isOpen)}
          onUpdateUser={handleUpdateUser}
        />
      </div>
    </div>
  );
}
