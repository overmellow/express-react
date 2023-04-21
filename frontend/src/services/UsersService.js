import axios from "axios"
import { getData } from "./LocalStorage";

const getUsers = () => {    
    const token = getData('token');
    const headers = { 'Authorization': 'Bearer ' + token }
    return axios.get(process.env.REACT_APP_BASE_URL + 'users', {headers});
}

export { getUsers }