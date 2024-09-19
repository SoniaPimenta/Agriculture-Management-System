import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/login.css';
const Login = () => {
    const navigate = useNavigate();
    const handlelogin = () => {
        navigate('/dashboard');
    }
    return (
        // <div class="login-container">
        //      <div class="login-card">
        //         <div class="login-left">
        //         <img src="C:\Users\Administrator\Desktop\hackathon\code-o-fiesta\src\assets\majdoor.jpg" alt="Logo" className="logo" />
        //          </div>
        //          <div class="login-right">
        //         <div class="text">Welcome !</div>
        //         <form className="login-form"></form>
        //             <div class="input-group">
        //                 <label for="username">Username</label>
        //                 <input type="text" id="username" placeholder="Enter your username" />
        //             </div>
        //             <div class="input-group">
        //                 <label for="password">Password</label>
        //                 <input type="password" id="password" placeholder="Enter your password" />
        //             </div>
        //             <div class="forgot-password">
        //                 <a href="#">Forgot Password?</a>
        //             </div>
        //             <button type="submit" class="btn">Login</button>
        //             </div>
        //             </div>
        //             </div>
        <div className="pager">

            <div className="wrapper">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                        <i className='bx bxs-user'></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                        <i className='bx bxs-lock-alt'></i>
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />Remember Me
                        </label>
                        <a href="#">Forgot Password</a>
                    </div>
                    <button type="submit" onClick={handlelogin} className="btn">Login</button>
                    <div className="register-link">
                        <p>Don't have an account? <a href="#">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;