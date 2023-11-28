import { Outlet } from 'react-router-dom';
import Navbar from '../components/features/navBar';

function App() {
  return (
    <>
      <Navbar /> 
      <Outlet />
      <p>Just render this!</p>
    </>
  );
}

export default App;
