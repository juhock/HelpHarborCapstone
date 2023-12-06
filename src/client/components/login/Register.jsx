import { Link } from 'react-router-dom';
import { React, useState } from 'react';
import '../login/Global.css';


export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');  

  function handleSubmit(e) {
    e.preventDefault(); 
  }

  return (
    <section>
    <div class="global">

    <form onSubmit={handleSubmit}>
      <h3>Register Form</h3>
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
      <p>Already Registered? <Link to="/login">Login here!</Link></p>
      <br />

    </form>
    </div>
    </section>

  );
}
