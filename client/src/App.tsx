import { Outlet } from "react-router-dom";
import "./App.css";
import { Footer } from "./pages/homepage/footer";
import { NavBar } from "./pages/homepage/navbar";
function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
