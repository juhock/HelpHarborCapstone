import { Link } from 'react-router-dom';
import { React, useState } from 'react';
import '../login/Global.css';
export default function LoginForm() {
  const Navigate = useNavigate();
  //Set state for username and passwordd
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
      Navigate('/users/me');
    } catch (error) {
      setError(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login Form</h3>
      <label>
        Username:
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
      <button type='submit'>Login</button>
      <p>
        No Account? <Link to='/register'>Register here</Link>
      </p>
      <br />
    </form>
  );
}
