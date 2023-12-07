import { React } from 'react';
import Footerbar from '../layout/Footernav';
import '../login/Global.css';
import { useGetUserAccountQuery } from './authslice';

export default function AccountPage() {
  const me = useGetUserAccountQuery();

  console.log(' - - - - -');
  console.log(`me:`);
  console.log(JSON.stringify(me, null, 2));
  return (
    <section>
  <div className='global'>
      <h2>My Account</h2>
      <h3>Name: </h3>
      <h3>User ID: </h3>
      <h3>Favorites potentially listed here:</h3>
    </div>
    </section>
  
  );
}
