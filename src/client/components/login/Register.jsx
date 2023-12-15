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
      <div className="body">
        <div className="RegisterForm">
          <div className="border">
            <h3>Register</h3>
          </div>
          <form onSubmit={handleSubmit} id="regForm">
            <label className="labels">
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="regInput"
              />
            </label>

            <label className="labels">
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="regInput"
              />
            </label>
            <br />
            <button type="submit" id="logRegButton">
              Register
            </button>
            <p id="LoginLink">
              Already Registered? <Link to="/login">Login here!</Link>
            </p>
            <br />
          </form>
          {loading && <p>Registering your Account</p>}
          {error && <p>This username is already in use. Please try again.</p>}
        </div>
      </div>
    </section>
  );
}
