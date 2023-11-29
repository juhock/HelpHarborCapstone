import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import "./app.css";


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
