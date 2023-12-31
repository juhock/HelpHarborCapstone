import { Link, useNavigate } from "react-router-dom";
import { React, useState } from "react";
import { useRegisterMutation } from "./authslice";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();
  const [registerUser] = useRegisterMutation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authMethod = registerUser;
    const credentials = { username, password };
    setLoading(true);
    setError(null);

    try {
      //we need to unwrap to handle and catch errors
      await authMethod(credentials).unwrap();
      navigate("/");
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="regBody">
        <div className="register">
          <div className="regBorder">
            <h1>Register</h1>
          </div>
          <form onSubmit={handleSubmit} id="regForm">
            <div className="testy">
              <label className="regLabels">
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="regInput"
                />
              </label>

              <label className="regLabels">
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="regInput"
                />
              </label>
            </div>
            <button type="submit" id="regButton">
              Register
            </button>
          </form>

          <p id="loginLink">
            Already Registered?{" "}
            <Link to="/login" className="logRegLinks">
              Login here!
            </Link>
          </p>
          <br />
          {loading && <p>Registering your Account</p>}
          {error && <p>This username is already in use. Please try again.</p>}
        </div>
      </div>
    </section>
  );
}
