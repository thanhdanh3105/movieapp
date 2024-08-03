import React from "react";
import { NavLink } from "react-router-dom";
import { mobileNavigation } from "../contants/navigation";
const MobileNavigation = () => {
  return (
    <section className="lg:hidden h-14 bg-black bg-opacity-70 fixed backdrop-blur-2xl bottom-0 w-full z-40">
      <div className="flex items-center justify-between h-full text-neutral-400">
        {mobileNavigation.map((item, index) => {
          return (
            <NavLink
              key={item.label + "mobile-navigation" + index}
              to={item.href}
              className={({ isActive }) =>
                `px-3 flex flex-col h-full items-center justify-center ${
                  isActive && "text-neutral-100"
                }`
              }
            >
              <div className="text-2xl">{item.icon}</div>
              <p className="text-sm">{item.label}</p>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};
export default MobileNavigation;
