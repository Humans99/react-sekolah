import { role } from "../lib/data";
import { menuItems } from "../lib/menu";

const Sidebar = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="text-gray-400 font-light text-xs hidden lg:block my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <a
                  href={item.href}
                  key={item.label}
                  className="flex items-center gap-4 justify-center lg:justify-start text-gray-700 py-2 font-medium rounded-lg md:px-2 hover:bg-brand-100"
                >
                  <img src={item.icon} alt="" className="w-6" />
                  <span className="hidden lg:block whitespace-nowrap text-gray-700 font-mono font-semibold">
                    {item.label}
                  </span>
                </a>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
