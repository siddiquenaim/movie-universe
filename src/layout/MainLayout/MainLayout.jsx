import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./MainLayout.css";
import ScrollToTop from "react-scroll-to-top";

const MainLayout = () => {
  return (
    <>
      <Header></Header>
      <div className="outlet">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ScrollToTop top smooth />
    </>
  );
};

export default MainLayout;
