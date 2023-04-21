import axios from "axios"
import { getData } from "./LocalStorage";

const getBooks = () => {    
    const token = getData('token');
    const headers = { 'Authorization': 'Bearer ' + token }
    return axios.get(process.env.REACT_APP_BASE_URL + 'books', {headers});
}

const getBook = (id) => {    
    const token = getData('token');
    const headers = { 'Authorization': 'Bearer ' + token }
    return axios.get(process.env.REACT_APP_BASE_URL + 'books/' + id, {headers});
}

const addBook = (book) => {    
    const token = getData('token');
    const headers = { 'Authorization': 'Bearer ' + token }
    return axios.post(process.env.REACT_APP_BASE_URL + 'books', {'book': book}, {headers});
}

const deleteBook = (id) => {    
    const token = getData('token');
    const headers = { 'Authorization': 'Bearer ' + token }
    return axios.delete(process.env.REACT_APP_BASE_URL + 'books/' + id, {headers});
}


export { getBooks, getBook, addBook, deleteBook }