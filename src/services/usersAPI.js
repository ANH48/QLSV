import axiosClient from './axiosClient'

const usersAPI = {
    getUsers: () => {
        return axiosClient.get("/user");
    },

    getUserById: (id) => {
        const params = {
            id,
            // maNhom: "GP01",
        };
        // return axiosClient.get(`/QuanLyKhoaHoc/LayDanhMucKhoaHoc?maDanhuc=${category}`);
        return axiosClient.get("/user/",{params});
    }
};

export default usersAPI;

// Cách sử dụng 

// import coursesAPI from 'src/services/coursesAPI'

// const {data} = await coursesAPI.getCourses();