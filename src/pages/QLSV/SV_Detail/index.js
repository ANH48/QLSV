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
import RenderCard from "../../../component/RenderCard";



export default function SV_Detail() {
    const dispatch = useDispatch();

    const { users, selectedUser, isOpen, result, isLoading, error } = useSelector(
      (state) => state.users
    );
    // dispatch(getUsers());
    // useEffect(() => {
    //     // dispatch action api lấy dskh
    //     // dispatch(getUsers());
    //     console.log("chờ xíu")
    //   }, [isLoading]);
    
    return (
        <div>
            <h1>Đây là trang sinh viên</h1>
            <div className="container">
            <RenderCard 
                users={users}
            />
            </div>
        </div>
    )
}
