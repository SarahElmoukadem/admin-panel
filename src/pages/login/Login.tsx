import React, { useState } from 'react'
import { useLocalStorage } from '../../hooks/custmHooks';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [value, setValue] = useState('Admin');
    const [passValue, setPassValue] = useState('Admin');
    const navigate = useNavigate();

    const { setItem } = useLocalStorage('value');

    const authenticationSuccessful = (username:string, password:any) => {
        // Replace this with your actual authentication logic
        // For simplicity, always return true in this example
        return true;
    };
    const handleLogin = () => {

        if (authenticationSuccessful(value, passValue)) {
            setItem({ username: value, password: passValue });
            navigate('/');

        } else {
            // Handle authentication failure
            alert('Authentication failed. Please try again.');
        }

    };

    return (
        <div>
            <input type="text" value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <input type="password"
                value={passValue}
                onChange={(e) => setPassValue(e.target.value)}
            />
            <button type="submit" onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login