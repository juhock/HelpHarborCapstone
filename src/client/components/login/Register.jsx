import { Link, useNavigate } from 'react-router-dom';
import { React, useState } from 'react';
import { useRegisterMutation } from './authslice';
import './Register.css';

export default function Register() {
  const navigate = useNavigate();
  const [registerUser] = useRegisterMutation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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
      navigate('/');
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className='RegisterForm'>
        <form onSubmit={handleSubmit}>
          <h3>Register Form</h3>
          <label>
            Username/Email:
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          <label>
            Password:
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type='submit'>Register</button>
          <p>
            Already Registered? <Link to='/login'>Login here!</Link>
          </p>
          <br />
        </form>
        {loading && <p>Registering your Account</p>}
        {error && <p>This username is already in use. Please try again.</p>}
      </div>
    </section>
  );
}
