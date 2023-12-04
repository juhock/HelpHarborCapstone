import { Link } from 'react-router-dom';
import { React, useState } from 'react';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');  
  const [checked, setChecked] = useState(false);

  function handleSubmit(e) {
    e.preventDefault(); 
    console.log('Form submitted:', { username, password, checked });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login Form</h3>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>

      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
           <button type="submit">Login</button>
      <p>No Account? <Link to="/register">Register here</Link></p>
      <br />

    </form>
  );
}
