import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="flex h-screen">
      <div className="bg-white w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 border-r border-gray-300">
        <a href="/" className="flex items-center justify-center gap-3">
          <i className="ri-graduation-cap-fill text-xl text-gray-500"></i>
          <h1 className="text-lg text-gray-500 font-semibold hidden lg:block p-2">
            SchooL
          </h1>
        </a>
        <Sidebar />
      </div>
      <div className="bg-gray-50 w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] overflow-scroll flex flex-col">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
