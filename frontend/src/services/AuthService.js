import axios from "axios"

const login = (user) => {    
    return axios.post(process.env.REACT_APP_BASE_URL + 'auth/login', user);
}

const signup = (user) => {    
    return axios.post(process.env.REACT_APP_BASE_URL + 'auth/signup', user);
}

export { login, signup }