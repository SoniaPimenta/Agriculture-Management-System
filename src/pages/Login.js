import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // ✅ Import Link
import '../css/login.css';

const Login = () => {
  const navigate = useNavigate();

  // State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle login form submit
  const handleLogin = async (e) => {
    e.preventDefault();  // prevent page reload

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Welcome " + data.name);
        navigate('/dashboard');  // redirect on successful login
      } else {
        alert(data.message); // show error message from backend
      }
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <div className="pager">
      <div className="wrapper">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className='bx bxs-lock-alt'></i>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="register-link">
            <p>Don't have an account? <Link to="/signup">Register</Link></p> {/* ✅ Fixed navigation */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
