import React from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Register Page</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Username" required /> <br /><br />
        <input type="password" placeholder="Password" required /> <br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
