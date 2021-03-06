import axiosClient from './axiosClient'

const usersAPI = {
    getUsers: () => {
        return axiosClient.get("/user");
    },

    getUserById: (id) => {
        // const params = {
        //     id,
        //     // maNhom: "GP01",
        // };
        // return axiosClient.get(`/QuanLyKhoaHoc/LayDanhMucKhoaHoc?maDanhuc=${category}`);
        return axiosClient.get(`/user/${id}`);
    },

    updateUserById: (data,id) => {
        // console.log(data);
        return axiosClient.put(`/user/${id}`,data);
    },

    deleteUser: (id) => {
        return axiosClient.delete(`/user/${id}`);
    },

    addUser: (data) => {
        return axiosClient.post(`/user`,data);
    }

};

export default usersAPI;

// Cách sử dụng 

// import coursesAPI from 'src/services/coursesAPI'

// const {data} = await coursesAPI.getCourses();