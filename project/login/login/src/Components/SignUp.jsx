import React from 'react';
import '../Components/Login.css';
function SignUp() 
{
    return(
        <>
        <center>
         <div className="login">
            <form>
            <h1>username</h1>
            <input type="text" value="username" id="username"/>
            <h1>Password</h1>
            <input type="password" id="password" value="password">
            </input>
            <h1>ConfirmPassowrd:</h1>
            <input type="password" id="cnfmpassword" value="cnfmpassword">
            </input>
            <button >Submit</button>
            </form>
           
        </div>
        </center></>
    );
}
export default SignUp;