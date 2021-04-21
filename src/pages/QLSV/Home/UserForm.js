import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  Form,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export default function UserForm({ user, isOpen, onToggle, onUpdateUser }) {
  // Tạo schema validation
  const schema = yup.object().shape({
    taiKhoan: yup
      .string()
      .required("Tài khoản không được để trống")
      .min(5, "Tài khoản phải từ 5 đến 20 kí tự")
      .max(20, "Tài khoản phải từ 5 đến 20 kí tự"),
    email: yup
      .string()
      .email("Vui lòng điền đầy đủ eamil")
      .required("Email không được để trống")
      .min(3, "Mật Khẩu  phải từ 3 đến 20 kí tự")
      .max(20, "Mật Khẩu phải từ 3 đến 20 kí tự"),
    phone: yup
      .string()
      .matches(phoneRegExp, "Số điện thoại không đúng")
      .min(10, "Số điện thoại không đúng")
      .max(11, "Số điện thoại không đúng")
      .required("Phone không được để trống"),
    fullname: yup
      .string()
      .required("Họ Tên không được để trống")
      .min(5, "Họ Tên phải từ 5 đến 20 kí tự")
      .max(20, "Mật Khẩu phải từ 3 đến 20 kí tự"),
    address: yup.string().required("Địa chỉ không được để trống"),
    score: yup
      .number()
      .required("Điểm trung bình không được để trống")
      .min(0, "Điểm trung bình  phải từ 0 đến 10")
      .max(10, "Điểm trung bình phải từ 0 đến 10"),
    scope: yup
      .string()
      .required("Chức vụ không được để trống")
      .min(2, "Mật Khẩu  phải từ 3 đến 20 kí tự")
      .max(2, "Mật Khẩu phải từ 3 đến 20 kí tự"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    // Sử dụng Khi UI coponent không load
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const isEmpty = (v) => {
    return Object.keys(v).length === 0;
  };


  var initialValue = {};
  if (!isEmpty(user)) {
    initialValue = {
      id: user.id,
      taiKhoan: user.username,
      email: user.email,
      phone: user.phone,
      fullname: user.fullname,
      address: user.address,
      score: user.score,
      scope: user.scope,
    };
  } else {
    initialValue = {
      id: "",
      taiKhoan: "",
      email: "",
      phone: "",
      fullname: "",
      address: "",
      score: "",
      scope: "",
    };
  }
  const onSubmit = (values) => {
    const { value, name } = values;
    setValues((vaLues) => ({
      ...vaLues,
      [name]: value,
    }));
    onUpdateUser(initialValue);
  };
  const [vaLues, setValues] = useState(initialValue);

  const handleChange = (evt) => {
    const { value, name } = evt.target;
    setValues((vaLues) => ({
      ...vaLues,
      [name]: value,
    }));
  };

  useEffect(() => {
    setValues(initialValue);
  }, [user]);

  if (!isEmpty(user)) {
    return (
      <div>
        <Modal isOpen={isOpen} toggle={() => onToggle(isOpen)}>
          <div className="modal-dialog" role="document">
            <div className="modal-content  w-100">
              <Form onSubmit={handleSubmit(onSubmit)}>
                <ModalHeader>User Form</ModalHeader>
                <ModalBody>
                  <FormGroup>
                    <Label for="username">Username</Label>
                    <Input
                      type="text"
                      {...register("taiKhoan")}
                      value={vaLues.taiKhoan}
                      onChange={handleChange}
                      {...setValue("taiKhoan", vaLues.taiKhoan)}
                    />
                    {errors.taiKhoan && (
                      <div className="alert alert-danger">
                        {errors.taiKhoan.message}
                      </div>
                    )}
                    <Label for="email">Email</Label>
                    <Input
                      type="text"
                      {...register("email")}
                      value={vaLues.email}
                      onChange={handleChange}
                      {...setValue("email", vaLues.email)}
                    />
                    {errors.email && (
                      <div className="alert alert-danger">
                        {errors.email.message}
                      </div>
                    )}
                    <Label for="phone">Number phone</Label>
                    <Input
                      type="text"
                      {...register("phone")}
                      value={vaLues.phone}
                      onChange={handleChange}
                      {...setValue("phone", vaLues.phone)}
                    />
                    {errors.phone && (
                      <div className="alert alert-danger">
                        {errors.phone.message}
                      </div>
                    )}
                    <Label for="fullname">Họ Tên</Label>
                    <Input
                      type="text"
                      {...register("fullname")}
                      value={vaLues.fullname}
                      onChange={handleChange}
                      {...setValue("fullname", vaLues.fullname)}
                    />
                    {errors.fullname && (
                      <div className="alert alert-danger">
                        {errors.fullname.message}
                      </div>
                    )}

                    <Label for="address">Họ Tên</Label>
                    <Input
                      type="text"
                      {...register("address")}
                      value={vaLues.address}
                      onChange={handleChange}
                      {...setValue("address", vaLues.address)}
                    />
                    {errors.address && (
                      <div className="alert alert-danger">
                        {errors.address.message}
                      </div>
                    )}

                    <Label for="score">Điểm TB</Label>
                    <Input
                      type="text"
                      {...register("score")}
                      value={vaLues.score}
                      onChange={handleChange}
                      {...setValue("score", vaLues.score)}
                    />
                    {errors.score && (
                      <div className="alert alert-danger">
                        {errors.score.message}
                      </div>
                    )}
                    <Label for="scope">Chức vụ: </Label>
                    <Input
                      type="text"
                      {...register("scope")}
                      value={vaLues.scope}
                      onChange={handleChange}
                      {...setValue("scope", vaLues.scope)}
                    />
                    {errors.scope && (
                      <div className="alert alert-danger">
                        {errors.scope.message}
                      </div>
                    )}
                    {/* <small id="helpId" className="text-muted">Help text</small> */}
                  </FormGroup>
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={() => onToggle(isOpen)}>
                    Cancel
                  </Button>
                  <Button color="primary">Submit</Button>
                  {/* <Button type="button" color="danger" onClick={() => onSet()}>Set Value</Button> */}
                </ModalFooter>
              </Form>
            </div>
          </div>
        </Modal>
      </div>
    );
  } else {
    return <></>;
  }
}
