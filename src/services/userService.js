import axios from "../axios"

const handleLoginApi = (userEmail1, userPassword) => {
    return axios.post('/api/login', { email: userEmail1, password: userPassword });
}

const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`)
}
const createNewuserService = (data) => {
    console.log('check data from service:', data)
    return axios.post('/api/create-new-user', data)
}
const deleteUserService = (userId) => {
    // return axios.delete('/api/delete-user', { id: userId })
    return axios.delete('/api/delete-user', {
        data: {
            id: userId
        }
    });
}

const editUserService = (inputData) => {
    return axios.put('/api/edit-user', inputData
    );
}
const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`)
}
export { handleLoginApi, getAllUsers, createNewuserService, deleteUserService, editUserService, getAllCodeService }