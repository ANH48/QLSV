import React,{useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,FormGroup,Label,Input } from 'reactstrap'; 
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

export default function UserForm({user,isOpen,onToggle}) {
    // Tạo schema validation 
    const schema = yup.object().shape({
        taiKhoan: yup.string().required("Tài khoản không đucowj để trống").min(5,"Tài khoản phải từ 5 đến 20 kí tự").max(20,"Tài khoản phải từ 5 đến 20 kí tự"),
        email: yup.string().required("Email không được để trống").min(3,"Mật Khẩu  phải từ 3 đến 20 kí tự").max(20,"Mật Khẩu phải từ 3 đến 20 kí tự"),
    });
    
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    // Sử dụng Khi UI coponent không load 
    control,
  } = useForm(
      {
      resolver: yupResolver(schema),
        }
  );
    return (
        <div>
        <Modal isOpen={isOpen} toggle={() => onToggle(isOpen)}>
          <div className="modal-dialog" role="document">
            <div className="modal-content  w-100">
              <ModalHeader>User Form</ModalHeader>
              <ModalBody>
                <FormGroup>
                   
                <Label for="username">Username</Label>
                <Input
                type="text"
                id="username"
                name="username"
                {...register("taiKhoan")}
                />
                {errors.taiKhoan && ( <div className="alert alert-danger">{errors.taiKhoan.message}</div>)}
                <Label for="email">Email</Label>
                    <Input
                    type="text"
                    id="email"
                    name="email"
                    {...register("email")}
                    />
                {errors.taiKhoan && ( <div className="alert alert-danger">{errors.taiKhoan.message}</div>)}

                  <p>{user.username}</p>
                  <p>{user.email}</p>
                  <p>{user.phone}</p>
                  <p>{user.fullname}</p>
                  <p>{user.address}</p>
                  <p>{user.score}</p>
                  <p>{user.scope}</p>
                  {/* <small id="helpId" className="text-muted">Help text</small> */}
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={() => onToggle(isOpen)}>Cancel</Button>
                <Button color="primary" onClick={() => onToggle(isOpen)}>Submit</Button>
              </ModalFooter>
            </div>
          </div>
        </Modal>
      </div>
    )
}
