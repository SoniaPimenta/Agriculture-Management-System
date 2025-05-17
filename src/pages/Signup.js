import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    alert(data.message);
    if (res.ok) {
      navigate("/login"); // Directly navigate to login page on success
    }
  };

  return (
    <div className="pager">
      <div className="wrapper">
        <form onSubmit={handleSignup}>
          <h1>Signup</h1>
          <div className="input-box">
            <input type="text" name="name" placeholder="Name" required />
          </div>
          <div className="input-box">
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              minLength={6}
            />
          </div>
          <button type="submit" className="btn">
            Signup
          </button>
          <div className="register-link">
            <p>
              Already have an account?{" "}
              <a href="/login" style={{ cursor: "pointer" }}>
                Login here
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
