import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import "./App.css";
import Footerbar from "./Footernav.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footerbar />
    </>
  );
}

export default App;
