import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';
function Login() {
    const [username, setUser] = useState('');
    const [passw, setPass] = useState('');
    const {setuser}= useContext(UserContext)
    const handle = (e) => {
        e.preventDefault();
        setuser({username,passw})
        
    };

    return (
        <div>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUser(e.target.value)}
            />
            
            <h1>Password</h1>
            <input
                type="password"
                placeholder="Password"
                value={passw}
                onChange={(e) => setPass(e.target.value)}
            />

            <button onClick={handle}>Login</button>
        </div>
    );
}

export default Login;
