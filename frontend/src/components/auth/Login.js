import { useState } from 'react';
import { getData, saveData } from '../../services/LocalStorage';
import { login } from '../../services/AuthService';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from "../../contexts/AuthContext";


function Login() {
    const { setAuthToken } = useAuth();
    let navigate = useNavigate();

    // const { setToken } = state; // Read values passed on state

    const initialUser = {
        username: 'mori',
        password: '1000'
    }

    const [user, setUser] = useState(initialUser);

    const handleChange = (e) => {     
        e.preventDefault();   
        setUser({...user, 
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(user).then(res => {
            // setToken(res.data.token);
            setAuthToken(res.data.token)
            // saveData('token', res.data.token);
            navigate("/")
        });
    }

    return (<>
        <h1>Log In</h1>
        <form onSubmit={handleSubmit} >
            Username: <input type="text" name="username" value={user.username} onChange={handleChange} />
            <br />
            Password: <input type="password" name="password" value={user.password} onChange={handleChange} />
            <br />
            <input type="submit" />
        </form>
        </>);
}

export default Login;