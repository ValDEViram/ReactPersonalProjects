import { Outlet } from "react-router-dom";
import NavigationBar from "./navigation";

const Layout = () => {
  return (
    <main className="flex-1 bg-[#F2F2F2] h-svh grid grid-cols-12">
      <div className="col-span-2">
        <NavigationBar />
      </div>
      <div className="col-span-10">
        <Outlet />{" "}
      </div>
    </main>
  );
};

export default Layout;
