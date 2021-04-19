import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, getUserById } from "../../../actions/users";
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

export default function Home() {
  const dispatch = useDispatch();

  //   const { id } = useParams();
  const { users, selectedUser, isLoading, error } = useSelector(
    (state) => state.users
  );

  //   const i = 0;
  useEffect(() => {
    // dispatch action api lấy dskh
    dispatch(getUsers());
  }, []);
  // dispatch(getSinhviens());

  const handleDetail = (id) => {
    dispatch(getUserById(id));
  };
  useEffect(() => {
    // dispatch action api lấy dskh
     renderpopup(selectedUser);
  }, [selectedUser]);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const renderpopup = (user) => {
    return (
      <div>
        <Modal isOpen="true" toggle="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content  w-100">
              <ModalHeader>User Form</ModalHeader>
              <ModalBody>
                <FormGroup>
                  <Label for="Username">Username</Label>
                  <Input
                    type="text"
                    id="username"
                    name="username"
                    value={user.username}
                  />
                  {/* <small id="helpId" className="text-muted">Help text</small> */}
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary">Cancel</Button>
                <Button color="primary">Submit</Button>
              </ModalFooter>
            </div>
          </div>
        </Modal>
      </div>
    );
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
            <Button color="btn btn-danger">Xoá</Button>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Đây là trang home của quản lí sinh viên</h1>
      <div className="container">{renderUsers()}</div>

      
    </div>
  );
}
