
 

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function logIn() {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <>
      <div style={{display: "block"}}>
        <h1>Log In</h1>
        {error && <p >{error}</p>}
        <input
        type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={logIn} style={{margin: "20px", color: "blueviolet"}}>Log In</button>
        <Link to="/auth/signup">Don't have an account? Create one here</Link>
      </div>
    </>
  );
}

export default LoginPage;