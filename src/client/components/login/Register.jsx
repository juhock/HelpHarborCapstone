import { Link } from 'react-router-dom';
import { React, useState } from 'react';
import { useRegisterMutation } from './authslice';
import '../login/Global.css';

export default function Register() {
  const [registerUser] = useRegisterMutation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    registerUser({ username, password });
  };

  return (
    <section>
      <div className='global'>
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
      </div>
    </section>
  );
}
