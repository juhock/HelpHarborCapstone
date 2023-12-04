import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input type="text" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" />
        </label>
        <br />
        <button type="button">Login</button>
      </form>

      {/* Section for registration link */}
      <div>
        <p>No Account? <Link to="/register">Register here</Link></p>
      </div>
    </div>
  );
};

export default LoginForm;
