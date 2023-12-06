import { Link, useNavigate } from 'react-router-dom';
import { React, useState } from 'react';
import { useLoginMutation, useRegisterMutation } from './authslice';
import '../login/Global.css';

export default function LoginForm() {
  const navigate = useNavigate();

  //Set state for username and password

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const authAction = isLogin ? 'Login' : 'Register';

  const altCopy = isLogin
    ? "Don't have an Account? Register here!"
    : 'Already have an account? Login';

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
      navigate('/users/me');
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className='global'>
      <h1>{authAction}</h1>
      <form onSubmit={handleSubmit}>
        <h3>Login Form</h3>
        <label>
          Username:
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete='username'
          />
        </label>

        <label>
          Password:
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete='current-password'
          />
        </label>

        <br />
        <button>{authAction}</button>
        <p>
          No Account? <Link to='/register'>Register here</Link>
        </p>
        <br />
      </form>

      <a onClick={() => setIsLogin(!isLogin)}>{altCopy}</a>

      {isLogin && loginError && <p role='alert'>{loginError}</p>}
      {!isLogin && registerError && <p role='alert'>{registerError}</p>}
      {loading && <p>Page is Loading...</p>}
      {error && <p>Oops...Something went Wrong!</p>}
    </div>
  );
}
