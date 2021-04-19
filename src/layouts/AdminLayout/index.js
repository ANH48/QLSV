import React from 'react'
import {Link} from 'react-router-dom' 
export default function AdminLayout({children}) {
    return (
        <div>
             {/* <h1>Admin Layout</h1> */}
             <div className="d-flex">
                <div className="w-25">
                    <Link to="/admin"><h3>Quản Lý Trường Học </h3></Link>
                    <ul>
                        <li> <Link to="/admin/sinhvien">Danh Sách học viên</Link></li>
                        <li><Link to="/admin/themsinhvien">Thêm Sinh Viên</Link></li>
                        <li></li>
                    </ul>
                </div>
                <div className="w-75">
                    {children}
                </div>
            </div>
        </div>
    )
}
