import { useState } from 'react';
import { signup } from '../../services/AuthService';
import { useNavigate } from 'react-router-dom';

function Signup() {
    let navigate = useNavigate();

    const initialUser = {
        username: '',
        password: ''
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
        signup(user).then(res => {
            console.log(res.data)
            navigate("/")
        });
    }

    return (<>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit} >
            Username: <input type="text" name="username" value={user.username} onChange={handleChange} />
            <br />
            Password: <input type="password" name="password" value={user.password} onChange={handleChange} />
            <br />
            <input type="submit" />
        </form>
        </>);
}

export default Signup;