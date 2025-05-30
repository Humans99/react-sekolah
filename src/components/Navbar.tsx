import { role } from "../lib/data";
import avatar from "../assets/avatar.png";
const Navbar = () => {
  return (
    <div className="bg-white border-b border-gray-300 p-4 flex items-center justify-between">
      {/* Search Bar */}
      <div className="hidden md:flex items-center text-xs rounded-md ring-1 ring-gray-300">
        <i className="ri-search-line text-lg ml-3 text-gray-400"></i>
        <input
          type="text"
          name="search"
          id="search"
          autoComplete="off"
          placeholder="Cari..."
          className="w-52 p-3 bg-transparent outline-none"
          style={{ fontFamily: "monospace" }}
        />
      </div>

      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-gray-50 border border-gray-300 w-10 h-10 flex justify-center items-center cursor-pointer rounded-full">
          <i className="ri-moon-line text-gray-500 text-lg"></i>
        </div>
        <div className="bg-gray-50 border border-gray-300 w-10 h-10 flex justify-center items-center cursor-pointer rounded-full">
          <i className="ri-message-2-line text-gray-500 text-lg"></i>
        </div>
        <div className="bg-gray-50 border border-gray-300 w-10 h-10 flex justify-center items-center cursor-pointer rounded-full">
          <i className="ri-megaphone-line text-gray-500 text-lg"></i>
        </div>
        <div className="flex flex-col">
          <span className="text-sm leading-3 font-medium">John Doe</span>
          <span className="text-xs text-gray-500 text-right capitalize">
            {role}
          </span>
        </div>
        <img src={avatar} alt="" className="rounded-full w-9 cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
