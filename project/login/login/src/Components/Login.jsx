import React from 'react';
import { Link } from 'react-router-dom';
import '../Components/Login.css';
function Login()
{
    return(
        <>
        <center>
        <div className="login">
            <h1>username</h1>
            <input type="text" value="username" id="username"/>
            <h1>Password</h1>
            <input type="password" id="password" value="password"/>
            <button >Submit</button>
            <h1>New User?<Link to="/SignUp">click here</Link></h1>
        </div>
        </center>
        </>
    );
}
export default Login;