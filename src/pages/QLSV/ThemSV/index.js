import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Input, Label, FormGroup, Alert, Form } from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { addUser } from "../../../actions/users";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default function ThemSV() {
  const dispatch = useDispatch();
  const { result, isLoading, error } = useSelector((state) => state.users);
  // Tạo schema validation
  const schema = yup.object().shape({
    username: yup
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
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    // Sử dụng Khi UI component không load
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (values,e) => {
    const value = values ? { ...values, scope: "HV" } : "";
    //   console.log(value);
    dispatch(addUser(value));
    e.target.reset();
  };

//   let initialValue = {
//     fullname : "",
//   };
//   const [vaLues, setValues] = useState(initialValue);

//   const handleChange = (evt) => {
//     const { value, name } = evt.target;
//     setValues((vaLues) => ({
//       ...vaLues,
//       [name]: value,
//     }));
//   };
  useEffect(() => {
      if(result.length != 0 && result.status === 201) {
        const messageText = (result.statusText === "Created") ? "Tạo thành công" : "";
        alert(messageText);
      }
    // setValues(initialValue);
  }, [result]);
  return (
    <div className="container-fluid">
      <h1>Phiếu đăng kí</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for="fullname">Họ Tên</Label>
          <Input
            type="text"
            {...register("fullname")}
            // value={vaLues.fullname}
            // onChange={handleChange}
            // {...setValue("fullname", vaLues.fullname)}
          />
          {errors.fullname && (
            <div className="alert alert-danger">{errors.fullname.message}</div>
          )}
        </FormGroup>
        <div className="form-row">
          <FormGroup className="col-md-6">
            <Label for="username">Username</Label>
            <Input type="text" {...register("username")} />
            {errors.username && (
              <div className="alert alert-danger">
                {errors.username.message}
              </div>
            )}
          </FormGroup>
          <FormGroup className="col-md-6">
            <Label for="email">Email</Label>
            <Input type="text" {...register("email")} />
            {errors.email && (
              <div className="alert alert-danger">{errors.email.message}</div>
            )}
          </FormGroup>
        </div>
        <div className="form-row">
          <FormGroup className="col-md-4">
            <Label for="phone">Số Điện thoại</Label>
            <Input type="text" {...register("phone")} />
            {errors.phone && (
              <div className="alert alert-danger">{errors.phone.message}</div>
            )}
          </FormGroup>
          <FormGroup className="col-md-4">
            <Label for="address">Địa chỉ</Label>
            <Input type="text" {...register("address")} />
            {errors.address && (
              <div className="alert alert-danger">{errors.address.message}</div>
            )}
          </FormGroup>
          <FormGroup className="col-md-2">
            <Label for="score">Điểm</Label>
            <Input type="text" {...register("score")} />
            {errors.score && (
              <div className="alert alert-danger">{errors.score.message}</div>
            )}
          </FormGroup>
        </div>
        <Button color="success">Submit</Button>
      </Form>
    </div>
  );
}
