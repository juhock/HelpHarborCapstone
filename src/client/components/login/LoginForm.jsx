import { Link, useNavigate } from "react-router-dom";
import { React, useState } from "react";
import { useLoginMutation, useRegisterMutation } from "./authslice";
import "./LoginForm.css";

export default function LoginForm() {
  const navigate = useNavigate();

  //Set state for username and password

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const authAction = isLogin ? "Login" : "Register";

  const [login, { error: loginError }] = useLoginMutation();
  const [register, { error: registerError }] = useRegisterMutation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authMethod = isLogin ? login : register;
    const credentials = { username, password };
    setLoading(true);
    setError(null);

    try {
      //we need to unwrap to handle and catch errors
      await authMethod(credentials).unwrap();
      navigate("/users/me");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <section>
      <div className="logBody">
        <div className="login">
          <div className="logBorder">
            <h1>{authAction}</h1>
          </div>
          <form onSubmit={handleSubmit} id="loginForm">
            <label className="logLabels">
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                className="loginInput"
              />
            </label>

            <label className="logLabels">
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="loginInput"
              />
            </label>

            <button id="logButton">{authAction}</button>
          </form>

          <p id="registerlink">
            No Account? <Link to="/register">Register here</Link>
          </p>
          <br />

          {isLogin && loginError && (
            <p>Username or Password is Incorrect. Please try again.</p>
          )}
          {!isLogin && registerError && (
            <p>Username or Password is Incorrect. Please try again.</p>
          )}
        </div>
      </div>
    </section>
  );
}
