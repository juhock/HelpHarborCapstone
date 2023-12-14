import { React } from 'react';
import { useGetUserAccountQuery } from './authslice';
import { useDispatch } from 'react-redux';
import './Account.css';
import { logout } from './authslice';
import { useNavigate } from 'react-router';

export default function AccountPage() {
  const { data: me, isLoading } = useGetUserAccountQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutFuntion = () => {
    dispatch(logout());
    navigate('/');
  };

  return isLoading || !me ? (
    <p>Your Account is Loading</p>
  ) : (
    <section>
      <div className='accountBackground'>
        <div className='account'>
          <h2>My Account</h2>
          <h3>Name: {me.username}</h3>
          <h3>Address: {me.address}</h3>
          <h3>Phone: {me.phone}</h3>
          <h3>User ID: {me.id}</h3>
          <button onClick={logoutFuntion}>Logout</button>
        </div>
      </div>
    </section>
  );
}
