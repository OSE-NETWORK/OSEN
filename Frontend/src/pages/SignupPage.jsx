import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function createAccount() {
    try {
      if (password !== confirmPassword) {
        setError("Password and confirm password must be same.");
        console.log("Password and confirm password must be same.");
        return;
      }
      await createUserWithEmailAndPassword(getAuth(), email, password);
      console.log("User registered");
      navigate("/");
    } catch (e) {
      setError(e.message);
      console.log(error);
    }
  }

  return (
    <>
    <h1>SignUp</h1>
    {error && <p >{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={createAccount} style={{margin: "20px", color: "blueviolet"}}>Create Account</button>
      <Link to="/auth/login">Already have an account? Log in here</Link>
    </>
  );
}

export default SignUp;