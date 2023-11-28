import { Outlet } from 'react-router-dom';
// import navBar from './components/navBar';

function App() {
  return (
    <>
      {/* <navBar /> */}
      <Outlet />
      <p>Just render this!</p>
    </>
  );
}

export default App;
