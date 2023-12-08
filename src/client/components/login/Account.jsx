import { React } from 'react';
import Footerbar from '../layout/Footernav';
import '../login/Global.css';
import { useGetUserAccountQuery } from './authslice';

export default function AccountPage() {
  const { data: me, isLoading } = useGetUserAccountQuery();

  return isLoading || !me ? (
    <p>Your Account is Loading</p>
  ) : (
    <section>
      <div className='global'>
        <h2>My Account</h2>
        <h3>Name: {me.username}</h3>
        <h3>Address: {me.address}</h3>
        <h3>Phone: {me.phone}</h3>
        <h3>User ID: {me.id}</h3>
      </div>
    </section>
  );
}
