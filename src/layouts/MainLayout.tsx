import { Outlet } from "react-router";
import Navbar from "../components/rootLevelComponents/Navbar";
import Footer from "../components/rootLevelComponents/Footer";

const MainLayout: React.FC = () => {
  return (
    <div className="bg-[#F7F9FC]">
      <Navbar></Navbar>
      <div className="mt-16"><Outlet></Outlet></div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
