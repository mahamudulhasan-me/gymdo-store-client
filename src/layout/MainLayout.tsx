import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <footer>footer</footer>
    </div>
  );
};

export default MainLayout;
