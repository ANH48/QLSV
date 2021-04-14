import React from 'react'

import {useSelector,useDispatch} from "react-redux"

import {addBreadmid,reduceBreadmid,changeBreadmid} from '../actions/buggerActions'


export default function BaitapBugger({children}) {
    const {burger,menu,total} = useSelector((state) => state.buggers);

    const  dispatch = useDispatch();

    const renderBreadmid = () => {
        return Object.entries(burger).map(([propBugger,value],index) => {
            let midContent = [];
            for(let i=0; i < value;i++ ) {
                midContent.push(<div key={i} className={propBugger}></div>)
            }
            return midContent;
        })
    }

    const handleBreadMid = (propMenu,status) => {
        // if(status) {
        //     dispatch(addBreadmid(propMenu));
        // }
        // else {
        //     dispatch(reduceBreadmid(propMenu));
        // }
        dispatch(changeBreadmid(propMenu,status));
    }

    const renderMenu = () => {
        return Object.entries(menu).map(([propMenu,price],index) => {
            return <tr key={index}>
                <td>{propMenu}</td>
                <td>
                    {/* Cách 1
                    <button className="btn btn-success mr-2" onClick={() =>handleBreadMid(propMenu,true)}>+</button> 
                    {burger[propMenu]}
                    <button className="btn btn-danger ml-2" onClick={() =>handleBreadMid(propMenu,false)} >-</button> */}

                    <button className="btn btn-success mr-2" onClick={() =>handleBreadMid(propMenu,true)}>+</button> 
                    {burger[propMenu]}
                    <button className="btn btn-danger ml-2" onClick={() =>handleBreadMid(propMenu,false)} >-</button>
                </td>
                <td>{price}</td>
                <td> {burger[propMenu] * price}</td>
            </tr>
        })
    }

   

    return (
        <div className="container">
            <h3 className="display-4 text-success">Bài Tập Bugger Cybersoft</h3>
            <div className="row">
                <div className="col-7">
                    <h3 className="text-danger text-center">Bánh bugger của bạn</h3>
                    <div className="breadTop"></div>
                    { renderBreadmid()}
                    <div className="${propBugger}"></div>
                    <div className="breadBottom"></div>
                </div>
                <div className="col-5">
                    <h3 className="text-danger text-center">Chọn thức ăn</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Thức ăn</th>
                                <th></th>
                                <th>Đơn giá</th>
                                <th>Thành tiền:</th>
                            </tr>
                            {renderMenu()}
                        </thead>
                        <tfoot>
                            <tr>
                                <td colSpan="2"></td>
                                <td>Tổng cộng:</td>
                                <td>{total}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
}
