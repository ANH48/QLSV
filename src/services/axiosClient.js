import axios from 'axios';
import qs from 'qs'
const axiosClient = axios.create({
    baseURL:"https://6056f9da055dbd0017e844df.mockapi.io",
    // tự cấu hình cách lấy params mặt định của axios
    // skipNulls: true bỏ qa giá trị null và undefined trong params
    paramsSerializer: (params) => qs.stringify(params, {skipNulls: true}),
});
// axiosClient.interceptors.request.use(
//     (config) => {
//         // XỬ lý trước khi request được gửi lên server

//         // Thêm Authorization vào header 
//         const userInfo = localStorage.getItem("userInfo");

//         if(userInfo){
//             const {accessToken} = JSON.parse(userInfo);
//             config.headers.Authorization = `Bearer ${accessToken}`;
//         }
//         return config;
//     },
//     (error) => {
//         // Xử lí khi request bị lỗi
//         return Promise.reject(error);
//     }
// );
// axiosClient.interceptors.response.use(
//     (response) => {
//         // XỬ lý trước khi response trả ra 
//         return response;
//     },
//     (error) => {
//         // Xử lí nếu kết quả trả về  bị lỗi 
//         if(error.status === 401) {
//             // Xử lí logout : clear localStorage, đẩy ngừoi dùng về trang login 
//         }
//         if(error.status === 500) {
//             // Thông báo : Server đang lỗi 
//         }
//         return Promise.reject(error);
//     }
// );
export default axiosClient;
