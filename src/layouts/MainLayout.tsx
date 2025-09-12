import { Outlet } from "react-router";
import Navbar from "../components/rootLevelComponents/Navbar";
import Footer from "../components/rootLevelComponents/Footer";

const MainLayout: React.FC = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-screen"><Outlet></Outlet></div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
