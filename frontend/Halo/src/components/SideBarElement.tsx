import React from "react";

interface SideBarElementProps {
  element: string;
  logo: string;
  active: boolean;
  onClick: () => void;
}

const SideBarElement = ({
  element,
  logo,
  active,
  onClick,
}: SideBarElementProps) => {
  return (
    <div
      className={`flex flex-row items-center cursor-pointer p-2 space-x-4`}
      onClick={onClick}
    >
      <div
        className={`flex flex-row p-2 w-full h-auto items-center rounded-lg ${
          active
            ? "bg-sky-500/30 shadow-xl backdrop-blur-sm outline outline-2 outline-offset-[-1px] outline-white/50"
            : ""
        }`}
      >
        <img src={logo} alt={`${element} icon`} className="w-6 h-6" />
        <div className="text-black text-sm font-sf-pro pl-4">{element}</div>
      </div>
    </div>
  );
};

export default SideBarElement;
